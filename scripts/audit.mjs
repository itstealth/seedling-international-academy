import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = process.env.CHROME_PATH || '/home/danish/.cache/ms-playwright/chromium-1254/chrome-linux64/chrome';
const URL = process.env.TARGET_URL || 'http://127.0.0.1:3000';
const OUT_DIR = path.resolve('reports');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

function runAudit(preset = 'mobile', iteration = 'baseline') {
  const timestamp = Date.now();
  const jsonPath = path.join(OUT_DIR, `${iteration}-${preset}-${timestamp}.json`);
  const htmlPath = path.join(OUT_DIR, `${iteration}-${preset}-${timestamp}.html`);

  const flags = [
    `--chrome-flags="--headless=new --no-sandbox --disable-dev-shm-usage --disable-gpu"`,
    `--output=json,html`,
    `--output-path="${path.join(OUT_DIR, `${iteration}-${preset}-${timestamp}`)}"`,
    `--only-categories=performance,accessibility,best-practices,seo`,
    `--no-enable-error-reporting`,
    `--quiet`,
  ];

  if (preset === 'desktop') {
    flags.push('--preset=desktop');
  }

  const cmd = `CHROME_PATH="${CHROME_PATH}" npx lighthouse ${URL} ${flags.join(' ')}`;
  console.log(`Running Lighthouse (${preset}) against ${URL}...`);
  try {
    execSync(cmd, { stdio: 'inherit', env: { ...process.env, CHROME_PATH } });
    
    // Lighthouse writes .report.json and .report.html
    const reportJsonPath = path.join(OUT_DIR, `${iteration}-${preset}-${timestamp}.report.json`);
    const raw = fs.readFileSync(reportJsonPath, 'utf8');
    const result = JSON.parse(raw);

    const categories = result.categories;
    const audits = result.audits;

    const summary = {
      preset,
      iteration,
      performance: Math.round((categories.performance?.score || 0) * 100),
      accessibility: Math.round((categories.accessibility?.score || 0) * 100),
      bestPractices: Math.round((categories['best-practices']?.score || 0) * 100),
      seo: Math.round((categories.seo?.score || 0) * 100),
      fcp: audits['first-contentful-paint']?.displayValue,
      fcp_val: audits['first-contentful-paint']?.numericValue,
      lcp: audits['largest-contentful-paint']?.displayValue,
      lcp_val: audits['largest-contentful-paint']?.numericValue,
      tbt: audits['total-blocking-time']?.displayValue,
      tbt_val: audits['total-blocking-time']?.numericValue,
      cls: audits['cumulative-layout-shift']?.displayValue,
      cls_val: audits['cumulative-layout-shift']?.numericValue,
      si: audits['speed-index']?.displayValue,
      si_val: audits['speed-index']?.numericValue,
      jsExecution: audits['bootup-time']?.displayValue,
      totalByteWeight: audits['total-byte-weight']?.displayValue,
      reportJson: reportJsonPath,
    };

    console.log(`--- [${preset.toUpperCase()}] Results (Score: ${summary.performance}) ---`);
    console.table({
      Performance: summary.performance,
      Accessibility: summary.accessibility,
      BestPractices: summary.bestPractices,
      SEO: summary.seo,
      FCP: summary.fcp,
      LCP: summary.lcp,
      TBT: summary.tbt,
      CLS: summary.cls,
      SpeedIndex: summary.si,
      JSExecution: summary.jsExecution,
      TotalPayload: summary.totalByteWeight,
    });

    return summary;
  } catch (err) {
    console.error(`Lighthouse failed for ${preset}:`, err.message);
    throw err;
  }
}

const presetArg = process.argv[2] || 'both';
const iterationArg = process.argv[3] || 'run';

const results = [];
if (presetArg === 'mobile' || presetArg === 'both') {
  results.push(runAudit('mobile', iterationArg));
}
if (presetArg === 'desktop' || presetArg === 'both') {
  results.push(runAudit('desktop', iterationArg));
}

fs.writeFileSync(path.join(OUT_DIR, `summary-${iterationArg}-${Date.now()}.json`), JSON.stringify(results, null, 2));
