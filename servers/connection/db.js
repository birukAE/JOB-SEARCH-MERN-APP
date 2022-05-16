const mysql= require('mysql');


const db= mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "bkbkbkbk",
    database: "work",
});
module.exports= db;
