// Initializing installed packages
var inquirer = require("inquirer");
var mysql = require("mysql");
var cliTable = require("cli-table");

var connection = mysql.createConnection({
    host:"localhost",
    // 3306 is the port for the MySQL Open Source Database
    port: 3306,
    user:"root",
    password:"P3pp3r102!",
    database:"bamazon_db"
});

connection.connect(function(err){
    if(err)throw err;
    console.log("Connected ID is " + connection.threadId);
});

var products = function(){
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res){
        if(err) throw err;
        // Establishing the table as referenced in SQL
        var showTable = new cliTable ({
            head: ["Item ID", "Product Name", "Category", "Price", "Quantity"],
            colWidths: [15,20,20,15,15]
        });
        // Looping through products to push to location
        for(var i = 0; i < res.length; i++){
            showTable.push(
                [res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        }
        console.log(showTable.toString());
        userPrompt();
    });
}

// Prompting the user -- interacting via node.
function userPrompt(){
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Welcome! Enter the Item ID for the item you would like to buy."
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many of these item(s) would you like to buy?"
        },
    ]).then(function(userResponse){
        var quantity = userResponse.Quantity;
        var requestedID = userResponse.ID;
        fulfillOrder(quantity, requestedID);
    });
};

function fulfillOrder(amount, ID){
    connection.query('SELECT * FROM products WHERE item_id = ' + ID, function(err,res){
        if(err){console.log(err)};
        if(amount <= res[0].stock_quantity){
            var total = res[0].price * amount;
            console.log("We have you item in stock for purchase.");
            console.log("The total cost is " + total);

            // Update the products in the source table
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amount + "WHERE item_id = " + ID);
        
        } else {
            console.log("Item is out of stock");
        };

        //Order fulfillment display
        products();
    });
};

//Default display
products();