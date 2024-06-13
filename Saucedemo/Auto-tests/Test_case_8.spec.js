
describe('Valid Checkout', () => {

    it('Valid Checkout', async () => {

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
       const HaveLength = Products.length;
      
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
      await ProductPriceBtn.click()
      getPrice(PriceValue)


      //Number near the cart at the top right increase by 1, product is added to cart
      const badge = await browser.$('[data-test="shopping-cart-badge"]')
      const badgeValue = await badge.getText()
      await expect(badgeValue).toBe('1');
      
      // step 2. Click on the "Cart" button
      const Cart = await browser.$('#shopping_cart_container')
      await expect(Cart).toBeExisting();
      await Cart.click()

      //Cart page is displayed
      await expect(browser).toHaveUrlContaining('/cart.html');

      //product is the same as was added at step 1
      const ProductInCart = await browser.$('.cart_item_label [data-test="inventory-item-name"]')
      const ProductTitleInCart = await ProductInCart.getText()
      
      console.log(ProductTitleInCart)
      await expect(ProductTitleInCart).toBe(ProductTitle);


      //step 3. Click on the "Checkout" button

      const CheckoutBtn = await browser.$('.cart_footer [data-test="checkout"]')
      await CheckoutBtn.click()

      //Checkout form is displayed
      const CheckoutForm = await browser.$('#checkout_info_container form')
      await expect(CheckoutForm).toBeExisting();

      await expect(browser).toHaveUrlContaining('/checkout-step-one.html');

    //step 4. Fill the "First Name" field with valid data

      const Form_FirstName = await browser.$('.form_group #first-name')
    

      const FirstNameVal = "Nikolas"
      await Form_FirstName.click()
      await Form_FirstName.addValue(FirstNameVal)

      const Form_FirstNameText = await Form_FirstName.getValue()

      //Data is entered to the field
      await expect(Form_FirstNameText).toBe(FirstNameVal);


    // step 5. Fill the "Second Name" field with valid data

      const Form_LastName = await browser.$('.form_group #last-name')
      const LastNameVal = "Pravko"
      await Form_LastName.click()
      await Form_LastName.addValue(LastNameVal)

      const Form_LastNameText = await Form_LastName.getValue()

    //Data is entered to the field
      await expect(Form_LastNameText).toBe(LastNameVal);


    // step 6. Fill the "Postal Code" field with valid data

      const Form_PostalCode = await browser.$('.form_group #postal-code')
      const PostalCodeVal = "65000"
      await Form_PostalCode.click()
      await Form_PostalCode.addValue(PostalCodeVal)

      const Form_PostalCodeText = await Form_PostalCode.getValue()

    //Data is entered to the field
      await expect(Form_PostalCodeText).toBe(PostalCodeVal);

    
    // step 7. Click on the "Continue" button

      const ContinuteBtn = await browser.$('form input[type="submit"]#continue')
      await ContinuteBtn.click()

      const SecHeaderOver = await browser.$('[data-test="secondary-header"] [data-test="title"]')
      const SecHeaderOverText = await SecHeaderOver.getText()

    // User is redirected to the "Overview" page
      await expect(browser).toHaveUrlContaining('/checkout-step-two.html');
      await expect (SecHeaderOverText).toBe('Checkout: Overview')

    //Product from step 1 is displayed
      const ProductOnOverview = await browser.$('.cart_item_label [data-test="inventory-item-name"]');
      const ProductOnOverviewText = await ProductOnOverview.getText()
      console.log(ProductOnOverviewText)
      console.log(ProductInCart)
      await expect (ProductOnOverviewText).toBe(ProductTitleInCart)

    //Total price = price of products from step 1
      const TotalOnOverveiw = await browser.$('.summary_info [data-test="subtotal-label"]')
      const TotalOnOverveiwValue = await TotalOnOverveiw.getText()
      let TotalValueNum = TotalOnOverveiwValue.replace("Item total: ", "");

      await expect(TotalValueNum).toBe(PriceValue)


      //step 8. Click on the "Finish" button
      const FinishBtn = await browser.$('.cart_footer button#finish')
      await FinishBtn.click()

      // User is redirected to the "Checkout Complete" page

      const SecHeaderComplete = await browser.$('[data-test="secondary-header"] [data-test="title"]')
      const SecHeaderCompleteText = await SecHeaderComplete.getText()

      await expect(browser).toHaveUrlContaining('/checkout-complete.html');
      await expect (SecHeaderCompleteText).toBe('Checkout: Complete!')

      //"Thank you for your order!" message is displayed
      const OrderMessage = await browser.$('#checkout_complete_container [data-test="complete-header"]')
      const OrderMessageText = await OrderMessage.getText()
      await expect (OrderMessageText).toBe('Thank you for your order!')


      //step 9. Click on the "Back Home" button
      const BackHomeBtn = await browser.$('#checkout_complete_container button#back-to-products')
      await BackHomeBtn.click()

      //User is redirected to the inventory page
      await expect(browser).toHaveUrlContaining('/inventory.html');

      //Products are displayed
      const SortAsc = await $$('[data-test="inventory-item"] [data-test="inventory-item-name"]')
       //const Arr1 = await SortAsc.map((e) => e.getText())

      SortAsc.forEach((elem) =>    
         expect(elem).toBeExisting()
      )
      //Cart is empty
      const isBadgeExisting = await badge.isExisting();
      await expect(isBadgeExisting).toBe(false);


      await browser.pause(2000);

    })

})
