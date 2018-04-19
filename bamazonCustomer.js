var inquirer = require('inquirer');
var mysql = require('mysql');
// var sqlpassword = require('./password.js');

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user	   : 'root',
    password : 'Phantom1!',
    database : 'bamazon'
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });
  