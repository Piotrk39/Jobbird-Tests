const {test} = require('@playwright/test');
const { TesUtil, TestUtil } = require('../../util/TestUtil');
const { CommonSteps } = require('../../pages/CommonSteps');
const { OverviewPage } = require('../../pages/Overview/OverviewPage');
const { RegistrationPage } = require('../../pages/Registration/RegistrationPage');

test('Register new user', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const overview = new OverviewPage(page);
    const registration = new RegistrationPage(page);

    const name = await TestUtil.generateRandomString(6) + await TestUtil.generateRandomNumber(2);
    const surname = await TestUtil.generateRandomString(8) + '!$!%#';
    const email = await TestUtil.generateRandomString(5);
    const phone = await TestUtil.generateRandomNumber(9) + '!@$!@$';

    await test.step('Navigate to registartion overview page', async () => {
    await common.navigate(baseURL);
  });

  await test.step('Click on New Registartion fill in the form with unsupported characters set and count the errors', async () => {
    await overview.navigateNewRegistration();
    await registration.verifyRegistrationFormPresent();
    await registration.fillInRegistrationForm({
      name: name,
      surname: surname,
      email: email,
      phone: phone
    })
    await registration.clickRegisterButton();
    await registration.verifyInvalidInputCount(4);
  });
});