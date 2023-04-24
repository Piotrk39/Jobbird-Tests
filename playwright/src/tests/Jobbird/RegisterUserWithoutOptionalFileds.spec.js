const {test} = require('@playwright/test');
const { TesUtil, TestUtil } = require('../../util/TestUtil');
const { CommonSteps } = require('../../pages/CommonSteps');
const { OverviewPage } = require('../../pages/Overview/OverviewPage');
const { RegistrationPage } = require('../../pages/Registration/RegistrationPage');

test('Register new user', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const overview = new OverviewPage(page);
    const registration = new RegistrationPage(page);

    const surname = await TestUtil.generateRandomString(8);
    const email = await TestUtil.generateRandomString(5) + '@gmail.com';

    await test.step('Navigate to registartion overview page', async () => {
    await common.navigate(baseURL);
  });

  await test.step('Click on New Registartion fill in the form without optional fields', async () => {
    await overview.navigateNewRegistration();
    await registration.verifyRegistrationFormPresent();
    await registration.fillInRegistrationForm({
      surname: surname,
      email: email,
    })
    await registration.clickRegisterButton();
    await registration.verifyErrorCount(0);
  });

  await test.step('Verify that user was succesfuly added', async () => {
    await overview.verifyRow({
      surname: surname,
      email: email,
    })
  })
});