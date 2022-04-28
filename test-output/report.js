$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login to axess.sc.com",
  "description": "",
  "keyword": "Feature"
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
});