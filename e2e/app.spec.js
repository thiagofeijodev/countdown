import { test, expect } from '@playwright/test';

test.describe('Countdown Timer App', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app
    const appUrl = process.env.APP_URL || 'http://localhost:3001/';
    await page.goto(appUrl);
  });

  test('should display welcome message when no countdown is set', async ({ page }) => {
    // Check for welcome title
    await expect(page.getByRole('heading', { name: /welcome to countdown/i })).toBeVisible();

    // Check for info text
    await expect(page.getByText(/a minimal, ad-free countdown/i)).toBeVisible();

    // Check for date input field
    await expect(page.getByLabel(/countdown date/i)).toBeVisible();

    // Check for submit button
    await expect(page.getByRole('button', { name: /start countdown/i })).toBeVisible();
  });

  test('should allow setting a countdown date and time', async ({ page }) => {
    // Wait for the form to be visible
    await expect(page.getByLabel(/countdown date/i)).toBeVisible();

    // Calculate a future date (1 day from now)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    futureDate.setHours(12, 0, 0, 0);

    // Format date for datetime-local input (YYYY-MM-DDTHH:mm)
    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    const hours = String(futureDate.getHours()).padStart(2, '0');
    const minutes = String(futureDate.getMinutes()).padStart(2, '0');
    const dateTimeValue = `${year}-${month}-${day}T${hours}:${minutes}`;

    // Fill in the date and time
    await page.getByLabel(/countdown date/i).fill(dateTimeValue);

    // Submit the form
    await page.getByRole('button', { name: /start countdown/i }).click();

    // Wait for the timer to appear
    await expect(page.getByRole('heading', { name: /countdown timer/i })).toBeVisible();

    // Check that timer display elements are visible
    await expect(page.getByText(/days|hours|minutes|seconds/i).first()).toBeVisible();
  });

  test('should display timer with countdown values', async ({ page }) => {
    // Set a countdown date (1 day from now)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    futureDate.setHours(12, 0, 0, 0);

    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    const hours = String(futureDate.getHours()).padStart(2, '0');
    const minutes = String(futureDate.getMinutes()).padStart(2, '0');
    const dateTimeValue = `${year}-${month}-${day}T${hours}:${minutes}`;

    await page.getByLabel(/countdown date/i).fill(dateTimeValue);
    await page.getByRole('button', { name: /start countdown/i }).click();

    // Wait for timer to load
    await expect(page.getByRole('heading', { name: /countdown timer/i })).toBeVisible();

    // Check that at least one time unit is displayed
    const timerText = await page
      .locator('[class*="timeDisplay"]')
      .or(page.locator('[class*="countdownBox"]'))
      .first()
      .textContent();
    expect(timerText).toMatch(/\d+/); // Should contain at least one number
  });

  test('should allow editing the countdown', async ({ page }) => {
    // First set a countdown
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    futureDate.setHours(12, 0, 0, 0);

    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    const hours = String(futureDate.getHours()).padStart(2, '0');
    const minutes = String(futureDate.getMinutes()).padStart(2, '0');
    const dateTimeValue = `${year}-${month}-${day}T${hours}:${minutes}`;

    await page.getByLabel(/countdown date/i).fill(dateTimeValue);
    await page.getByRole('button', { name: /start countdown/i }).click();

    // Wait for timer to appear
    await expect(page.getByRole('heading', { name: /countdown timer/i })).toBeVisible();

    // Click edit button
    await page.getByRole('button', { name: /edit/i }).click();

    // Should show the edit form
    await expect(page.getByRole('heading', { name: /welcome to countdown/i })).toBeVisible();
    await expect(page.getByLabel(/countdown date/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /update countdown/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /cancel/i })).toBeVisible();
  });

  test('should allow canceling edit mode', async ({ page }) => {
    // First set a countdown
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    futureDate.setHours(12, 0, 0, 0);

    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    const hours = String(futureDate.getHours()).padStart(2, '0');
    const minutes = String(futureDate.getMinutes()).padStart(2, '0');
    const dateTimeValue = `${year}-${month}-${day}T${hours}:${minutes}`;

    await page.getByLabel(/countdown date/i).fill(dateTimeValue);
    await page.getByRole('button', { name: /start countdown/i }).click();

    // Wait for timer to appear
    await expect(page.getByRole('heading', { name: /countdown timer/i })).toBeVisible();

    // Click edit button
    await page.getByRole('button', { name: /edit/i }).click();

    // Click cancel
    await page.getByRole('button', { name: /cancel/i }).click();

    // Should return to timer view
    await expect(page.getByRole('heading', { name: /countdown timer/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /edit/i })).toBeVisible();
  });

  test('should allow resetting the countdown', async ({ page }) => {
    // First set a countdown
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    futureDate.setHours(12, 0, 0, 0);

    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');
    const hours = String(futureDate.getHours()).padStart(2, '0');
    const minutes = String(futureDate.getMinutes()).padStart(2, '0');
    const dateTimeValue = `${year}-${month}-${day}T${hours}:${minutes}`;

    await page.getByLabel(/countdown date/i).fill(dateTimeValue);
    await page.getByRole('button', { name: /start countdown/i }).click();

    // Wait for timer to appear
    await expect(page.getByRole('heading', { name: /countdown timer/i })).toBeVisible();

    // Click reset button
    await page.getByRole('button', { name: /reset/i }).click();

    // Should return to welcome screen
    await expect(page.getByRole('heading', { name: /welcome to countdown/i })).toBeVisible();
    await expect(page.getByLabel(/countdown date/i)).toBeVisible();
  });

  test('should display expired message when countdown reaches zero', async ({ page }) => {
    // Set a past date to trigger expired state
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    pastDate.setHours(12, 0, 0, 0);

    const year = pastDate.getFullYear();
    const month = String(pastDate.getMonth() + 1).padStart(2, '0');
    const day = String(pastDate.getDate()).padStart(2, '0');
    const hours = String(pastDate.getHours()).padStart(2, '0');
    const minutes = String(pastDate.getMinutes()).padStart(2, '0');
    const dateTimeValue = `${year}-${month}-${day}T${hours}:${minutes}`;

    await page.getByLabel(/countdown date/i).fill(dateTimeValue);
    await page.getByRole('button', { name: /start countdown/i }).click();

    // Wait for expired message
    await expect(page.getByText(/time's up/i)).toBeVisible();
    await expect(page.getByText(/the countdown has reached zero/i)).toBeVisible();
  });

  test('should have correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/countdown timer/i);
  });

  test('should have proper page structure', async ({ page }) => {
    // Check for main content area
    const rootElement = page.locator('#root');
    await expect(rootElement).toBeVisible();
  });
});
