var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "bbmgpncx4pgjptan",

  // Your password
  password: "l1t9dg4oog9abj9u",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  //createProduct();
});

module.exports = connection;