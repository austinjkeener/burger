const mysql = require("mysql");
let connection;
// mySQL connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
}

// this is what happens if there is an error
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

// exporting connection
module.exports = connection;