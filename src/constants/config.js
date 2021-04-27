export const KRATOS_BROWSER_URL = window.KRATOS_BROWSER_URL || "http://127.0.0.1:4433";
export const KRATOS_PUBLIC_URL = window.KRATOS_PUBLIC_URL || "http://127.0.0.1:4433";
export const KRATOS_ADMIN_URL = window.KRATOS_ADMIN_URL || "http://127.0.0.1:4434";

export default {
  kratos: {
    browser: KRATOS_BROWSER_URL,
    admin: KRATOS_ADMIN_URL,
    public: KRATOS_PUBLIC_URL,
    initLoginPath: '/self-service/login/browser',
    initRegistrationPath: '/self-service/registration/browser',
    initSettingsPath: '/self-service/settings/browser',
    logoutPath: '/self-service/browser/flows/logout'
  },
  global: {
    passwordLoginEnabled: true,
    dingtalkLoginEnabled: true,
    ldapLoginEnabled: false
  }
}
