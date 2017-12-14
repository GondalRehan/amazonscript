var webdriver = require('selenium-webdriver');
var homePage = require('./pages/home')
var signInPage = require('./pages/signin')
var landingPage = require('./pages/landing')
var searchResultPage = require('./pages/searchresult')
var shoppingBasketPage = require('./pages/shoppingbasket')



homePage.navigateTo();
homePage.clickOnSignInLink();
signInPage.signIn("rehanahmad78@hotmail.com", "test123")
// landingPage.verifyUser('Hello, Rehan')


landingPage.seachByString("Javascript book and JQuery")

landingPage.selectFirstSearchResult()

searchResultPage.selectFirstItem()
searchResultPage.addIntoBasket()
// searchResultPage.verifySearchResults("JavaScript and JQuery") 
searchResultPage.navigateToCart()

shoppingBasketPage.verifySubTotal("£19.62")