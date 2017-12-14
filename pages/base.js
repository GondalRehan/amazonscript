var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

class BasePage{

	constructor(){
		//driver is accessiable to every single script running 
		global.driver = driver;
	}

	navigateTo(){
		driver.get("http://amazon.co.uk");
	}

	elementWaitById(elementString){
	// var until = webdriver.until;
	// var searchBox = 
	// driver.wait(until.elementIsEnabled(driver.findElement(webdriver.By.name(''))),5000,'Element is not enabled'); 
	}
}
module.exports = BasePage;