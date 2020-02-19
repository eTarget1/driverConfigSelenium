const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const proxy = require("selenium-webdriver/proxy");

const options = new firefox.Options();

options.setProfile = '/home/noukod/.mozilla/firefox/SeleniumTutorial'

const proxyServer = "136.25.2.43:40614";


const driver = new Builder()
  .forBrowser("firefox")
  .setFirefoxOptions(options)
  .setProxy(proxy.manual({
    http: proxyServer,
    https: proxyServer
  }))
  .build();

driver.get("https://whatismyipaddress.com/");     