import { test } from "@playwright/test";

test.beforeEach("Before Each Hook", async ({  }) => {
    console.log("executing before each test");
})

test.afterEach("After Each Hook", async ({  }) => {
    console.log("executing after each test");
})

test.beforeAll("Before All Hook", async ({  }) => {
    console.log("executing before all tests");
})

test.afterAll("After All Hook", async ({  }) => {
    console.log("executing after all tests");
})

test("Practice Test 1", async ({ page }) => {
    console.log("Starting Practice Test 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 1");
})

test("Practice Test 2", async ({ page }) => {
    console.log("Starting Practice Test 2");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 2");
})

test("Practice Test 3", async ({ page }) => {
    console.log("Starting Practice Test 3");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 3");
})




test.describe("Describe Test", async () => {

    test("Practice Test 4", async ({ page, browserName }) => {
        console.log("Starting Practice Test 4");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 4");
    })

    test("Practice Test 5", async ({ page, browserName }) => {
        console.log("Starting Practice Test5");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 5");
    })

    test("Practice Test 6", async ({ page }) => {
        console.log("Starting Practice Test 6");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        console.log("Ending Practice Test 6");
    })

})

test("Practice Test 7", async ({ page }) => {
    console.log("Starting Practice Test 7");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    console.log("Ending Practice Test 7");
})
