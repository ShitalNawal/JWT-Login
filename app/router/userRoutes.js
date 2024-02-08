const express = require("express")
const userController = require("../controller/userController")
const router = express.Router()

//registration User 
router.post("/signUp", userController.registerUser)

//signInUser 
router.post("/signIn",userController.signInUser)
module.exports = router