const express = require("express");
const contactController = require("../controller/contactController")
const router = express.Router()

//Send message
router.post("/addMessage",contactController.userContact)
router.get("/getMessage",contactController.getUserContact)

module.exports = router;