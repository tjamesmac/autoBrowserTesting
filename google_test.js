const util = require('util')
const fs = require('fs')
const writefile = util.promisify(fs.writeFile)
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    function takeScreenshot(driver, file){
        return driver.takeScreenshot()
          .then(image => writefile(file, image, 'base64'))
      }

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

// driver.manage().window().setRect({width: 980, height: 800})
// driver.get('https://developer.mozilla.org/en-US/');


//this works pretty well
driver.sleep(2000).then(function() {
    console.log("hey");
    [1, 2, 3].forEach(item => {
        console.log(item);
    })
})
let a = [320]; 
for(item in a) {
    console.log(a[item]);
    driver.manage().window().setRect({width: a[item], height: 800})
    driver.get('https://developer.mozilla.org/en-US/');
    driver.sleep(2000).then(abc => {
        console.log("this is me sleeping inside the thing");
    })
    console.log("other side of browser");
    driver.sleep(2000).then(c => {
        takeScreenshot(driver, `output${a[item]}.png`);
    })
}



//follow this layout to test the different options
// driver.getAllWindowHandles().then((function(e) {

//     console.log(e);

// }))
// driver.getCurrentUrl().then((function(e) {

//     console.log(e);

// }))



// driver.sleep(2000).then(function() {
// takeScreenshot(driver, "output320.png");

//   driver.getTitle().then(function(title) {
//     console.log(title);
//     if(title === 'Google') {
    
//         console.log('Test passed');
        
//     } else {

//       console.log('Test failed');

//     }

//     driver.sleep(2000).then(function() {

//         driver.quit();

//     })
//   });
// });