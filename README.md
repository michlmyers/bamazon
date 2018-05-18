# bamazon
MySql storefront exercise

## Purpose and creation of app
This is a CLI app that uses sql, inquirer, and console.table to create a webstore style purchase experience. It was created mid-May of 2018. I created a database and populated a table inside of Sequel Pro with some dummy product data. When the app is run the results will display the contents of the database (the 'inventory') and prompt the user to make a purchase. 

### Making a purchase
Using inquirer the app will prompt the user to select an item id. 

<img width="1004" alt="purchaseprompt" src="https://user-images.githubusercontent.com/35053108/40216404-6c169484-5a34-11e8-8b80-675b2018994c.png">

If the item id does not exist the user will be alerted and the inventory will be redisplayed with the prompt to select an item id. 

<img width="723" alt="nocarryalert" src="https://user-images.githubusercontent.com/35053108/40216479-e3479eb8-5a34-11e8-92d5-c5164f1e8ce3.png">

Once the user selects an appropriate item id the app will prompt the user for a quantity. 

<img width="602" alt="amountprompt" src="https://user-images.githubusercontent.com/35053108/40216513-37a4123e-5a35-11e8-8d73-d2af68ea26f4.png">

If the quanity is higher than current stock levels the user will receive an alert. 

<img width="700" alt="insufficient" src="https://user-images.githubusercontent.com/35053108/40216622-cf9ce796-5a35-11e8-9748-a7898a7702dc.png">

If the quantity is within current stock levels the user will receive a prompt letting them know how much their transaction cost. 

<img width="821" alt="salecomplete" src="https://user-images.githubusercontent.com/35053108/40216641-f2985adc-5a35-11e8-8374-353f5ad003d5.png">

Database was updated - 

<img width="580" alt="updatedinsql" src="https://user-images.githubusercontent.com/35053108/40216762-b95d8e12-5a36-11e8-901a-6212193b699d.png">

### Future development
I was a bit pressed for time in making this so in the future I would like to add some functionality to this. As of now there is just a customer level experience. I would like to add manager and supervisor level experiences. The manager level would be able to add to inventory levels and add new products. The supervisor level would be able to create entire departments, view cost overheads, and calculate the most profitable departments based on sales and overheads. 