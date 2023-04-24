/// <reference types='cypress'/>
import { generateRandomNumber, generateRandomString } from "../../util/TestUtil";
import fixtures from "../../fixtures/fixtures.json";
import "../../pages/Overview/OverviewPage";
import "../../pages/Registration/RegistrationPage";

describe("Click on New Registartion fill in the form without Surname and Email", () => {
  beforeEach(() => {
    cy.visit(fixtures.baseURL);
  });

  const name = generateRandomNumber(6)
  const phone = generateRandomNumber(9);

  it("Navigate to New Registration Page and add New User", () => {
    cy.navigateNewRegistration();

    //---------------- Fill in the form and submit ----------------//

    cy.verifyRegistrationFormPresent();
    cy.fillInRegistrationForm({
      name: name,
      phone: phone
    })
    cy.clickRegisterButton();

    //---------------- Verify Error Count = 2 ----------------//

    cy.verifyErrorCount(2);

  });
});
