
describe('Saving a cart after logout', () => {

    it('Saving a cart after logout', async () => {

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


      //step 1. Click on the "Add to cart" button

      //Set a random product selection
       const Products = await browser.$$('[data-test="inventory-item"] [data-test="inventory-item-description"]')
       const HaveLength = await Products.length;
   
       const RandomNum = function getRandomInt(max) {
              return Math.floor(Math.random() * max);
       }
   

       //Getting a random product using random number within the length of the array with products
       const RandomNum01 = RandomNum(HaveLength)
       const ProductSpecific = Products[RandomNum01];
       const ProductPriceBtn = await ProductSpecific.$(".pricebar button")
       const ProductTitle = await ProductSpecific.$("[data-test='inventory-item-name']").getText()


       const ProductSpecificPrice = await ProductSpecific.$('.pricebar [data-test="inventory-item-price"]')
       const PriceValue = await ProductSpecificPrice.getText()
       function getPrice() {
              let priceNumber = Number(PriceValue.replace("$", ""));
              console.log(priceNumber)
       }

       //Product is added to cart
       await ProductPriceBtn.click()
       getPrice(PriceValue)


       //Number near the cart at the top right increase by 1, product is added to cart
       const badge = await browser.$('[data-test="shopping-cart-badge"]')
       const badgeValue = await badge.getText()
       await expect(badgeValue).toBe('1');


       // step 2. Click on the "Burger" button
       const BurgerBtn = await browser.$(".bm-burger-button #react-burger-menu-btn")
       await BurgerBtn.click()

       const ExpandedMenuAttr = await browser.$(".bm-menu-wrap")
       const TestAttr = await ExpandedMenuAttr.getAttribute('aria-hidden')

       //Menu is expended
       await expect(TestAttr).toBe('false');

       const MenuItem = await browser.$$(".menu-item")

       //4 items are displayed
       expect(MenuItem).toHaveLength(4)


       // step 3. Click on the "Logout" button
       const LogoutBtn = await browser.$('#logout_sidebar_link')
       await LogoutBtn.click()

       //User is redirected to the "Login" page
       await expect(browser).toHaveUrl('https://www.saucedemo.com/')

       const UserNameFieldDefault = await browser.$('#user-name')
       const PasswordFieldDefault = await browser.$('#password')

       //"Username" and "Password" fields are empty
       await expect(UserNameFieldDefault).toHaveValueContaining('')
       await expect(PasswordFieldDefault).toHaveValueContaining('')


       // step 4. Login to the account using the same valid login and password

       await UserName.setValue(UserNameValue)  
       await Password.setValue(PasswordValue)

       await LoginButton.click()

       //User is redictered to the inventory page
       await expect(browser).toHaveUrlContaining('/inventory.html');

       //Products and cart are displayed
       const Cart = await browser.$('#shopping_cart_container')
       await expect(Cart).toBeExisting()
       const SortAsc = await $$('[data-test="inventory-item"] [data-test="inventory-item-name"]')
       SortAsc.forEach((elem) => 
         expect(elem).toBeExisting()
       )
      

      // step 5. Click on the "Cart" button

      await Cart.click()

      //Cart page is dipslayed
      await expect(browser).toHaveUrlContaining('/cart.html');
      const ProductInCart = await browser.$('.cart_item_label [data-test="inventory-item-name"]')
      const ProductTitleInCart = await ProductInCart.getText()
      
      //Product is the same as was added at step 1
      await expect(ProductTitleInCart).toBe(ProductTitle);


       await browser.pause(2000);

     
    })

})
