var webdriver = require('selenium-webdriver');
var BasePage = require('../pages/base');
var By = webdriver.By;
var Assert = require('assert');


class SearchResultPage extends BasePage {

		selectFirstItem(){
		    driver.findElement(By.css("li[id=result_0] h2")).click();
		}

		addIntoBasket(){
			// add into basket
			driver.findElement(By.css("input[id=add-to-cart-button]")).click();
		}

		navigateToCart(){
			//  navigate to cart
			driver.findElement(By.css("a[id=nav-cart]")).click();
			return require('../pages/shoppingbasket')
		}

		verifySearchResults(expectedString) {
			// expectedString = 'JavaScript and JQuery'
			 driver.findElement(By.css("#result_0"))
      			.getText().then(textValue => {
         		Assert.has(expectedString, textValue);
      		});
		}

		verifySubTotal(expectedValue){
		// get total price 
		driver.findElement(By.css("[id=sc-subtotal-amount-activecart]"))
			.getText().then(textValue => {
	         Assert.equal('£19.62', textValue);
			});
		}
}
module.exports = new SearchResultPage();