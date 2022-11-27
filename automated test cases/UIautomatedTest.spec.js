import { test, expect } from '@playwright/test'

test.describe('test', () => {
    test('Should login successfully', async ({ page }) => {
        await page.goto('/')
        // Click Login menu
        await page.locator('"Log In"').click()
        // Fill the data
        await page.getByPlaceholder('E-mail Address').fill('test@test.com')
        await page.getByPlaceholder('Password').fill('test1234')
        // Click Login button
        await page.getByRole('button', { name: 'Login' }).click()
        // Check that redirect to correct page
        await expect(page.locator('"Hello"')).toBeVisible()
        await expect(page.locator('"Test"').nth(0)).toBeVisible()
        await expect(page.locator('"Test"').nth(1)).toBeVisible()
    })
    test('Should successfully login and pray', async ({ page }) => {
        await page.goto('/')
        // login first
        await page.locator('"Log In"').click()
        await page.getByPlaceholder('E-mail Address').fill('test@test.com')
        await page.getByPlaceholder('Password').fill('test1234')
        await page.getByRole('button', { name: 'Login' }).click()

        // Click Activity -> Make a wish menu
        await page.locator('"Activity"').click()
        await page.locator('"Make a Wish"').click()
        // Select the Sanctuary
        await page.getByRole('button', { name: '​' }).click()
        await page.getByRole('option', { name: 'Lakshmi Shrine' }).click()
        // Fill in the wish
        await page.locator('#wish').fill('I want to get grade A')
        await page.getByRole('button', { name: 'Make a wish' }).click()
        // Press OK
        await page.getByRole('button', { name: 'OK' }).click()
        await expect(page.locator('"Test"').nth(0)).toBeVisible()
        await expect(page.locator('"Test"').nth(1)).toBeVisible()
    })
    test('Should successfully buy a product', async ({ page }) => {
        await page.goto('/')
        // login first
        await page.locator('"Log In"').click()
        await page.getByPlaceholder('E-mail Address').fill('test@test.com')
        await page.getByPlaceholder('Password').fill('test1234')
        await page.getByRole('button', { name: 'Login' }).click()

        // Click Search -> Amulet menu
        await page.locator('"Search"').click()
        await page.locator('"Amulet"').click()
        // Select product
        await page.locator('"GUAN YU bracelet"').click()
        // Click but
        await page.getByRole('button', { name: 'BUY' }).click()
        // Choose online banking
        await page.getByLabel('Online Banking').check()
        // Fill the address
        await page.getByPlaceholder('Enter your name').fill('test user')
        await page.getByPlaceholder('Enter your address').fill('1234 test road')
        await page.getByPlaceholder('Enter your postal code').fill('11111')
        await page.getByRole('combobox').selectOption('Nakhon Pathom')
        // Go to payment page
        await page.getByRole('button', { name: 'Proceed to Payment' }).click()
        await page.getByRole('button', { name: 'Submit' }).click()
        await page.getByRole('button', { name: 'OK' }).click()
        await expect(page.locator('"Hello"')).toBeVisible()
        await expect(page.locator('"Test"').nth(0)).toBeVisible()
        await expect(page.locator('"Test"').nth(1)).toBeVisible()
    })
})
