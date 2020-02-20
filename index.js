const { Builder } = require("selenium-webdriver");


const driver = new Builder()
  .forBrowser("firefox")

  .build();


async function openWebsites(params) {
  try {
    await (await driver).get("http://yahoo.com");
    await (await driver).get("http://google.com");
  } catch (error) {
    console.log(error);
  }

}

openWebsites()