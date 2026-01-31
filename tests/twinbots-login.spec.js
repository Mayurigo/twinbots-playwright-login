import { test, expect } from '@playwright/test';

test.setTimeout(0); // No timeout

test.use({
  channel: 'chrome',
  headless: false,
  launchOptions: {
    args: ['--start-maximized'],
  },
});

test('Twinbots Login Demo', async ({ page }) => {

  // Open login page
  await page.goto('https://app.is-kool.com/auth/login');

  // ==============================
  // ✅ VALID LOGIN (ACTIVE)
  // ==============================

  await page.fill('input[type="email"]', 'twinbots.llc@gmail.com');
  await page.fill('input[type="password"]', 'admin@123');
  await page.fill('input[placeholder*="School"]', 'S001');

  await page.click('button:has-text("Login")');

  // Validate login success
  await expect(page).not.toHaveURL(/login/);

  console.log("✅ Valid login successful");


  // ==============================
  // ❌ INVALID LOGIN (COMMENTED)
  // Uncomment when needed
  // ==============================
/*
  
  await page.goto('https://app.is-kool.com/auth/login');

  await page.fill('input[type="email"]', 'wrong@gmail.com');
  await page.fill('input[type="password"]', 'wrong123');
  await page.fill('input[placeholder*="School"]', 'S999');

  await page.click('button:has-text("Login")');

  // Expect error or still on login page
  await expect(page).toHaveURL(/login/);

  console.log("✅ Invalid login validation working");
  */


  console.log("👉 Browser will stay open");
  console.log("👉 Do manual testing");
  console.log("👉 Close browser to stop");

  //  Stay open forever
  await new Promise(() => {});
});
