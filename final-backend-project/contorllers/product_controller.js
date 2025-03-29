const products = require("../utility/mock_data")
const getProducts = (req, res) => {
    res.json(products)
}

const getProduct = (req, res) => {

    const product = products.find((item) => item.id === Number(req.params.id))

    if (!product) {
        return res.status(400).json({ message: "محصول مورد نظر یافت نشد" })
    }
    res.json(product)
}
module.exports = {
    getProducts,
    getProduct
}