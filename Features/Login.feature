Feature: Login to axess.sc.com

  Background: this is background steps
    Given Launch Chrome Browser
    When user navigates to "https://axess.sc.com/"
	@Sanity
  Scenario: Scenario to Login to axess.sc.com
    And user enters username as "krishnamoorthy2611@gmail.com" and password as "Admin@123"
    And click login
    Then home page is loaded and the title should contain "aXess: Welcome"
    When the user clicks logout
    And browser Closed
	@Regression
  Scenario Outline: Login Data Driven
    And user enters username as "<email>" and password as "<password>"
    And click login
    Then home page is loaded and the title should contain "aXess: Welcome"
    When the user clicks logout
    And browser Closed

    Examples: 
      | email                          | password  |
      | krishnamoorthy2611@gmail.com   | Admin@123 |
      | krishnamoorthy2611@yahoo.co.in | Admin@123 |
