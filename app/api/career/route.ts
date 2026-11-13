// app/api/career/route.ts
//
// Career applications from the Cambridge site. Until now the form on /career
// only showed "Thank you" and sent nothing anywhere.
//
// Cambridge has no database of its own, so each application is kept two ways
// before the applicant is told it worked:
//   - a local copy, one JSON line per application, in the outbox directory
//     (outside the web root): career-applications.jsonl
//   - the CMS outbox (lib/cms-leads.ts), which delivers it to Cambridge's
//     Career applications inbox in the CMS and retries until it is confirmed.
// The CV itself is saved under public/uploads/career/, like SPS and SMHS.
import { after } from 'next/server';
import { appendFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { randomBytes, randomUUID } from 'node:crypto';
import { attributionFrom, flushOutbox, pageFrom, queueForCms } from '@/lib/cms-leads';

const MAX_CV_BYTES = 5 * 1024 * 1024;
const CV_TYPES = ['pdf', 'doc', 'docx'];

// A light per-IP brake; real applicants submit once.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function field(form: FormData, name: string, max = 500): string | undefined {
  const v = form.get(name);
  return typeof v === 'string' && v.trim() ? v.trim().slice(0, max) : undefined;
}

export async function POST(request: Request) {
  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) {
    return Response.json({ error: 'Too many submissions. Please try again in a few minutes.' }, { status: 429 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: 'Could not read the form. Please try again.' }, { status: 400 });
  }

  const name = field(form, 'name', 120);
  const mobile = field(form, 'mobile', 40);
  if (!name) return Response.json({ error: 'Name is required' }, { status: 400 });
  if (!mobile || mobile.replace(/\D/g, '').length < 10) {
    return Response.json({ error: 'Please enter a valid mobile number' }, { status: 400 });
  }

  // The form says "PDF, DOC, DOCX, max 5MB"; enforced here, where it holds.
  const cv = form.get('cv');
  const cvFile = cv instanceof File && cv.size > 0 ? cv : null;
  if (cvFile && cvFile.size > MAX_CV_BYTES) {
    return Response.json({ error: 'CV must be under 5MB' }, { status: 400 });
  }
  const ext = cvFile?.name.split('.').pop()?.toLowerCase() ?? '';
  if (cvFile && !CV_TYPES.includes(ext)) {
    return Response.json({ error: 'CV must be a PDF, DOC or DOCX file' }, { status: 400 });
  }

  try {
    let cvFilename: string | undefined;
    let cvPath: string | undefined;
    if (cvFile) {
      const stored = `cv-${Date.now()}-${randomBytes(4).toString('hex')}.${ext}`;
      const dir = path.join(process.cwd(), 'public', 'uploads', 'career');
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, stored), Buffer.from(await cvFile.arrayBuffer()));
      cvFilename = cvFile.name.slice(0, 200);
      cvPath = `/uploads/career/${stored}`;
    }

    const { site } = pageFrom(request);
    const application = {
      externalId: randomUUID(),
      submittedAt: new Date().toISOString(),
      name,
      mobile,
      email: field(form, 'email', 254),
      qualification: field(form, 'qualification'),
      experience: field(form, 'experience'),
      subject: field(form, 'subject'),
      board: field(form, 'board'),
      classes: field(form, 'classes'),
      jobType: field(form, 'jobType'),
      roleApplied: field(form, 'role', 200),
      cvFilename,
      cvPath,
      site,
      attribution: attributionFrom(request),
    };

    // Local copy first: this is Cambridge's own record of the application.
    const outbox = process.env.CMS_OUTBOX_DIR || path.join(process.cwd(), '.cms-outbox');
    await mkdir(outbox, { recursive: true });
    await appendFile(path.join(outbox, 'career-applications.jsonl'), JSON.stringify(application) + '\n', 'utf8');

    await queueForCms('career', application);
    after(() => flushOutbox());

    return Response.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error('POST /api/career error:', err);
    return Response.json({ error: 'We could not submit your application. Please try again.' }, { status: 500 });
  }
}
