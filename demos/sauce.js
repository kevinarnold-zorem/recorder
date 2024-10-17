const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    // headless: false, slowMo: 100, // Uncomment to visualize test
  });
  const page = await browser.newPage();

  // Load "https://www.saucedemo.com/"
  await page.goto('https://www.saucedemo.com/');

  // Resize window to 1319 x 647
  await page.setViewport({ width: 1319, height: 647 });

  // Click on <input> [data-test="username"]
  await page.waitForSelector('[data-test="username"]');
  await page.click('[data-test="username"]');

  // Fill "standard_user" on <input> [data-test="username"]
  await page.waitForSelector('[data-test="username"]:not([disabled])');
  await page.type('[data-test="username"]', "standard_user");

  // Press Enter on input
  await page.waitForSelector('[data-test="username"]');
  await page.keyboard.press('Enter');

  // Click on <input> [data-test="password"]
  await page.waitForSelector('[data-test="password"]');
  await page.click('[data-test="password"]');

  // Fill "secret_sauce" on <input> [data-test="password"]
  await page.waitForSelector('[data-test="password"]:not([disabled])');
  await page.type('[data-test="password"]', "secret_sauce");

  // Click on <input> [data-test="login-button"]
  await page.waitForSelector('[data-test="login-button"]');
  await Promise.all([
    page.click('[data-test="login-button"]'),
    page.waitForNavigation()
  ]);

  // Click on <a> "Sauce Labs Bike Light"
  await page.waitForSelector('[data-test="item-0-title-link"]');
  await Promise.all([
    page.click('[data-test="item-0-title-link"]'),
    page.waitForNavigation()
  ]);

  // Click on <button> "Add to cart"
  await page.waitForSelector('[data-test="add-to-cart"]');
  await page.click('[data-test="add-to-cart"]');

  // Click on <button> "Back to products"
  await page.waitForSelector('[data-test="back-to-products"]');
  await Promise.all([
    page.click('[data-test="back-to-products"]'),
    page.waitForNavigation()
  ]);

  // Click on <a> "1"
  await page.waitForSelector('[data-test="shopping-cart-link"]');
  await Promise.all([
    page.click('[data-test="shopping-cart-link"]'),
    page.waitForNavigation()
  ]);

  // Click on <button> "Checkout"
  await page.waitForSelector('[data-test="checkout"]');
  await Promise.all([
    page.click('[data-test="checkout"]'),
    page.waitForNavigation()
  ]);

  // Click on <input> [data-test="firstName"]
  await page.waitForSelector('[data-test="firstName"]');
  await page.click('[data-test="firstName"]');

  // Fill "kevin arnold" on <input> [data-test="firstName"]
  await page.waitForSelector('[data-test="firstName"]:not([disabled])');
  await page.type('[data-test="firstName"]', "kevin arnold");

  // Click on <input> [data-test="lastName"]
  await page.waitForSelector('[data-test="lastName"]');
  await page.click('[data-test="lastName"]');

  // Fill "arnold" on <input> [data-test="lastName"]
  await page.waitForSelector('[data-test="lastName"]:not([disabled])');
  await page.type('[data-test="lastName"]', "arnold");

  // Press F15 on input
  await page.waitForSelector('[data-test="lastName"]');
  await page.keyboard.press('F15');

  // Click on <input> [data-test="postalCode"]
  await page.waitForSelector('[data-test="postalCode"]');
  await page.click('[data-test="postalCode"]');

  // Fill "11002" on <input> [data-test="postalCode"]
  await page.waitForSelector('[data-test="postalCode"]:not([disabled])');
  await page.type('[data-test="postalCode"]', "11002");

  // Click on <input> [data-test="continue"]
  await page.waitForSelector('[data-test="continue"]');
  await Promise.all([
    page.click('[data-test="continue"]'),
    page.waitForNavigation()
  ]);

  // Scroll wheel by X:0, Y:300
  await page.evaluate(() => window.scrollBy(0, 300));

  // Click on <button> "Finish"
  await page.waitForSelector('[data-test="finish"]');
  await Promise.all([
    page.click('[data-test="finish"]'),
    page.waitForNavigation()
  ]);

  // Click on <button> "Back Home"
  await page.waitForSelector('[data-test="back-to-products"]');
  await page.click('[data-test="back-to-products"]');

  await browser.close();
})();