var empMgrUrl = 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html';
module.exports = {
  '@tags': [employeeMgr2],
  'Demo test': function (browser) {
    //I just want to go to the main website (listed above) and check that I'm on that page

    //After I verify that I'm on that page, I can officially start a test
    browser
      .url(empMgrUrl, browser.launchUrl);
    console.log(empMgrUrl);
      .end();
}
}