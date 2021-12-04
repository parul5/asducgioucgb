const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chatlogs");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting to MongoDB"));

db.once("open", function () {
  console.log("connected to database :: MongoDB");
});

module.exports = db;
