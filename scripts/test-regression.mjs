import { chromium } from 'playwright';

const CHROME_PATH = process.env.CHROME_PATH || '/home/danish/.cache/ms-playwright/chromium-1254/chrome-linux64/chrome';
const BASE_URL = process.env.TARGET_URL || 'http://127.0.0.1:3000';

async function testViewport(isMobile = false) {
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true,
  });

  const context = await browser.newContext(
    isMobile
      ? {
          viewport: { width: 412, height: 823 },
          isMobile: true,
          hasTouch: true,
          userAgent:
            'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36',
        }
      : {
          viewport: { width: 1350, height: 940 },
        }
  );

  const page = await context.newPage();
  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      // Ignore external tracker network failures if third-party is blocked
      const text = msg.text();
      consoleErrors.push(text);
    }
  });

  page.on('requestfailed', (req) => {
    const url = req.url();
    // Ignore external analytics/trackers failing in offline/sandboxed test
    if (url.includes('google') || url.includes('clarity') || url.includes('nopaperforms')) {
      return;
    }
    failedRequests.push({ url, failure: req.failure()?.errorText });
  });

  console.log(`[Testing ${isMobile ? 'Mobile' : 'Desktop'}] Navigating to ${BASE_URL}...`);
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});

  // 1. Verify key elements render
  const brandName = await page.textContent('body');
  if (!brandName || !brandName.includes('Seedling')) {
    throw new Error('Key brand text missing from page');
  }

  // 2. Check Navbar
  const navVisible = await page.locator('nav').first().isVisible();
  console.log(`- Navbar visible: ${navVisible}`);

  // 3. Test interactive tabs (World-Class Facilities tabs: campus, labs, sports, arts)
  const tabs = ['labs', 'sports', 'arts', 'campus'];
  for (const tab of tabs) {
    const tabBtn = page.locator(`button[data-tab="${tab}"], button:has-text("${tab}")`).first();
    if (await tabBtn.count()) {
      await tabBtn.click().catch(() => {});
    }
  }

  // 4. Check footer
  const footerVisible = await page.locator('footer').isVisible();
  console.log(`- Footer visible: ${footerVisible}`);

  await browser.close();

  console.log(`- Console errors (${consoleErrors.length}):`, consoleErrors.slice(0, 3));
  console.log(`- Failed internal requests (${failedRequests.length}):`, failedRequests);

  if (failedRequests.length > 0) {
    throw new Error(`Failed internal requests: ${JSON.stringify(failedRequests)}`);
  }

  console.log(`[${isMobile ? 'Mobile' : 'Desktop'}] All regression tests passed!\n`);
}

async function run() {
  await testViewport(false);
  await testViewport(true);
}

run().catch((err) => {
  console.error('Regression test failed:', err);
  process.exit(1);
});

