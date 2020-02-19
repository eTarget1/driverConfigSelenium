const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

options.setPreference("browser.download.dir", "C:\\mySeleniumDownload");
options.setPreference("browser.download.folderList", 2)
options.setPreference("browser.helpersApps.neverAsk.saveToDisk", "application/x-csv");

// const driver = new Builder().forBrowser("firefox").build();
// driver.get("http://facebook.com");       

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
driver.get("http://samplecsv.s3.amazonaws.com/Sacramentorealestatetransactions.csv");