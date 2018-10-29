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

// let myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code. 
//     // In reality, you will probably be using something like XHR or an HTML5 API.
//     setTimeout(function(){
//         resolve("Success!"); // Yay! Everything went well!
//     }, 1000);
//     });
    
//     myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log("Yay! " + successMessage);
//     });
console.log("I'll race you");

//this works pretty well
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let resize = size => driver.manage().window().setRect({width: size, height: 1000});
let screenshot = size => driver.takeScreenshot().then(image => writefile(file, image, 'base64'));


// wait(5000)
// .then(() => driver.get("https://www.airbnb.com"))
// .then(() => wait(5000))
// .then(() => driver.get("https://www.reddit.com"))
// .catch()

let doSomething = i => new Promise(resolve => resolve(i + 1));

doSomething(0)
.then(first => doSomething(first))
.then(second => doSomething(second))
.then(third => console.log(`The third answer is ${third}`))
.catch("i am a turd");






// .catch(console.log("I am error"));
// let promiseFun = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success!");
//         }, 1000)
//     })
// }
// promiseFun()
// .then((successMessage) => {
//     console.log("this is my first promise", successMessage);
// })
// .then(() => {
//     console.log("quitting now");
//     driver.quit();
// })