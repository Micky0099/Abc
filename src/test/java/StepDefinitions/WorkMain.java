package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;

public class WorkMain {
	WebDriver driver;

	@Given("I navigate to Demo shopping Application")
	public void i_navigate_to_Demo_shopping_Application() throws Exception {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://automationpractice.com/index.php?controller=order");
		Thread.sleep(5000);
	}

	@Then("user should be on Landing page")
	public void user_should_be_on_Landing_page() {
	    System.out.println(driver.getTitle());
	    
	}

	@Then("i verify shopping cart is Empty")
	public void i_verify_shopping_cart_is_Empty() throws Exception {
		Boolean ABD = driver.getPageSource().contains("Your shopping cart is empty.");
		System.out.println(ABD);
		Thread.sleep(3000);
	}

	@Then("i verify Sign is CTA is displaying")
	public void i_verify_Sign_is_CTA_is_displaying() throws InterruptedException {
		Boolean ABDE = driver.findElement(By.xpath("//a[contains(text(),'Sign in')]")).isDisplayed();
		System.out.println(ABDE);
		Thread.sleep(3000);
	}

	@Then("i verify Contact us CTA is displaying")
	public void i_verify_Contact_us_CTA_is_displaying() throws Exception {
		Boolean AB = driver.findElement(By.linkText("Contact us")).isDisplayed();
		System.out.println(AB);
		Thread.sleep(3000);
	}

	@Then("I navigate to Cart")
	public void i_navigate_to_Cart() {
	    driver.findElement(By.xpath("//b[contains(text(),'Cart')]")).click();
	}

	@Then("i Click on Tshirt CTA")
	public void i_Click_on_Tshirt_CTA() throws Exception {
		Thread.sleep(3000);
	    driver.findElement(By.id("search_query_top")).sendKeys("Faded Short Sleeve T-shirts");
	    driver.findElement(By.name("submit_search")).click();
	    Thread.sleep(3000);
	}

	@Then("product should be available on page")
	public void product_should_be_available_on_page() {
	    Boolean A = driver.findElement(By.xpath("//a[contains(text(),'Faded Short Sleeve T-shirts')]")).isDisplayed();
	    System.out.println("Products are displaying :"+ A );
	}

}
