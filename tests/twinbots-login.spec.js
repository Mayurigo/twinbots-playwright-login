import { test } from '@playwright/test';

test.setTimeout(0); // Disable timeout completely

test.use({
  channel: 'chrome',
  launchOptions: {
    headless: false,
    args: ['--start-maximized'],
  },
});

test('Twinbots Admin - DEMO MODE (Manual Admission)', async ({ page }) => {

  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => undefined,
    });
  });

  // Go to login page
  await page.goto('https://app.is-kool.com/auth/login', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);

  // Login
  await page.fill('input[type="email"]', 'twinbots.llc@gmail.com');
  await page.fill('input[type="password"]', 'admin@123');
  await page.fill('input[placeholder*="School"]', 'S001');
  await page.click('button:has-text("Login")');

  // Wait for dashboard
  await page.waitForTimeout(7000);

  console.log(" Login successful.");
  console.log(" Now manually click: Menu → Admission → Application");
  console.log(" Fill the form and submit manually.");
  console.log(" Close browser window to stop the test.");

  // Keep browser open forever until YOU close it
  await new Promise(() => {});
});
