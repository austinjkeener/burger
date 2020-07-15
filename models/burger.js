const orm = require("../config/orm.js");


//this document works in collaboration with the orm document so that they can create and update inforamtion along with the user interaction between front end, back end, and server side.
const burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      console.log('I was clicked')
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

  // exporting the burger information for other documents to use
  module.exports = burger;