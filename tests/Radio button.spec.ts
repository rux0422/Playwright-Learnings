import {expect, test} from '@playwright/test';

test("Handling Radio Buttons", async ({ page }) => {
    await page.goto("https://artoftesting.com/samplesiteforselenium")
    const femaleRadioButton = await page.locator('#female')
    const maleRadioButton = await page.locator('#male')
    await femaleRadioButton.check()
    await expect(femaleRadioButton).toBeChecked()
    await expect(maleRadioButton).not.toBeChecked()
})