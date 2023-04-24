/// <reference types='cypress'/>
import { generateRandomNumber, generateRandomString } from "../../util/TestUtil";
import fixtures from "../../fixtures/fixtures.json";
import "../../pages/Overview/OverviewPage";
import "../../pages/Registration/RegistrationPage";

describe("Navigate to registration page and add new User", () => {
  beforeEach(() => {
    cy.visit(fixtures.baseURL);
  });

  const name = generateRandomNumber(6)
  const surname = generateRandomString(8);
  const email = generateRandomString(5) + '@gmail.com';
  const phone = generateRandomNumber(9);

  it("Navigate to New Registration Page and add New User", () => {
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

    cy.verifyRow({
      name: name,
      surname: surname,
      email: email,
      phone: phone
    })
  });
});
