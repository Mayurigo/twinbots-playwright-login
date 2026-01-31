import { test, expect } from '@playwright/test';

// Disable timeout so browser never closes automatically
test.setTimeout(0);

test.use({
  channel: 'chrome',
  launchOptions: {
    headless: false,
    args: ['--start-maximized'],
  },
});

test('Instructors Module - Manual Flow', async ({ page }) => {

  // =========================
  // ✅ GIVEN
  // =========================
  console.log("GIVEN: User is on login page");

  await page.goto('https://app.is-kool.com/auth/login');
  await expect(page).toHaveURL(/login/);


  // =========================
  // ✅ WHEN (Login)
  // =========================
  console.log("WHEN: User enters credentials");

  await page.fill('input[type="email"]', 'twinbots.llc@gmail.com');
  await page.fill('input[type="password"]', 'admin@123');
  await page.fill('input[placeholder*="School"]', 'S001');

  await page.click('button:has-text("Login")');


  // =========================
  // ✅ THEN (Login success)
  // =========================
  console.log("THEN: Login should succeed");

  await expect(page).not.toHaveURL(/login/);
  await page.waitForLoadState('networkidle');

  console.log("✅ Logged in successfully");


  // =========================
  // ✅ WHEN (Open Menu only)
  // =========================
  console.log("WHEN: User clicks Menu");

  await page.getByText('Menu').click();
  await expect(page.getByText('Menu')).toBeVisible();


  // =========================
  // 🔥 MANUAL STEP
  // =========================
  console.log("👉 Now manually click: Instructors");
  console.log("🛑 Close browser to stop test");


  // 🔒 Keep browser open forever
  await new Promise(() => {});
});
