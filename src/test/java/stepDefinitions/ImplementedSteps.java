/**
 * 
 */
package stepDefinitions;

import java.io.FileInputStream;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import pageObjects.AcademyPage;
import pageObjects.LoginPage;

/**
 * @author Krishnamoorthy H
 *
 */
public class ImplementedSteps extends BaseClass{

	
	
	@Before
	public void setup() throws Exception{
		
		// Reading config.properties file 
		configProp = new Properties();
		FileInputStream fis = new FileInputStream("./config.properties");
	    configProp.load(fis);
	    String browserName = configProp.getProperty("browser");
		
		logger = Logger.getLogger("Cucumber Axess Website"); // Added logger
		PropertyConfigurator.configure("log4j.properties"); // provide the path of the logger
		
		if(browserName.equalsIgnoreCase("Edge")){
			WebDriverManager.edgedriver().setup();
			driver= new EdgeDriver();
			
			
		} else if(browserName.equalsIgnoreCase("firefox")){
			
			WebDriverManager.firefoxdriver().setup();
			driver= new FirefoxDriver();
		
		}
		else{
			WebDriverManager.chromedriver().setup();
			driver= new ChromeDriver();
				
			
		}
		
		logger.info("****************Launching Browser*************************");
		
	}
	
	
	
	@Given("Launch Chrome Browser")
	public void launch_Chrome_Browser() {
	    // Write code here that turns the phrase above into concrete actions
		
		
		loginPage = new LoginPage(driver);
		driver.manage().window().maximize();
		//throw new cucumber.api.PendingException();
	    
	}

	@When("user navigates to {string}")
	public void user_navigates_to(String URL) {
	    // Write code here that turns the phrase above into concrete actions
		logger.info("****************Navigating to Axess URL*************************");
		driver.get(URL);
	    //throw new cucumber.api.PendingException();
	}

	@When("user enters username as {string} and password as {string}")
	public void user_enters_username_as_and_password_as(String email, String password) {
	    // Write code here that turns the phrase above into concrete actions
		logger.info("****************User Enters Username and Password*************************");
		
		loginPage.enterUserNamePassword(email, password);
		//throw new cucumber.api.PendingException();
	}

	@When("click login")
	public void click_login() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		logger.info("****************Sign in Button clicked*************************");
		loginPage.clickLoginButton();
	    //throw new cucumber.api.PendingException();
	}

	@Then("home page is loaded and the title should contain {string}")
	public void home_page_is_loaded_and_the_title_should_contain(String string) {
	    // Write code here that turns the phrase above into concrete actions
		logger.info("****************Page Title verified*************************");
		loginPage.verifyPageTitle(string);
	    //throw new cucumber.api.PendingException();
	}

	@When("the user clicks logout")
	public void the_user_clicks_logout() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(5000);
		System.out.println("user logged out");
		logger.info("****************Logged out of Application*************************");
	    //throw new cucumber.api.PendingException();
	}

	@When("browser Closed")
	public void browser_Closed() {
	    // Write code here that turns the phrase above into concrete actions
		logger.info("****************Browser Closed************************");
		driver.quit();
	    //throw new cucumber.api.PendingException();
	}
	
	@Then("click Academy Tab link")
	public void click_Academy_Tab_link() {
		academyPage = new AcademyPage(driver);
		logger.info("****************Academy page clicked*************************");
		academyPage.clickAcademy();
	   
	}

	@Then("verify Academy heading and content")
	public void verify_Academy_heading_and_content() {
		logger.info("****************Verified Academy Page*************************");
		academyPage.verifyAcademyContents();
	}

	
	
}
