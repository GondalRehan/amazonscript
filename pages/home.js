var webdriver = require('selenium-webdriver');
var BasePage = require('../pages/base');
var By = webdriver.By;

class HomePage extends BasePage {
	
	clickOnSignInLink(){
		driver.findElement(By.css("#nav-tools a:nth-of-type(1)")).click(); 
		return require('../pages/signin');
	}
}
module.exports = new HomePage();