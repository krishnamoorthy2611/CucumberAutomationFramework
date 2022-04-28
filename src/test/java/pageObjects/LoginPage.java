/**
 * 
 */
package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * @author Krishnamoorthy H
 *
 */
public class LoginPage {

	public WebDriver ldriver;

	public LoginPage(WebDriver rdriver) {

		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}

	@FindBy(xpath = "//*[@id='header']/div/nav/section/button[1]")
	@CacheLookup
	WebElement homePageSignInButton;

	@FindBy(xpath = "//*[@id='email']")
	@CacheLookup
	WebElement emailTextBox;

	@FindBy(id = "password")
	@CacheLookup
	WebElement passwordTextBox;

	@FindBy(xpath = "/html/body/div[2]/div/div[1]/div/div/div/div[2]/div/form/button")
	@CacheLookup
	WebElement signInButton;

	public void validateHomePage() {

		Assert.assertTrue(homePageSignInButton.isDisplayed());
	}

	public void enterUserNamePassword(String userName, String password) {

		homePageSignInButton.click();
		emailTextBox.sendKeys(userName);
		passwordTextBox.sendKeys(password);
		

	}
	
	public void clickLoginButton() throws InterruptedException{
		
		while(!signInButton.isEnabled()){
			
			Thread.sleep(4000);
			if(signInButton.isEnabled()){
				
				signInButton.click();
				
			}
		}
		signInButton.click();
		Thread.sleep(5000);
		
	}

	public void verifyPageTitle(String pageTitle){
		//System.out.println("title is " +ldriver.getTitle());
		
		Assert.assertTrue(ldriver.getTitle().contains(pageTitle));
	}
	
}
