/**
 * 
 */
package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

/**
 * @author Krishnamoorthy H
 *
 */
public class AcademyPage {

	public WebDriver ldriver;

	public AcademyPage(WebDriver rdriver) {

		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	By academyTabLink = By.xpath("//*[@id='header']/div/nav/div[2]/ul/li[5]/a");
	By academyHeading = By.xpath("//*[@id='___gatsby']/div/div/main/div/div/div[1]/div[2]/div/h1");
	By academyDesc=By.xpath("//*[@id='___gatsby']/div/div/main/div/div/div[1]/div[2]/div/p[1]");
	
	
	
	//Actions methods for each object
	
	public void clickAcademy(){
		
		ldriver.findElement(academyTabLink).click();
	}
	
	public void verifyAcademyContents(){
		ldriver.findElement(academyHeading).isDisplayed();
		ldriver.findElement(academyDesc).isDisplayed();
	}
}
