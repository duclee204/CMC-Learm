const os = require('os');
const path = require('path');
const fs = require('fs');

module.exports = {
  e2e: {
    baseUrl: 'http://localhost:4200',
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    video: false,

    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Tạo thư mục profile tạm nhưng đơn giản hơn
          const userDataDir = path.join(os.tmpdir(), 'cypress-chrome-profile');
          if (!fs.existsSync(userDataDir)) {
            fs.mkdirSync(userDataDir, { recursive: true });
          }

          launchOptions.args.push(
            `--user-data-dir=${userDataDir}`,
            '--disable-save-password-bubble',
            '--disable-password-manager-reauthentication',
            '--disable-features=AutofillServerCommunication,PasswordLeakDetection,PasswordManagerEnableAccountStorage',
            '--password-store=basic',
            '--use-mock-keychain',

            // ⚠️ Thêm các flags giúp tránh crash/tab about:blank
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--disable-site-isolation-trials',
            '--disable-extensions',
            '--disable-background-timer-throttling',
            '--disable-renderer-backgrounding'
          );
        }
        return launchOptions;
      });
    },
  },
};
