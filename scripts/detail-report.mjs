import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('reports').filter(f => f.includes('baseline-mobile') && f.endsWith('.report.json'));
files.sort((a, b) => fs.statSync(path.join('reports', b)).mtimeMs - fs.statSync(path.join('reports', a)).mtimeMs);
const report = JSON.parse(fs.readFileSync(path.join('reports', files[0]), 'utf8'));

function dumpAudit(id) {
  const audit = report.audits[id];
  if (!audit) return;
  console.log(`\n================== ${audit.title} (${id}) ==================`);
  if (audit.displayValue) console.log(`Display Value: ${audit.displayValue}`);
  if (audit.explanation) console.log(`Explanation: ${audit.explanation}`);
  if (audit.details && audit.details.items) {
    console.log(JSON.stringify(audit.details.items.slice(0, 10), null, 2));
  }
}

dumpAudit('largest-contentful-paint-element');
dumpAudit('total-byte-weight');
dumpAudit('bootup-time');
dumpAudit('mainthread-work-breakdown');
dumpAudit('errors-in-console');
dumpAudit('aria-prohibited-attr');
dumpAudit('color-contrast');
dumpAudit('heading-order');
dumpAudit('label-content-name-mismatch');
dumpAudit('render-blocking-insight');

