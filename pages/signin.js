var webdriver = require('selenium-webdriver');
var BasePage = require('../pages/base');
var By = webdriver.By;

class SignInPage extends BasePage {

	signIn(userEmail, userPassword) {
		driver.findElement(By.id("ap_email")).sendKeys(userEmail);
		driver.findElement(By.id("ap_password")).sendKeys(userPassword);
		driver.findElement(By.id("signInSubmit")).click();   
		return require('../pages/landing');
	}
}
module.exports = new SignInPage();