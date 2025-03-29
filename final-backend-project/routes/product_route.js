const express = require("express")
const router = express.Router()
const productController = require("../contorllers/product_controller")

router.get("/",productController.getProducts)
router.get("/:id",productController.getProduct)

module.exports = router