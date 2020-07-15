const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// this document is where i am using crud (create, read, update, delete)

// Create all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log('Expected data: ', data)
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
   // res.render("index", hbsObject);
   res.render("index",{burgers: data})
  });
});
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//this is how i am updating the content within the document
router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;