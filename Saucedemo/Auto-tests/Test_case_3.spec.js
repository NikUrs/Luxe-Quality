describe('Login with invalid login', () => {

    it('Login with invalid login', async () => {

       //Precondition
       await browser.url('https://www.saucedemo.com/')

       const UserName = await browser.$('#user-name');
       const Password = await browser.$('#password');
       const LoginButton = await browser.$('#login-button')

       const UserNameValue = 'STANDARD_USER';
       const PasswordValue = 'secret_sauce';

       await UserName.waitForDisplayed()
       await Password.waitForDisplayed()

       //step 1. Enter invalid data into "Login" field
       await UserName.click()
       await UserName.addValue(UserNameValue)
       const enteredValue = await UserName.getValue()

       //Data is entered to the Field
       console.log(await expect(UserNameValue).toBe(enteredValue))
      
       //step 2. Enter invalid data into "Password" field
       await Password.click()
       await Password.addValue(PasswordValue)
       const enteredPass = await Password.getValue()
       const atrr = await Password.getAttribute('type')

       //Data is entered to the field
       await expect(enteredPass).toBe(PasswordValue)
       //Data is represented as dots instead of characters
       await expect(atrr).toBe('password')


       //step 3. Click "Login" button

       await LoginButton.click()

       //"X" icon are displayed on the "Login" field
       const UsernameErrSvg = await browser.$("input[data-test='username'] + svg.error_icon")
       await expect(UsernameErrSvg).toBeDisplayed() 

       //"Login" field is highlighted with red
       const UsernameInputErr = await browser.$("input[data-test='username'].error")
       await expect(UsernameInputErr).toBeDisplayed() 

       //"X" icon are displayed on the "Password" field
       const PasswordErrSvg = await browser.$("input[data-test='password'] + svg.error_icon")
       await expect(PasswordErrSvg).toBeDisplayed() 

       //"Password" field is highlighted with red
       const PasswordInputErr = await browser.$("input[data-test='password'].error")
       await expect(PasswordInputErr).toBeDisplayed() 

       //"Epic sadface: Username and password do not match any user in this service" error message is displayed
       const ErrorMessage = await browser.$('.error-message-container.error')
       const ErrorMessageText = await ErrorMessage.getText()
       await expect(ErrorMessageText).toBe('Epic sadface: Username and password do not match any user in this service')

       await browser.pause(2000);

    })

})
