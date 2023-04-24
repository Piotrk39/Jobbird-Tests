exports.RegistrationElms = class RegistrationElms {
    // ----------------------- Registration Form Elements ----------------------- //
    static REGISTARTION_BANNER = "//h1[text()='Registration form']";
    static NAME_INPUT = "#name";
    static SURNAME_INPUT = "#surname";
    static EMAIL_INPUT = "#email";
    static PHONE_INPUT = "#phone";
    static SUBMIT_BUTTON = "//button[text()='Submit']";
    
    static REQUIRED_ERROR = "//p[text()='Required']"
    static INVALID_INPUT = "//p[contains(text(), 'Invalid')]"
}