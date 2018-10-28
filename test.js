const util = require('util');
const fs = require('fs');
const writefile = util.promisify(fs.writeFile);
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

// var driver = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();

function takeScreenshot(driver, file){
    console.log("before I shoot my screenshot");
    return driver.takeScreenshot()
      .then(image => writefile(file, image, 'base64'), console.log("shoot"))
  }

function screenShots(screenSize) {
    var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
    console.log("browser built");
    driver.manage().window().setRect({width: screenSize, height: 1000})
    console.log("screensize set");
    driver.get("http://www.cardiff.ac.uk/");
    console.log("website found");
    driver.sleep(15000).then(function() {
        console.log("sleeping 1");
        driver.getTitle().then(title => {
            console.log("got my title")
            console.log(title);
            console.log(screenSize);
            driver.quit();
        })
        console.log("I'm here");
    })
    driver.sleep(4000).then(function() {
        console.log("sleeping 2");
        console.log("before the driver screenshots");
        takeScreenshot(driver, `${screenSize}.png`);
        console.log("afters the driver screenshots");
        
    })
    // driver.quit();
    
    
}

screenShots(320);
screenShots(480);
screenShots(768);
screenShots(980);
screenShots(1200);
