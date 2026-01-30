import { test } from '@playwright/test';

test.setTimeout(0); // No timeout at all

test.use({
  channel: 'chrome',
  launchOptions: {
    headless: false,
    args: ['--start-maximized'],
  },
});

test('Twinbots Admin - Login and Wait (Manual Navigation)', async ({ page }) => {

  // 1️⃣ Open Login Page
  await page.goto('https://app.is-kool.com/auth/login', {
    waitUntil: 'domcontentloaded',
  });

  // 2️⃣ Login
  await page.fill('input[type="email"]', 'twinbots.llc@gmail.com');
  await page.fill('input[type="password"]', 'admin@123');
  await page.fill('input[placeholder*="School"]', 'S001');
  await page.click('button:has-text("Login")');

  // 3️⃣ Wait for dashboard
  await page.waitForLoadState('networkidle');

  console.log('✅ Logged in successfully');
  console.log('👉 You can now manually:');
  console.log('   • Click Menu');
  console.log('   • Click Subjects');
  console.log('   • Explore any module');
  console.log('🛑 Close browser manually to stop test');

  // 🔒 KEEP BROWSER OPEN FOREVER
  await new Promise(() => {});
});
