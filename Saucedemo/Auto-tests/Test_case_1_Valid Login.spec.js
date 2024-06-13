describe('Valid Login', () => {

    it('Valid Login', async () => {

       //Precondition
       await browser.url('https://www.saucedemo.com/')

       const UserName = await browser.$('#user-name');
       const Password = await browser.$('#password');
       const LoginButton = await browser.$('#login-button')

       await UserName.waitForDisplayed()
       await Password.waitForDisplayed()

       const UserNameValue = 'standard_user';
       const PasswordValue = 'secret_sauce';
       
       //step 1. Enter valid login into "Login" field
       await UserName.click()
       await UserName.addValue(UserNameValue)
       const enteredValue = await UserName.getValue()

       //Data is entered to the field
       await expect(UserNameValue).toBe(enteredValue)

       //step 2. Enter valid password into "Password" field
       await Password.click()
       await Password.addValue(PasswordValue)
       const enteredPass = await Password.getValue()
       const atrr = await Password.getAttribute('type')
       
       //Data is representered as dots instead of characters
       await expect(atrr).toBe('password')

       //Data is entered to the field
       await expect(enteredPass).toBe(PasswordValue)

       //step 3. Click "Login" button
       await LoginButton.waitForDisplayed()
       await LoginButton.click()

       //User is redirected to the inventory page
       await expect(browser).toHaveUrlContaining('/inventory.html');

       //Products and cart are displayed
       const Cart = await browser.$('#shopping_cart_container')
       const SortAsc = await $$('[data-test="inventory-item"] [data-test="inventory-item-name"]')
       const Arr1 = await SortAsc.forEach((elem) => 
        elem.isExisting()
      )

       await browser.pause(2000);

    })

})
