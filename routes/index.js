const express = require("express");
const router = express.Router();

router.use("/chatlogs", require("./chatlogs"));
router.get("/", function (req, res) {
  res.send("<h1>No Home</h1>");
});

module.exports = router;
