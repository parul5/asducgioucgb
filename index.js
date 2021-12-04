const express = require("express");
const port = 8000;

const db = require("./config/mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log("error starting server");
    return;
  }

  console.log("server started at port ", port);
});
