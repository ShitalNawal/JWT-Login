const express = require("express")
const userController = require("../controller/userController")
const router = express.Router()

//registration User 
router.post("/signUp", userController.registerUser)

//signInUser 
router.get("/signIn",userController.signInUser)
module.exports = router