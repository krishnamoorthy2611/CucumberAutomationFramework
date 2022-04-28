Feature: CAcademy Page

Scenario: Verify the Academy page
Given Launch Chrome Browser
    When user navigates to "https://axess.sc.com/"
    And user enters username as "krishnamoorthy2611@gmail.com" and password as "Admin@123"
    And click login
    Then home page is loaded and the title should contain "aXess: Welcome"
    And click Academy Tab link
    Then verify Academy heading and content
    And browser Closed