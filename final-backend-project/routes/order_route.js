const express = require("express")
const router = express.Router()
const orderController = require("../contorllers/order_controller")
const auth = require("../midlewares/auth")

router.use(auth)
router.post("/",orderController.createOrder)

module.exports = router