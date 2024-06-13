
describe('Logout', () => {

    it('Logout', async () => {

      //Preconditions
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


       //step 1. Click on the "Burger" button
       const BurgerBtn = await browser.$(".bm-burger-button #react-burger-menu-btn")
       await BurgerBtn.click()

      //Menu is expended
       const ExpandedMenuAttr = await browser.$(".bm-menu-wrap")
       const TestAttr = await ExpandedMenuAttr.getAttribute('aria-hidden')
       await expect(TestAttr).toBe('false');

       const MenuItem = await browser.$$(".menu-item")
      //4 items are displayed
       expect(MenuItem).toHaveLength(4)
      

      //step 2. Click on the "Logout" button
       const LogoutBtn = await browser.$('#logout_sidebar_link')
       await LogoutBtn.click()

      //User is redirected to the "Login" page
       await expect(browser).toHaveUrl('https://www.saucedemo.com/')


       const UserNameFieldDefault = await browser.$('#user-name');
       const PasswordFieldDefault = await browser.$('#password');

       //"Username" and "Password" fields are empty
       await expect(UserNameFieldDefault).toHaveValueContaining('')
       await expect(PasswordFieldDefault).toHaveValueContaining('')


       await browser.pause(2000);

  
    })

})
