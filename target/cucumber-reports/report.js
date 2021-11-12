$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Work.feature");
formatter.feature({
  "name": "Verify the Shopping page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User is Logged In to practice Shopping Application",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to Demo shopping Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.i_navigate_to_Demo_shopping_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be on Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.user_should_be_on_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that landing page is displaying proper",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "i verify shopping cart is Empty",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.i_verify_shopping_cart_is_Empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i verify Sign is CTA is displaying",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.i_verify_Sign_is_CTA_is_displaying()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i verify Contact us CTA is displaying",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.i_verify_Contact_us_CTA_is_displaying()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.i_navigate_to_Cart()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User is Logged In to practice Shopping Application",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I navigate to Demo shopping Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.i_navigate_to_Demo_shopping_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be on Landing page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.user_should_be_on_Landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user should be able to add product to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag2,"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "i Click on Tshirt CTA",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.i_Click_on_Tshirt_CTA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product should be available on page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.WorkMain.product_should_be_available_on_page()"
});
formatter.result({
  "status": "passed"
});
});