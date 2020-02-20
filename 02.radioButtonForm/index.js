const { Builder, By } = require("selenium-webdriver");


const driver = new Builder()
  .forBrowser("firefox")

  .build();


async function radioButtonForm() {
  try {
    await (await driver).get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form")
    await (await driver).findElement(By.css("#title")).sendKeys("Title that has at least 20 chars");
    await (await driver).findElement(By.css("#description")).sendKeys("Descriptions must be at least 20 chars");
    await (await (await driver).findElement(By.css("div:nth-child(2) > label > span.custom-control-indicator"))).click();
    await (await (await driver).findElement(By.name("submit"))).click();

  } catch (error) {
    console.log(error);
  }
}

radioButtonForm();