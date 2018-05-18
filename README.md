# bamazon
MySql storefront exercise

## Purpose and creation of app
This is a CLI app that uses sql, inquirer, and console.table to create a webstore style purchase experience. It was created mid-May of 2018. I created a database and populated a table inside of Sequel Pro with some dummy product data. When the app is run the results will display the contents of the database (the 'inventory') and prompt the user to make a purchase. 

### Making a purchase
Using inquirer the app will prompt the user to select an item id. If the item id does not exist the user will be alerted and the inventory will be redisplayed with the prompt to select an item id. Once the user selects an appropriate item id the app will prompt the user for a quantity. If the quanity is higher than current stock levels the user will receive an alert. If the quantity is within current stock levels the user will receive a prompt letting them know how much their transaction cost. 

### Future development
I was a bit pressed for time in making this so in the future I would like to add some functionality to this. As of now there is just a customer level experience. I would like to add manager and supervisor level experiences. The manager level would be able to add to inventory levels and add new products. The supervisor level would be able to create entire departments, view cost overheads, and calculate the most profitable departments based on sales and overheads. 