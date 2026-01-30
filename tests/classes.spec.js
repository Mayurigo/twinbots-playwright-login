import { test } from '@playwright/test';

test.setTimeout(0);

test.use({
  channel: 'chrome',
  launchOptions: { headless: false, args: ['--start-maximized'] }
});

test('Admin Login – Manual Classes Module', async ({ page }) => {

  await page.goto('https://app.is-kool.com/auth/login', { waitUntil: 'domcontentloaded' });

  await page.fill('input[type="email"]', 'twinbots.llc@gmail.com');
  await page.fill('input[type="password"]', 'admin@123');
  await page.fill('input[placeholder*="School"]', 'S001');
  await page.click('button:has-text("Login")');

  await page.waitForLoadState('networkidle');

  console.log('✅ Logged in');
  console.log('👉 Manually click: Menu → Classes');
  console.log('🛑 Close browser to stop test');

  await new Promise(() => {});
});
