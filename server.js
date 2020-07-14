const express = require("express");

//note to self about how this project is going to work well. Standard html template with an ordered list, a button to make a list item append to a different list on the same page, a form to populate the list, and a submit button to append the user input to the list. All the data that the user put in is saved into mysql as persistent data.

//more class notes on the homework due tomorrow night. another short description of the application during teacher demo. user input shows up on the webpage and then persists into the database after the 'submit' button has been clicked. make sure to look into how i can use boolean flags for this assignment. the usage of CRUD is going to be used. using location.reload instead if appending for moving the selections from one side to the other is what i need to do for my list items. scaffold out my application with basic elements and then immediately push to heroku to make sure that it works. look under the supplimental folder in the class repo for how to setup the heroku connection.

var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
