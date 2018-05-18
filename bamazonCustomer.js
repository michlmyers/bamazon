var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) {
        console.log('connection error' + err.stack);
    }
    startApp();
});

function startApp() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.table(res);
        pickItem(res);
    });
}

function pickItem(inventory) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'choice',
            message: 'Type the ID of the item you want to purchase',
            validate: function (val) {
                return !isNaN(val);
            }
        }
    ])
        .then(function (val) {
            var pickId = parseInt(val.choice);
            var product = scanInventory(pickId, inventory);
            if (product) {
                pickAmount(product);
            }
            else {
                console.log("\nSorry. We don't carry that.\n");
                startApp();
            }
        });
}

function pickAmount(product) {
    inquirer.prompt([
        {
            type: 'input',
            name: 'amount',
            message: 'How many many?',
            validate: function (val) {
                return val > 0;
            }
        }
    ])
        .then(function (val) {
            var amount = parseInt(val.amount);
            if (amount > product.quantity) {
                console.log('\nSorry. Insufficient quantity!\n');
                startApp();
            }
            else {
                buyItem(product, amount);
            }
        });
}

function buyItem(product, amount) {
    connection.query(
        'UPDATE products SET quantity = quantity - ? WHERE item_id = ?',
        [amount, product.item_id],
        function (err, res) {
            console.log('\nThanks. Your total cost is $' + amount * product.price + '\n');
            startApp();
        }
    );
}

function scanInventory(pickId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === pickId) {
            return inventory[i];
        }
    }
    return null;
}