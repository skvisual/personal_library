// iNSTALL DEPENDENCIES. USE MYSQL BECAUSE WE ARE WORKING IWTH A DB, AND UTIL BECAUSE WE NEED TO USE PROMISIFY
const mysql = require('mysql'); 
const util = require('util');

// CREATE OUR CONNECTION USING CREATECONNECTION METHOD FROM MYSQL.
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0177',
    database: 'library_db'
  });

  //USE THE .CONNECT() METHOD TO MAKE OUR CONNECTION.
connection.connect();

// we give connection.query access to promises
// i.e. .then() and .catch()
connection.query = util.promisify(connection.query);

// EXPORTING OUR CONNECTION SO WE CAN USE IT ON OTHER SHEETS.
module.exports = connection;

// WITHOUT PROMISIFY
// connection.query('SELECT * FROM books', function(err, results){
//   if(err) throw error
//   console.log(results)
// })

// WITH PROMISIFY - provides access to promises and gives us more control
// connection.query('SELECT * FROM books')
//   .then(results => {
//     console.log(results)
//   })
//   .catch(err => console.log(err))