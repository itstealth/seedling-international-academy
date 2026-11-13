import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('reports').filter(f => f.includes('baseline-mobile') && f.endsWith('.report.json'));
files.sort((a, b) => fs.statSync(path.join('reports', b)).mtimeMs - fs.statSync(path.join('reports', a)).mtimeMs);
const latest = files[0];

const report = JSON.parse(fs.readFileSync(path.join('reports', latest), 'utf8'));

console.log('=== OPPORTUNITIES ===');
for (const [id, audit] of Object.entries(report.audits)) {
  if (audit.details && audit.details.type === 'opportunity' && audit.numericValue > 50) {
    console.log(`- ${audit.title} (${id}): ${audit.displayValue || Math.round(audit.numericValue) + 'ms'}`);
  }
}

console.log('\n=== DIAGNOSTICS & FAILED AUDITS ===');
for (const [id, audit] of Object.entries(report.audits)) {
  if (audit.score !== null && audit.score < 0.9 && audit.scoreDisplayMode !== 'notApplicable' && audit.scoreDisplayMode !== 'informative') {
    if (!audit.details || audit.details.type !== 'opportunity') {
      console.log(`- [${audit.score}] ${audit.title} (${id}): ${audit.displayValue || ''}`);
    }
  }
}

console.log('\n=== ACCESSIBILITY ISSUES ===');
for (const [id, audit] of Object.entries(report.audits)) {
  if (report.categories.accessibility.auditRefs.some(ref => ref.id === id) && audit.score === 0) {
    console.log(`- ${audit.title} (${id}): ${audit.explanation || ''}`);
  }
}

console.log('\n=== BEST PRACTICES ISSUES ===');
for (const [id, audit] of Object.entries(report.audits)) {
  if (report.categories['best-practices'].auditRefs.some(ref => ref.id === id) && audit.score === 0) {
    console.log(`- ${audit.title} (${id}): ${audit.explanation || ''}`);
  }
}

console.log('\n=== SEO ISSUES ===');
for (const [id, audit] of Object.entries(report.audits)) {
  if (report.categories.seo.auditRefs.some(ref => ref.id === id) && audit.score === 0) {
    console.log(`- ${audit.title} (${id}): ${audit.explanation || ''}`);
  }
}

