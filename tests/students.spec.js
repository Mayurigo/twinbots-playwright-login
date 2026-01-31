import { test, expect } from '@playwright/test';

test.use({
  browserName: 'chromium',
  headless: false,
  launchOptions: {
    args: ['--start-maximized'],
  },
});

test('Students Module - BDD Flow', async ({ page }) => {

  // =========================
  // ✅ GIVEN
  // =========================
  console.log("GIVEN: User is on login page");

  await page.goto('https://app.is-kool.com/auth/login');
  await expect(page).toHaveURL(/login/);


  // =========================
  // ✅ WHEN (Login)
  // =========================
  console.log("WHEN: User logs in");

  await page.fill('input[type="email"]', 'twinbots.llc@gmail.com');
  await page.fill('input[type="password"]', 'admin@123');
  await page.fill('input[placeholder*="School"]', 'S001');

  await page.click('button:has-text("Login")');


  // =========================
  // ✅ THEN (Login success)
  // =========================
  console.log("THEN: Login successful");

  await expect(page).not.toHaveURL(/login/);
  await page.waitForLoadState('networkidle');


  // =========================
  // ✅ WHEN (Open Menu only)
  // =========================
  console.log("WHEN: User clicks Menu");

  await page.getByText('Menu').click();

  await expect(page.getByText('Menu')).toBeVisible();


  // =========================
  // ✅ MANUAL STEP
  // =========================
  console.log("👉 Now YOU click 'Students' manually");
  console.log("Browser will stay open...");

  // =========================
  // 🔥 KEEP BROWSER OPEN
  // =========================
  await new Promise(() => {});
});
