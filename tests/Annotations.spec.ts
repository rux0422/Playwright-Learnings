import { test } from "@playwright/test";

test.describe("Describe Test", async()=>{ 
    test("Practice Test 1", async ({ page }) => {
        console.log("Starting Practice Test 1");
        console.log("Ending Practice Test 1");
    })
    
    test("Practice Test 2", async ({ page }) => {
        console.log("Starting Practice Test 2");
        console.log("Ending Practice Test 2");
    })
    
    test("Practice Test 3", async ({ page }) => {
    
        console.log("Starting Practice Test 3");
        console.log("Ending Practice Test 3");
    })
})

//test.only("Practice Test 4", async ({ page }) => {
  //  console.log("Starting Practice Test 4");
  //  console.log("Ending Practice Test 4");
//})

test.skip("Practice Test 5", async ({ page }) => {
    console.log("Starting Practice Test5");
    console.log("Ending Practice Test 5");
})

test.fixme("Practice Test 6 - fixme", async ({ page }) => {
    console.log("Starting Practice Test 6");
    console.log("Ending Practice Test 6");
})

test("Practice Test 7", async ({ page }) => {
  test.slow(); // This marks the test as slow and triples the timeout
  console.log("Starting Practice Test 7");
  console.log("Ending Practice Test 7");
});

test("Practice Test 8", async () => {
    test.setTimeout(10000); // This sets the timeout for this test to 10 seconds
    console.log("Starting Practice Test 8");
    console.log("Ending Practice Test 8");
})

test("Practice Test 9", async () => {
    test.fail();
    console.log("Starting Practice Test 9");
    console.log("Ending Practice Test 9");
})

