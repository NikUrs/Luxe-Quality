
describe('Footer Links', () => {

    it('Footer Links', async () => {


      //Precondition
       await browser.url('https://www.saucedemo.com/')

       const UserName = await browser.$('#user-name');
       const Password = await browser.$('#password');
       const LoginButton = await browser.$('#login-button')


       const UserNameValue = 'standard_user';
       const PasswordValue = 'secret_sauce';


       await UserName.waitForDisplayed()
       await UserName.click()
       await UserName.addValue(UserNameValue)  

       await Password.waitForDisplayed()
       await Password.click()
       await Password.addValue(PasswordValue)
    
       await LoginButton.click()



       //step 1. Click on the "Twitter" icon on the footer

       const TwitterBtn = await browser.$('footer .social_twitter [data-test="social-twitter"]')
       
       
       
       const TwittergetHref = await TwitterBtn.getAttribute('href')
       await browser.newWindow(TwittergetHref)

       //Twitter of the company is opened on the new tab
       await expect(browser).toHaveUrl('https://x.com/saucelabs');

       //Step 2. Return to the main page and click on the "Facebook" icon on the footer

       browser.switchWindow('https://www.saucedemo.com/inventory.html')

       const FacebookBtn = await browser.$('footer .social_facebook [data-test="social-facebook"]')
       const FacebookBtnHref = await FacebookBtn.getAttribute('href')
       console.log(FacebookBtnHref)
       await browser.pause(2000);
       await browser.newWindow(FacebookBtnHref)

       //Facebook of the company is opened on the new tab
       await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');

       //step 3. Return to the main page and click on the "Linkedin" icon on the footer
       browser.switchWindow('https://www.saucedemo.com/inventory.html')
       
       await browser.pause(2000);
       const LinkedinBtn = await browser.$('footer .social_linkedin [data-test="social-linkedin"]')
       const LinkedinBtnHref = await LinkedinBtn.getAttribute('href')
       await browser.newWindow(LinkedinBtnHref)

       //Linkeding of the company is opened on the new tab
       await expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/');

       await browser.pause(2000);

    })

})
