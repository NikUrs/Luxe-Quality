
describe('Checkout without products', () => {

    it('Checkout without products', async () => {
       await browser.url('https://www.saucedemo.com/')


       //Precondition

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


       // step 1. Click on the "Cart" button
      const Cart = await browser.$('#shopping_cart_container')
      await expect(Cart).toBeExisting();
      await Cart.click()

      //Cart page is displayed
      await expect(browser).toHaveUrlContaining('/cart.html');


      //step 2. Click on the "Checkout" button
      const CheckoutBtn = await browser.$('.cart_footer [data-test="checkout"]')
      await CheckoutBtn.click()

      await expect(browser).toHaveUrlContaining('/cart.html');


      //HERE should be a test for the error message!

      await browser.pause(2000);


    })

})
