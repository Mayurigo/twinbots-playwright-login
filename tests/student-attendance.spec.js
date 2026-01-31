import { test, expect } from '@playwright/test';

test.setTimeout(0);

test.use({
  channel: 'chrome',
  launchOptions: { 
    headless: false, 
    args: ['--start-maximized'] 
  }
});

test('Student Attendance - BDD Manual Flow', async ({ page }) => {

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

  console.log("✅ Login successful");


  // =========================
  // ✅ WHEN (Open Menu)
  // =========================
  console.log("WHEN: User clicks Menu");

  await page.getByText('Menu').click();
  await expect(page.getByText('Menu')).toBeVisible();


  // =========================
  // 🔥 MANUAL STEP
  // =========================
  console.log("👉 Now manually click: Student Attendance");
  console.log("👉 Verify attendance data if needed");
  console.log("🛑 Close browser to stop test");


  // =========================
  // 🔒 KEEP OPEN FOREVER
  // =========================
  await new Promise(() => {});
});
