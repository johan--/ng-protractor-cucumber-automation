Feature: To type simple and show binding

@SimpleBindingScenario
Scenario: simple binding
  Given I am on simple binding page
  When I type "simple"
  Then I click on show button
  Then I should see the message simple on label
  Then I clear the input field
  Then I should see empty input
