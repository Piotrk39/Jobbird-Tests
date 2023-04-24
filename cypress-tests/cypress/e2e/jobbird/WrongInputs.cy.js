/// <reference types='cypress'/>
import { generateRandomNumber, generateRandomString } from "../../util/TestUtil";
import fixtures from "../../fixtures/fixtures.json";
import "../../pages/Overview/OverviewPage";
import "../../pages/Registration/RegistrationPage";

describe("Navigate to registration page and add new User With wrong inputs", () => {
  beforeEach(() => {
    cy.visit(fixtures.baseURL);
  });

  const name = generateRandomString(6) + generateRandomNumber(2);
  const surname = generateRandomString(8) + '!$!%#';
  const email = generateRandomString(5);
  const phone = generateRandomNumber(9) + '!@$!@$';

  it("Fill in the form with unsupported characters set and count the errors", () => {
    cy.navigateNewRegistration();

    //---------------- Fill in the form and submit ----------------//

    cy.verifyRegistrationFormPresent();
    cy.fillInRegistrationForm({
      name: name,
      surname: surname,
      email: email,
      phone: phone
    })
    cy.clickRegisterButton();

    //---------------- Verify user succesfully added ----------------//

    cy.verifyInvalidInputCount(4);
  });
});
