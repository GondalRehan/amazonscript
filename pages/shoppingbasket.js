var webdriver = require('selenium-webdriver');
var BasePage = require('../pages/base');

var By = webdriver.By;
var Assert = require('assert');


class ShoppingBasketPage extends BasePage {

		verifySubTotal(expectedValue){
			driver.findElement(By.css("[id=sc-subtotal-amount-activecart]"))
				.getText().then(textValue => {
	         	Assert.equal(expectedValue, textValue);   //expectedValue= £19.62
				});		
		}
}
module.exports = new ShoppingBasketPage();