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

let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(function(){
        resolve("Success!"); // Yay! Everything went well!
    }, 1000);
    });
    
    myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage);
    });
console.log("I'll race you");

//this works pretty well
driver.sleep(500).then(function() {
    console.log("hey");
    [1, 2, 3].forEach(item => {
        console.log(item);
    })
})
.catch(() => {
    console.log("error");
})
.then(function() {
    console.log("I thened it");
})
driver.sleep(500)
.then(() => {
    console.log("hello");
})
.then(() => {
    driver.sleep(4000).then(() => {
        console.log("in b4 how are you?");
    })
    console.log("how are you?");
})
.then(() => {
    console.log("i'm well, thank you for asking");
})

console.log("Commencing initial sizing");
driver.manage().window().setRect({width: 320, height: 1000})

driver.get("https://www.reddit.com")
.then(() => {
    takeScreenshot(driver, "320.png");
})
.then(() => {
    driver.sleep(2000)
    .then(() => {
        console.log("Commencing resize One 480");
        driver.manage().window().setRect({width: 480, height: 1000})
        takeScreenshot(driver, "480.png")
    })
    driver.sleep(3000)
    .then(() => {
        console.log("Commencing resize Two 768");
        driver.manage().window().setRect({width: 768, height: 1000})
        takeScreenshot(driver, "768.png")

    })
    driver.sleep(4000)
    .then(() => {
        console.log("Commencing resize Three 980");
        driver.manage().window().setRect({width: 980, height: 1000})
        takeScreenshot(driver, "980.png")

    })
    driver.sleep(6000)
    .then(() => {
        console.log("Commencing resize Four 1200");
        driver.manage().window().setRect({width: 1200, height: 1000})
        takeScreenshot(driver, "1200.png")

    })
})











// driver.get("https://www.medium.com")
// .then(() => {
//     driver.sleep(1000)
//     .then(() => {
//         console.log("Commencing resize One");
//         driver.manage().window().setRect({width: 320, height: 1000})
//         .then(() => {
//             console.log("changing to the bbc");
//             driver.get("https://www.bbc.co.uk");
//             takeScreenshot(driver, `${"bbc"}.png`);

//         })
//         .then(() => {
//             console.log("Trying to get the reddits before resize");
//             driver.get("https://www.reddit.com");
//             takeScreenshot(driver, `${"reddit"}.png`);

//         })
//     })
//     driver.sleep(1500).then(() => {console.log("Wanna do reszie to here")})
// })
    driver.sleep(20000).then(() => {
        console.log("I go night night now");
    })
    .then(() => {
        driver.quit();
    })


// driver.quit();