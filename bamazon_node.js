// Initializing installed packages
var inquirer = require("inquirer");
var mysql = require("mysql");
var cliTable = require("cli-table");

var connection = mysql.addConnection({
    host:"localhost",
    port:8080,
    user:"root",
    password:"",
    database:"bamazon"
});

connection.connect(function(err){
    if(err)throw err;
    console.log("Connected ID is " + connection.threadId);
});