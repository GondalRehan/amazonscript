var webdriver = require('selenium-webdriver');
var BasePage = require('../pages/base');
var By = webdriver.By;
var Assert = require('assert');


class LandingPage extends BasePage {

		seachByString(searchString){
		    driver.findElement(By.css("#twotabsearchtextbox")).sendKeys(searchString);  //"Javascript book and JQuery" 
		}

		selectFirstSearchResult(){
      		driver.findElement(By.css(".nav-search-submit > input:nth-child(2)")).click();
      		return require('../pages/searchresult');
      	}

		verifyUser(expectedString){
      		//'Hello, Rehan' ==expectedString
      	driver.findElement(By.css("#nav-link-yourAccount > span.nav-line-1"))
		      .getText().then(textValue => {
		        Assert.equal(expectedString, textValue);
		      });
		}
}
module.exports = new LandingPage();