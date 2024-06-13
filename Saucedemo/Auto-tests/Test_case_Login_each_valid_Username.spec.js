describe('Login with accepted usernames', () => {

    it('Username: standard_user', async () => {

       //Precondition
       await browser.url('https://www.saucedemo.com/')

       const UserName = await browser.$('#user-name');
       const Password = await browser.$('#password');
       const LoginButton = await browser.$('#login-button')

       const UserNameValue = 'standard_user';
       const PasswordValue = 'secret_sauce';
    
       await UserName.waitForDisplayed()
       await Password.waitForDisplayed()

       //step 1. Enter valid login into "Login" field
       await UserName.click()
       await UserName.addValue(UserNameValue)
       const enteredValue = await UserName.getValue()

       //Data is entered to the field
       console.log(await expect(UserNameValue).toBe(enteredValue))

       //step 2. Enter valid password into "Password" field
       await Password.click()
       await Password.addValue(PasswordValue)
       const enteredPass = await Password.getValue()

       //Data is entered to the field
       await expect(enteredPass).toBe(PasswordValue)

       //Data is represented as dots instead of characters
       const atrr = await Password.getAttribute('type')
       await expect(atrr).toBe('password')
       
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

      
       const BurgerBtn = await browser.$(".bm-burger-button #react-burger-menu-btn")
       await BurgerBtn.click()

      //Menu is expended
       const ExpandedMenuAttr = await browser.$(".bm-menu-wrap")
       const TestAttr = await ExpandedMenuAttr.getAttribute('aria-hidden')
       await expect(TestAttr).toBe('false');

       const MenuItem = await browser.$$(".menu-item")
      //4 items are displayed
       expect(MenuItem).toHaveLength(4)

      //step 4. Click on the "Logout" button
      
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

    it('Username: locked_out_user', async () => {

      //Precondition
      await browser.url('https://www.saucedemo.com/')

      const UserName = await browser.$('#user-name');
      const Password = await browser.$('#password');
      const LoginButton = await browser.$('#login-button')

      const UserNameValue = 'locked_out_user';
      const PasswordValue = 'secret_sauce';
   
      await UserName.waitForDisplayed()
      await Password.waitForDisplayed()

      //step 1. Enter valid login into "Login" field
      await UserName.click()
      await UserName.addValue(UserNameValue)
      const enteredValue = await UserName.getValue()

      //Data is entered to the field
      console.log(await expect(UserNameValue).toBe(enteredValue))

      //step 2. Enter valid password into "Password" field
      await Password.click()
      await Password.addValue(PasswordValue)
      const enteredPass = await Password.getValue()

      //Data is entered to the field
      await expect(enteredPass).toBe(PasswordValue)

      //Data is represented as dots instead of characters
      const atrr = await Password.getAttribute('type')
      await expect(atrr).toBe('password')
      
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

     
      const BurgerBtn = await browser.$(".bm-burger-button #react-burger-menu-btn")
      await BurgerBtn.click()

     //Menu is expended
      const ExpandedMenuAttr = await browser.$(".bm-menu-wrap")
      const TestAttr = await ExpandedMenuAttr.getAttribute('aria-hidden')
      await expect(TestAttr).toBe('false');

      const MenuItem = await browser.$$(".menu-item")
     //4 items are displayed
      expect(MenuItem).toHaveLength(4)

     //step 4. Click on the "Logout" button
     
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
      
   it('Username: problem_user', async () => {

    //Precondition
    await browser.url('https://www.saucedemo.com/')

    const UserName = await browser.$('#user-name');
    const Password = await browser.$('#password');
    const LoginButton = await browser.$('#login-button')

    const UserNameValue = 'problem_user';
    const PasswordValue = 'secret_sauce';
 
    await UserName.waitForDisplayed()
    await Password.waitForDisplayed()

    //step 1. Enter valid login into "Login" field
    await UserName.click()
    await UserName.addValue(UserNameValue)
    const enteredValue = await UserName.getValue()

    //Data is entered to the field
    console.log(await expect(UserNameValue).toBe(enteredValue))

    //step 2. Enter valid password into "Password" field
    await Password.click()
    await Password.addValue(PasswordValue)
    const enteredPass = await Password.getValue()

    //Data is entered to the field
    await expect(enteredPass).toBe(PasswordValue)

    //Data is represented as dots instead of characters
    const atrr = await Password.getAttribute('type')
    await expect(atrr).toBe('password')
    
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

   
    const BurgerBtn = await browser.$(".bm-burger-button #react-burger-menu-btn")
    await BurgerBtn.click()

   //Menu is expended
    const ExpandedMenuAttr = await browser.$(".bm-menu-wrap")
    const TestAttr = await ExpandedMenuAttr.getAttribute('aria-hidden')
    await expect(TestAttr).toBe('false');

    const MenuItem = await browser.$$(".menu-item")
   //4 items are displayed
    expect(MenuItem).toHaveLength(4)

   //step 4. Click on the "Logout" button
   
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



  it('Username: performance_glitch_user', async () => {

    //Precondition
    await browser.url('https://www.saucedemo.com/')

    const UserName = await browser.$('#user-name');
    const Password = await browser.$('#password');
    const LoginButton = await browser.$('#login-button')

    const UserNameValue = 'performance_glitch_user';
    const PasswordValue = 'secret_sauce';

    await UserName.waitForDisplayed()
    await Password.waitForDisplayed()

    //step 1. Enter valid login into "Login" field
    await UserName.click()
    await UserName.addValue(UserNameValue)
    const enteredValue = await UserName.getValue()

    //Data is entered to the field
    console.log(await expect(UserNameValue).toBe(enteredValue))

    //step 2. Enter valid password into "Password" field
    await Password.click()
    await Password.addValue(PasswordValue)
    const enteredPass = await Password.getValue()

    //Data is entered to the field
    await expect(enteredPass).toBe(PasswordValue)

    //Data is represented as dots instead of characters
    const atrr = await Password.getAttribute('type')
    await expect(atrr).toBe('password')
    
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

  
    const BurgerBtn = await browser.$(".bm-burger-button #react-burger-menu-btn")
    await BurgerBtn.click()

  //Menu is expended
    const ExpandedMenuAttr = await browser.$(".bm-menu-wrap")
    const TestAttr = await ExpandedMenuAttr.getAttribute('aria-hidden')
    await expect(TestAttr).toBe('false');

    const MenuItem = await browser.$$(".menu-item")
  //4 items are displayed
    expect(MenuItem).toHaveLength(4)

  //step 4. Click on the "Logout" button
  
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


  it('Username: error_user', async () => {

    //Precondition
    await browser.url('https://www.saucedemo.com/')

    const UserName = await browser.$('#user-name');
    const Password = await browser.$('#password');
    const LoginButton = await browser.$('#login-button')

    const UserNameValue = 'error_user';
    const PasswordValue = 'secret_sauce';

    await UserName.waitForDisplayed()
    await Password.waitForDisplayed()

    //step 1. Enter valid login into "Login" field
    await UserName.click()
    await UserName.addValue(UserNameValue)
    const enteredValue = await UserName.getValue()

    //Data is entered to the field
    console.log(await expect(UserNameValue).toBe(enteredValue))

    //step 2. Enter valid password into "Password" field
    await Password.click()
    await Password.addValue(PasswordValue)
    const enteredPass = await Password.getValue()

    //Data is entered to the field
    await expect(enteredPass).toBe(PasswordValue)

    //Data is represented as dots instead of characters
    const atrr = await Password.getAttribute('type')
    await expect(atrr).toBe('password')
    
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

  
    const BurgerBtn = await browser.$(".bm-burger-button #react-burger-menu-btn")
    await BurgerBtn.click()

  //Menu is expended
    const ExpandedMenuAttr = await browser.$(".bm-menu-wrap")
    const TestAttr = await ExpandedMenuAttr.getAttribute('aria-hidden')
    await expect(TestAttr).toBe('false');

    const MenuItem = await browser.$$(".menu-item")
  //4 items are displayed
    expect(MenuItem).toHaveLength(4)

  //step 4. Click on the "Logout" button
  
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

  it('Username: visual_user', async () => {

    //Precondition
    await browser.url('https://www.saucedemo.com/')

    const UserName = await browser.$('#user-name');
    const Password = await browser.$('#password');
    const LoginButton = await browser.$('#login-button')

    const UserNameValue = 'visual_user';
    const PasswordValue = 'secret_sauce';

    await UserName.waitForDisplayed()
    await Password.waitForDisplayed()

    //step 1. Enter valid login into "Login" field
    await UserName.click()
    await UserName.addValue(UserNameValue)
    const enteredValue = await UserName.getValue()

    //Data is entered to the field
    console.log(await expect(UserNameValue).toBe(enteredValue))

    //step 2. Enter valid password into "Password" field
    await Password.click()
    await Password.addValue(PasswordValue)
    const enteredPass = await Password.getValue()

    //Data is entered to the field
    await expect(enteredPass).toBe(PasswordValue)

    //Data is represented as dots instead of characters
    const atrr = await Password.getAttribute('type')
    await expect(atrr).toBe('password')
    
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

  
    const BurgerBtn = await browser.$(".bm-burger-button #react-burger-menu-btn")
    await BurgerBtn.click()

  //Menu is expended
    const ExpandedMenuAttr = await browser.$(".bm-menu-wrap")
    const TestAttr = await ExpandedMenuAttr.getAttribute('aria-hidden')
    await expect(TestAttr).toBe('false');

    const MenuItem = await browser.$$(".menu-item")
  //4 items are displayed
    expect(MenuItem).toHaveLength(4)

  //step 4. Click on the "Logout" button
  
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
