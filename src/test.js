'use strict';

module.exports = {
  'Display yahoo -> search -> assert': function (browser) {
    browser
      .windowMaximize()
      .url(browser.globals.applicationUrl)
      .setValue('#srchtxt', 'nightwatch selenium')
      .click('#srchbtn')
      .pause(3000)
      .click('#WS2m > div:nth-child(1) > div.hd > h3 > a:nth-child(1)')
      .pause(3000)
      .assert.urlEquals('http://nightwatchjs.org/')
      .end();
  }
};
