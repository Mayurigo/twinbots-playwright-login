import { test, expect } from '@playwright/test';

test.setTimeout(0); // disable timeout

test.use({
  browserName: 'chromium', // ONLY chromium
  headless: false,
  launchOptions: {
    args: ['--start-maximized'],
  },
});

test('Twinbots Login Demo - Stay Open', async ({ page }) => {

  // Go to login page
  await page.goto('https://app.is-kool.com/auth/login');

  // VALID LOGIN
  await page.fill('input[type="email"]', 'twinbots.llc@gmail.com');
  await page.fill('input[type="password"]', 'admin@123');
  await page.fill('input[placeholder*="School"]', 'S001');

  await page.click('button:has-text("Login")');

  // Confirm login success
  await expect(page).not.toHaveURL(/login/);

  console.log("✅ Login successful");
  console.log("👉 Browser will NOT close");
  console.log("👉 Do manual testing");
  console.log("👉 Close browser yourself when done");

  // 🔥 KEEP OPEN FOREVER
  await new Promise(() => {});
});
