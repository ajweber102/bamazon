// Initializing installed packages
var inquirer = require("inquirer");
var mysql = require("mysql");
var cliTable = require("cli-table");

var connection = mysql.addConnection({
    host:"localhost",
    // 3306 is the port for the MySQL Open Source Database
    port:3306,
    user:"root",
    password:"",
    database:"bamazon"
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
        var showTable = new table ({
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

function userPrompt(){
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Welcome! Enter the Item ID for the item you would like to buy."
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many of these item(s) would you like to buy?"
            filter: Number
        },
    ]).then(function(userResponse){
        var quantity = userResponse.Quantity;
        var requestedID = userResponse.ID;
        fulfillOrder(quantity, requestedID);
    });
};