const express = require("express")
const router = express.Router()
const authController = require("../contorllers/auth_controller")

router.post("/login",authController.loginUser)
router.post("/register",authController.createUser)

module.exports = router