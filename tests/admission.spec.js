import { test, expect } from '@playwright/test';

test.use({
  browserName: 'chromium',
  headless: false,
  launchOptions: {
    args: ['--start-maximized'],
  },
});

test('Admission Module - BDD Flow', async ({ page }) => {

  // =========================
  // ✅ GIVEN
  // =========================
  console.log("GIVEN: User is on login page");

  await page.goto('https://app.is-kool.com/auth/login');
  await expect(page).toHaveURL(/login/);


  // =========================
  // ✅ WHEN (Login)
  // =========================
  console.log("WHEN: User enters valid credentials");

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


  // =========================
  // ✅ WHEN (Navigate)
  // =========================
  console.log("WHEN: User opens Menu → Admission");

  await page.getByText('Menu').click();
  await page.getByText('Admission', { exact: true }).click();


  // =========================
  // ✅ THEN (Admission visible)
  // =========================
  console.log("THEN: Admission page should display");

  await expect(page.getByText('Admission')).toBeVisible();
  await page.waitForLoadState('networkidle');


  // =========================
  // ✅ THEN (Table validation)
  // =========================
  console.log("THEN: Admission table should have data");

  const firstRow = page.locator('tbody tr').first();
  await expect(firstRow).toBeVisible();

  const appNumber = firstRow.locator('td').nth(0);
  const studentName = firstRow.locator('td').nth(1);
  const status = firstRow.locator('td').nth(5);

  await expect(appNumber).not.toBeEmpty();
  await expect(studentName).not.toBeEmpty();

  // ✅ Case-insensitive match (fixes your error)
  await expect(status).toContainText(/approved/i);

  console.log("✅ Admission data validated successfully");


  // =========================
  // 🔥 STAY OPEN
  // =========================
  console.log("Browser stays open for manual testing");

  await new Promise(() => {});
});
