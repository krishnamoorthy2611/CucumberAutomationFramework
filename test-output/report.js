$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Academy.feature");
formatter.feature({
  "name": "Academy Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the Academy page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "ImplementedSteps.launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://axess.sc.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "ImplementedSteps.user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"krishnamoorthy2611@gmail.com\" and password as \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page is loaded and the title should contain \"aXess: Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ImplementedSteps.home_page_is_loaded_and_the_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Academy Tab link",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.click_Academy_Tab_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Academy heading and content",
  "keyword": "Then "
});
formatter.match({
  "location": "ImplementedSteps.verify_Academy_heading_and_content()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "browser Closed",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.browser_Closed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login to axess.sc.com",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.background({
  "name": "this is background steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "ImplementedSteps.launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://axess.sc.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "ImplementedSteps.user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario to Login to axess.sc.com",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"krishnamoorthy2611@gmail.com\" and password as \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page is loaded and the title should contain \"aXess: Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ImplementedSteps.home_page_is_loaded_and_the_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks logout",
  "keyword": "When "
});
formatter.match({
  "location": "ImplementedSteps.the_user_clicks_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "browser Closed",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.browser_Closed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "name": "home page is loaded and the title should contain \"aXess: Welcome\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the user clicks logout",
  "keyword": "When "
});
formatter.step({
  "name": "browser Closed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "krishnamoorthy2611@gmail.com",
        "Admin@123"
      ]
    },
    {
      "cells": [
        "krishnamoorthy2611@yahoo.co.in",
        "Admin@123"
      ]
    }
  ]
});
formatter.background({
  "name": "this is background steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "ImplementedSteps.launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://axess.sc.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "ImplementedSteps.user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"krishnamoorthy2611@gmail.com\" and password as \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page is loaded and the title should contain \"aXess: Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ImplementedSteps.home_page_is_loaded_and_the_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks logout",
  "keyword": "When "
});
formatter.match({
  "location": "ImplementedSteps.the_user_clicks_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "browser Closed",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.browser_Closed()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "this is background steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "ImplementedSteps.launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://axess.sc.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "ImplementedSteps.user_navigates_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"krishnamoorthy2611@yahoo.co.in\" and password as \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page is loaded and the title should contain \"aXess: Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ImplementedSteps.home_page_is_loaded_and_the_title_should_contain(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks logout",
  "keyword": "When "
});
formatter.match({
  "location": "ImplementedSteps.the_user_clicks_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "browser Closed",
  "keyword": "And "
});
formatter.match({
  "location": "ImplementedSteps.browser_Closed()"
});
formatter.result({
  "status": "passed"
});
});