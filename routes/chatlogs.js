const express = require("express");
const router = express.Router();

const chatlogController = require("../controllers/chatlog_controller");

router.post("/:user", chatlogController.addMessage);
router.get("/:user", chatlogController.getMessages);
router.delete("/:user", chatlogController.clearChat);
router.delete("/:user", chatlogController.deleteMessage);

module.exports = router;
