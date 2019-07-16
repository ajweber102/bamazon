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