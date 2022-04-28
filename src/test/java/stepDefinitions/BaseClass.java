/**
 * 
 */
package stepDefinitions;

import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import pageObjects.AcademyPage;
import pageObjects.LoginPage;

/**
 * @author Krishnamoorthy H
 *
 */
public class BaseClass {

	
	WebDriver driver;
	LoginPage loginPage;
	AcademyPage academyPage;
	Logger logger;
	Properties configProp;
	
}
