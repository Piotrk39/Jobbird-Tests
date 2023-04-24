/// <reference types='cypress'/>
import { generateRandomNumber, generateRandomString } from "../../util/TestUtil";
import fixtures from "../../fixtures/fixtures.json";
import "../../pages/Overview/OverviewPage";
import "../../pages/Registration/RegistrationPage";

describe("Fill in the form without optional fields", () => {
  beforeEach(() => {
    cy.visit(fixtures.baseURL);
  });

  const surname = generateRandomString(8);
  const email = generateRandomString(5) + '@gmail.com';

  it("Navigate to New Registration and fill in the form without name and phone", () => {
    cy.navigateNewRegistration();

    //---------------- Fill in the form and submit ----------------//

    cy.verifyRegistrationFormPresent();
    cy.fillInRegistrationForm({
      surname: surname,
      email: email,
    })
    cy.clickRegisterButton();

    //---------------- Verify there are no validation errors ----------------//

    cy.verifyErrorCount(0);

    //---------------- Verify user succesfully added ----------------//

    cy.verifyRow({
      surname: surname,
      email: email,
    })
  });
});
