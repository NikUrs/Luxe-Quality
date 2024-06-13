describe('Sorting', () => {

    it('Test Name (Z to A) and (A to Z)', async () => {
       
        //Precondition
       
       await browser.url('https://www.saucedemo.com/')

       const UserName = await browser.$('#user-name');
       const Password = await browser.$('#password');
       const LoginButton = await browser.$('#login-button')
       
       await UserName.waitForDisplayed()
       await UserName.click()
       await UserName.addValue('standard_user')

       await Password.waitForDisplayed()
       await Password.click()
       await Password.addValue('secret_sauce')

       await LoginButton.waitForDisplayed()
       await LoginButton.click()

       await expect(browser).toHaveUrlContaining('/inventory.html')


        //STEP 1. Choose one of the sorting options (Name Z to A)

       const SortContainer = await browser.$('[data-test="product-sort-container"]') 

       //Get items sorted by default
       const ItemsDefault = await $$('[data-test="inventory-item"] [data-test="inventory-item-name"]')
       const SortDescOption = await $('[value="za"]')

       await SortContainer.click()
       await browser.pause(1000);

       await SortDescOption.click()
       await browser.pause(1000);

       //Get items sorted by click the "Z to A" option
       const ItemsSortDesc = await $$('[data-test="inventory-item"] [data-test="inventory-item-name"]')
       const sortedDescText = await ItemsSortDesc.map((e) => e.getText())

       //Get items sorted from "Z" to "A" using the code
       const ItemsDefaultText = await ItemsDefault.map((e) => e.getText())
       const ItemsDefaultTextSort = [...ItemsDefaultText].sort((a, b) => b.localeCompare(a));
       


       //Check if the array sorted with the code in descending order and the array sorted with 
       //the “From Z to A” option are equal to each other

       const arraysAreEqualDesc = JSON.stringify(ItemsDefaultTextSort) === JSON.stringify(sortedDescText);
       console.log('Arrays are equal:', arraysAreEqualDesc);

       expect(ItemsDefaultTextSort).toEqual(sortedDescText)

       await browser.pause(2000);


    //CHOOSE one of the sorting options (Name A to Z)

        const SortAscOption = await $('[value="az"]')
 
        await SortContainer.click()
        await browser.pause(1000);
 
        await SortAscOption.click()
        await browser.pause(1000);
        
        //Get items sorted by click the "A to Z" option
        const ItemsSortAsc = await $$('[data-test="inventory-item"] [data-test="inventory-item-name"]')
        const ItemsSortAscText = await ItemsSortAsc.map((e) => e.getText())

        //Get items sorted from "A" to "Z" using the code
        const ItemsAscCode = [...ItemsDefaultText].sort((a, b) => a.localeCompare(b)); 
          
        //Check if the array sorted with the code in ascending order and the array sorted with 
        //the “From A to Z” option are equal to each other

        const arraysAreEqualAsc = JSON.stringify(ItemsAscCode) === JSON.stringify(ItemsSortAscText);
        console.log('Arrays are equal:', arraysAreEqualAsc);
 
        expect(ItemsAscCode).toEqual(ItemsSortAscText)

 
     })

     it('Sort by price "Low to High"', async () =>{


         //Precondition
       
       await browser.url('https://www.saucedemo.com/')

       const UserName = await browser.$('#user-name');
       const Password = await browser.$('#password');
       const LoginButton = await browser.$('#login-button')
       
       await UserName.waitForDisplayed()
       await UserName.click()
       await UserName.addValue('standard_user')

       await Password.waitForDisplayed()
       await Password.click()
       await Password.addValue('secret_sauce')

       await LoginButton.waitForDisplayed()
       await LoginButton.click()

       await expect(browser).toHaveUrlContaining('/inventory.html')

       //STEP 1. Choose one of the sorting options (Low to High)

       const SortContainer = await browser.$('[data-test="product-sort-container"]') 

       //Get items sorted by default
       const ItemsDefaultPrice = await $$('[data-test="inventory-item"] [data-test="inventory-item-price"]')
       
       const SortAscOption = await $('[value="lohi"]')
       await SortContainer.click()
       await browser.pause(1000);
       await SortAscOption.click()
       await browser.pause(1000);

       //Get the array with numbers sorted by click on the "Low to High" option
       const ItemAscPriceOption = await $$("[data-test='inventory-item-price']")
       const ItemAscOptionText = await ItemAscPriceOption.map((e) => e.getText())
       const ItemAscOptionNum = ItemAscOptionText.map(price => Number(price.replace("$", "")))  

       //Get price of a product (string type)
       const ItemsDefaultPriceText = await ItemsDefaultPrice.map((e) => e.getText())

       //Remove the “$” symbol and convert the values from string to the number type

       const ItemsDefaultPriceNum = ItemsDefaultPriceText.map(price => Number(price.replace("$", "")))       
       
       //Sorting the array from Low to High
       const ItemsAscPriceNum = [...ItemsDefaultPriceNum].sort((a, b) => parseFloat(a) - parseFloat(b));

       console.log(ItemAscOptionNum)
       console.log(ItemsDefaultPriceNum)

       await expect (ItemAscOptionNum).toEqual(ItemsAscPriceNum)

       await browser.pause(1000);  
    
     })


     it('Sort by price "High to Low"', async () =>{


         //Precondition
       
       await browser.url('https://www.saucedemo.com/')

       const UserName = await browser.$('#user-name');
       const Password = await browser.$('#password');
       const LoginButton = await browser.$('#login-button')
       
       await UserName.waitForDisplayed()
       await UserName.click()
       await UserName.addValue('standard_user')

       await Password.waitForDisplayed()
       await Password.click()
       await Password.addValue('secret_sauce')

       await LoginButton.waitForDisplayed()
       await LoginButton.click()

       await expect(browser).toHaveUrlContaining('/inventory.html')

       //STEP 1. Choose one of the sorting options (High to Low)


       const SortContainer = await browser.$('[data-test="product-sort-container"]') 

       //Get items sorted by default
       const ItemsDefaultPrice = await $$('[data-test="inventory-item"] [data-test="inventory-item-price"]')
       const ItemsDefaultPriceText = await ItemsDefaultPrice.map((e) => e.getText())
       const ItemsDefaultPriceNum = ItemsDefaultPriceText.map(price => Number(price.replace("$", "")))  
       
       const SortDescOption = await $('[value="hilo"]')
       await SortContainer.click()
       await browser.pause(1000);
       await SortDescOption.click()
       await browser.pause(1000);


       //Get the array with numbers sorted by click on the "High to Low" option
       const ItemDescPriceOption = await $$("[data-test='inventory-item-price']")
       const ItemDescOptionText = await ItemDescPriceOption.map((e) => e.getText())
       const ItemDescOptionNum = ItemDescOptionText.map(price => Number(price.replace("$", "")))  

       const ItemDescOptionSort = [...ItemsDefaultPriceNum].sort((a, b) => parseFloat(b) - parseFloat(a));

       await expect (ItemDescOptionSort).toEqual(ItemDescOptionNum)

       await browser.pause(1000);
    
     })

})