Feature: Verify the Shopping page

  Background: User is Logged In to practice Shopping Application
    Given I navigate to Demo shopping Application
    Then user should be on Landing page

  @tag1
  Scenario: Verify that landing page is displaying proper
    And i verify shopping cart is Empty
    And i verify Sign is CTA is displaying
    And i verify Contact us CTA is displaying
    Then I navigate to Cart

  @tag2, @tag1
  Scenario: Verify that user should be able to add product to cart
    And i Click on Tshirt CTA
    Then product should be available on page