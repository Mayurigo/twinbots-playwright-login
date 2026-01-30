import { test } from '@playwright/test';

// Disable timeout so browser never closes automatically
test.setTimeout(0);

test.use({
  channel: 'chrome',
  launchOptions: {
    headless: false,
    args: ['--start-maximized'],
  },
});

test('Twinbots Admin - Login and Wait (Manual Instructors)', async ({ page }) => {

  // 1️⃣ Open Login Page
  await page.goto('https://app.is-kool.com/auth/login', {
    waitUntil: 'domcontentloaded',
  });

  // 2️⃣ Login
  await page.fill('input[type="email"]', 'twinbots.llc@gmail.com');
  await page.fill('input[type="password"]', 'admin@123');
  await page.fill('input[placeholder*="School"]', 'S001');
  await page.click('button:has-text("Login")');

  // 3️⃣ Wait for dashboard/menu to load
  await page.waitForLoadState('networkidle');

  console.log(' Logged in successfully');
  console.log(' Now YOU can manually:');
  console.log('   Menu → Instructors');
  console.log(' Close browser manually to stop the test');

  // 🔒 Keep browser open forever until YOU close it
  await new Promise(() => {});
});
