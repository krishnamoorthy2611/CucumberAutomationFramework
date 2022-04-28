package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = {".//Features/"}, glue = "stepDefinitions", dryRun =false, monochrome = true, plugin = {
		"pretty", "html:test-output" }, tags={"@Sanity"})
public class Runner {

}
