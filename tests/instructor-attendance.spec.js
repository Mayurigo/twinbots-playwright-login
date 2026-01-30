import { test } from '@playwright/test';

test.setTimeout(0);

test.use({
  channel: 'chrome',
  launchOptions: {
    headless: false,
    args: ['--start-maximized'],
  },
});

test('Twinbots Admin - Stop at Menu and Wait for Manual Navigation', async ({ page }) => {

  // Go to Login page
  await page.goto('https://app.is-kool.com/auth/login', { waitUntil: 'domcontentloaded' });

  // Login
  await page.fill('input[type="email"]', 'twinbots.llc@gmail.com');
  await page.fill('input[type="password"]', 'admin@123');
  await page.fill('input[placeholder*="School"]', 'S001');
  await page.click('button:has-text("Login")');

  // Wait for Dashboard/Menu to load
  await page.waitForLoadState('networkidle');

  console.log("Logged in successfully.");
  console.log("Now you are on Menu page.");
  console.log("Manually click: Menu → Staff Attendance");
  console.log("You control navigation now.");
  console.log("Close browser window to stop test.");

  // Stay open forever until YOU close browser
  await new Promise(() => {});
});
