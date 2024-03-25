import payload from '../Data/QMate_Demo_Data.json' assert { type: 'json'};
 
describe("try", function () {
    const username = payload.Constants.username;
    const password = payload.Constants.password;
    const jobTitle = payload.Constants.jobTitle
   
    it("Load the Target URL: PROS.com/PROS_Careers/login", async function() {
        await common.navigation.navigateToUrl(payload.Constants.targetURL2);
        await util.browser.sleep(1000);
    });

    // it("Select View Open Positions", async function() {
    //     const elem = await nonUi5.element.getByXPath("/html/body/div[3]/div/section[1]/div/div/div/div[3]/div/div/a");
    //     await nonUi5.userInteraction.click(elem);
    //     await util.browser.sleep(5000);
    // });

    // it("Switch Tabs", async function() {
    //     const elem = await nonUi5.element.getByCssContainingText(this.selectors.cartTabSel(sTabName));
    //     await nonUi5.userInteraction.click(elem);
    //     await util.browser.sleep(5000);
    // });

    it("Login to Workday", async function() {
        // Fill Email address
        let un = await nonUi5.element.getByCss("INPUT[id='input-4']");
        await nonUi5.userInteraction.clearAndFill(un, username);        // Fill password field
        let pw = await nonUi5.element.getByCss("INPUT[type='password']");
        await nonUi5.userInteraction.clearAndFill(pw, password);
        let login = await nonUi5.element.getByXPath(".//*[@class='css-1lgcvmf']");
        await nonUi5.userInteraction.click(login);
    });

    it("Search For Jobs", async function() {
        let elem = await nonUi5.element.getByCssContainingText("BUTTON", "Search for Jobs");
        await nonUi5.userInteraction.click(elem);
    });

    it("Input Specific Job and Search", async function() {
        let searchField = await nonUi5.element.getByCss("INPUT");
        await nonUi5.userInteraction.clearAndFill(searchField, jobTitle);
        let searchButton = await nonUi5.element.getByXPath(".//*[@type='submit']");
        await nonUi5.userInteraction.click(searchButton);
    });

    it("Select First Result Job", async function() {
        let elem = await nonUi5.element.getByXPath(".//*[@data-uxi-item-rank='0']");
        await nonUi5.userInteraction.click(elem);
    });

    it("Continue Job Application", async function() {
        let elem = await nonUi5.element.getByXPath(".//*[@class='css-te2m5o']");
        await nonUi5.userInteraction.click(elem);
    });

    // it("Switch to IFrame", async function() {
    //     await util.browser.switchToIframe('/html/body/iframe[1]');
    //     await util.browser.switchToIframe('IFRAME[id*="ExternalApp"]');
    // });

    // My Information
    it("Who was the snitch? - I know someone...", async function() {
        let elem = await nonUi5.element.getByXPath('//*[@data-automation-id="sourceDropdown"]');
        await nonUi5.userInteraction.click(elem);
        let elem2 = await nonUi5.element.getByXPath('//html/body/div[6]/div[2]/ul/li[7]');
        await nonUi5.userInteraction.click(elem2);
    });

    it("Snitches get stitches - Whats their name? ", async function() {
        let elem = await nonUi5.element.getByXPath('/html/body/div[5]/div/div/div/div/div[3]/div[2]/div[1]/div[2]/div/div[1]/input'); 
        await nonUi5.userInteraction.clear(elem);
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.clearAndFill(elem, "Michael Kane");
    });

    //@TODO
    // it("Previous Employment?", async function() {
    //     let elem = await nonUi5.element.getByXPath('//*[@id="input-21"]/div[1]/div/span');
    //     await nonUi5.userInteraction.click(elem);
    // });

    it("Preferred Name", async function(){
        let elem = await nonUi5.element.getByXPath('//*[@id="mainContent"]/div/div[3]/div[2]/div[5]/div[2]/div/div[1]/div/label');
        await nonUi5.userInteraction.scrollToElement(elem, "center")
        await nonUi5.userInteraction.click(elem);
        await util.browser.sleep(1000);

        let elem3 = nonUi5.element.getByXPath('//*[@data-automation-id="preferredNameSection_firstName"]');
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.clear(elem3);
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.clearAndFill(elem3, 'Unpronounceable');
        await util.browser.sleep(1000);

        let elem2 = nonUi5.element.getByXPath('//*[@data-automation-id="preferredNameSection_lastName"]');
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.clear(elem2);
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.clearAndFill(elem2, 'Spock');
        await util.browser.sleep(1000);

        let elem4 = nonUi5.element.getByXPath('//*[@data-automation-id="addressSection_addressLine1"]');
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.clear(elem4);
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.clearAndFill(elem4, 'USS Enterprise');
        await util.browser.sleep(1000);
    });

    it("Save and Continue 1", async function() {
        let elem = await nonUi5.element.getByXPath('//*[@data-automation-id="bottom-navigation-next-button"]');
        await nonUi5.userInteraction.click(elem);
    });
    
    // My Experience
    it("Education", async function() {
        // University
        let elem = await nonUi5.element.getByXPath('//*[@id="mainContent"]/div/div[3]/div[2]/div[1]/div/div/div/button');
        await nonUi5.userInteraction.click(elem);
        let elem1 = nonUi5.element.getByXPath('//*[@data-automation-id="school"]');
        await nonUi5.userInteraction.clearAndFill(elem1, "Boston College");
        
        // Degree
        let elem2 = nonUi5.element.getByXPath('//*[@data-automation-id="degree"]');
        await nonUi5.userInteraction.click(elem2);
        let elem4 = nonUi5.element.getByXPath('/html/body/div[6]/div[2]/ul/li[4]');
        await nonUi5.userInteraction.click(elem4);
        
        // // Field of Study
        // let elem3 = nonUi5.element.getByXPath('//*[data-uxi-element-id="selectinput-d1aa45a2-b806-4daf-a2ec-90ed99ee2c6b"]');
        // await nonUi5.userInteraction.clearAndFill(elem3, "Art");
    });

    it("Save and Continue 2", async function() {
        let elem = await nonUi5.element.getByXPath('//*[@data-automation-id="bottom-navigation-next-button"]');
        await nonUi5.userInteraction.click(elem);
    });

    it("Desired Start Date", async function() {
        let calendar = await nonUi5.element.getByXPath('.//*[@data-automation-id="dateIcon"]');
        await nonUi5.userInteraction.click(calendar);
        // let nextMonth = await nonUi5.element.getByXPath('//*[@data-automation-id="nextControl"]');
        // await nonUi5.userInteraction.click(nextMonth);
        let selectDay = await nonUi5.element.getByXPath('//*[@data-uxi-datepicker-mmdd="0411"]');
        await nonUi5.userInteraction.click(selectDay);

    });

    it("Authorized to work in the country ", async function() {
        let elem = await nonUi5.element.getByXPath('//*[@data-automation-id="e457551beaa5017f3603cb24b9002e2b"]');
        await nonUi5.userInteraction.click(elem);
        let elem2 = await nonUi5.element.getByXPath('/html/body/div[6]/div[2]/ul/li[2]');
        await nonUi5.userInteraction.click(elem2);
    });

    it("Require visa? ", async function() {
        let elem = await nonUi5.element.getByXPath('//*[@data-automation-id="e457551beaa501446457cb24b900312b"]');
        await nonUi5.userInteraction.click(elem);
        let elem2 = await nonUi5.element.getByXPath('/html/body/div[6]/div[2]/ul/li[2]');
        await nonUi5.userInteraction.click(elem2);

    });

    it("Desired Salary ", async function() {
        let elem = await nonUi5.element.getByXPath('//*[@data-automation-id="e457551beaa50145dd69cb24b900352b"]');
        await nonUi5.userInteraction.clear(elem);
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.clearAndFill(elem, "100000");

    });

    // @TODO
    // it("Ongoing obligations?", async function() {
    //     let boxNo = await nonUi5.element.getByXPath('//input[@id="e457551beaa5015e7eb74d3eb900582b"]'); //No 
    //     // let boxYes = await nonUi5.element.getByCss('INPUT[@id="e457551beaa50150432e4e3eb9005a2b"]'); //Yes
    //     // if (await nonUi5.element.isSelected(boxNo) || await nonUi5.element.isSelected(boxYes)){
    //     //     await nonUi5.userInteraction.clear(boxNo);
    //     //     await nonUi5.userInteraction.clear(boxYes);
    //     // }
    //     // // Select No
    //     // await nonUi5.userInteraction.check(elem);
    // });

    it("Save and Continue", async function() {
        let elem = await nonUi5.element.getByXPath('.//*[@data-automation-id="bottom-navigation-next-button"]');
        await nonUi5.userInteraction.click(elem);
    });

    it("Worked for blacklist :(", async function() {
        let scrollToItem = await nonUi5.element.getByXPath('//*[@id="mainContent"]/div/div[4]/div/div[2]')
        await nonUi5.userInteraction.scrollToElement(scrollToItem, "center")
        let elem = await nonUi5.element.getByXPath('/html/body/div[5]/div/div/div/div/div[3]/div[2]/div[2]/div[2]/div[1]/div/button');
        await nonUi5.userInteraction.click(elem);
        let elem2 = await nonUi5.element.getByXPath('.//*[@data-value="38cd65ae0afb01bd16e015d18c553018"]');
        await nonUi5.userInteraction.click(elem2);
    });

    it("Save and Continue", async function() {
        let elem = await nonUi5.element.getByXPath('.//*[@data-automation-id="bottom-navigation-next-button"]');
        await nonUi5.userInteraction.click(elem);
    });

    it("Ethnicity", async function() {
        let elem = await nonUi5.element.getByXPath('.//*[@data-automation-id="ethnicityDropdown"]');
        await nonUi5.userInteraction.click(elem);
        let elem2 = await nonUi5.element.getByXPath('/html/body/div[6]/div[2]/ul/li[9]');
        await nonUi5.userInteraction.click(elem2);
    });

    it("Gender", async function() {
        let elem = await nonUi5.element.getByXPath('.//*[@data-automation-id="gender"]');
        await nonUi5.userInteraction.click(elem);
        let elem2 = await nonUi5.element.getByXPath('/html/body/div[6]/div[2]/ul/li[3]');
        await nonUi5.userInteraction.click(elem2);
    });

    it("Hispanic?", async function() {
        let elem = await nonUi5.element.getByXPath('.//*[@data-automation-id="hispanicOrLatino"]');
        await nonUi5.userInteraction.click(elem);
        let elem2 = await nonUi5.element.getByXPath('/html/body/div[6]/div[2]/ul/li[3]');
        await nonUi5.userInteraction.click(elem2);
    });

    it("Veteran Status", async function() { // Salute
        let elem = await nonUi5.element.getByXPath('.//*[@data-automation-id="veteranStatus"]');
        await nonUi5.userInteraction.click(elem);
        let elem2 = await nonUi5.element.getByXPath('/html/body/div[6]/div[2]/ul/li[4]');
        await nonUi5.userInteraction.click(elem2);
    });
    
    it("T&C", async function() {
        let elem = await nonUi5.element.getByXPath('/html/body/div[5]/div/div/div/div/div[3]/div[2]/div[3]/div[2]/label');
        await nonUi5.userInteraction.check(elem);
    });

    it("Save and Continue", async function() {
        let elem = await nonUi5.element.getByXPath('//*[@data-automation-id="bottom-navigation-next-button"]');
        await nonUi5.userInteraction.click(elem);
    });

    it("Self Identify Name", async function() {
        let elem = await nonUi5.element.getByXPath('.//*[@data-automation-id="name"]');
        await nonUi5.userInteraction.clear(elem);
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.clearAndFill(elem, "Michael Kane");
    });

    it("Self Identify Date", async function() {
        let calendar = await nonUi5.element.getByXPath('.//*[@data-automation-id="dateIcon"]');
        await nonUi5.userInteraction.click(calendar);
        // let nextMonth = await nonUi5.element.getByXPath('.//*[@data-automation-id="nextControl"]');
        // await nonUi5.userInteraction.click(nextMonth);
        let selectDay = await nonUi5.element.getByXPath('.//*[@data-uxi-datepicker-mmdd="0324"]');
        await nonUi5.userInteraction.click(selectDay);
    });

    it("Self Identify Check ", async function() {
        
        let scrollToItem = await nonUi5.element.getByXPath('/html/body/div[5]/div/div/div/div/div[3]/div[2]/div[2]/div[9]/div/fieldset/div/div[1]/span/fieldset/div[1]/div/div/div[2]/div/div/label');
        let elem = await nonUi5.element.getByXPath('.//*[@data-automation-id="bottom-navigation-next-button"]');
        await nonUi5.userInteraction.click(elem);
        await util.browser.sleep(1000);
        await nonUi5.userInteraction.click(scrollToItem);
    });

    it("Save and Continue", async function() {
        let elem = await nonUi5.element.getByXPath('.//*[@data-automation-id="bottom-navigation-next-button"]');
        await nonUi5.userInteraction.click(elem);
        await util.browser.sleep(15000);
    });

});