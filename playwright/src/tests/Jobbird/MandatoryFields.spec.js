const {test} = require('@playwright/test');
const { TesUtil, TestUtil } = require('../../util/TestUtil');
const { CommonSteps } = require('../../pages/CommonSteps');
const { OverviewPage } = require('../../pages/Overview/OverviewPage');
const { RegistrationPage } = require('../../pages/Registration/RegistrationPage');

test('Register new user', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const overview = new OverviewPage(page);
    const registration = new RegistrationPage(page);

    const name = await TestUtil.generateRandomString(6);
    const phone = await TestUtil.generateRandomNumber(9);

    await test.step('Navigate to registartion overview page', async () => {
    await common.navigate(baseURL);
  });

  await test.step('Click on New Registartion fill in the form without Surname and Email', async () => {
    await overview.navigateNewRegistration();
    await registration.verifyRegistrationFormPresent();
    await registration.fillInRegistrationForm({
      name: name,
      phone: phone
    })
    await registration.clickRegisterButton();
    await registration.verifyErrorCount(2);
  });
});