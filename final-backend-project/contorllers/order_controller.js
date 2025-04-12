const products = require("../utility/mock_data"); 
let orders = [];

const createOrder = (req, res) => {
    const { products: orderedProducts } = req.body;
    
    if (!Array.isArray(orderedProducts) || orderedProducts.length === 0) {
        return res.status(400).json({ message: 'محصولات مورد نظر یافت نشد' });
    }

    const productSet = new Set(products.map(p => p.id));

    const invalidProducts = orderedProducts.filter(p => !productSet.has(p.productId));

    if (invalidProducts.length > 0) {
        return res.status(400).json({
            message: 'برخی از محصولات موجود نیستند',
            invalidProducts
        });
    }

    const newOrders = orderedProducts.map(product => {
        const { productId, quantity } = product;

        if (!productId || !quantity) {
            return null; 
        }

        return {
            id: orders.length + 1,
            productId,
            quantity,
            status: 'pending',
            createdAt: new Date()
        };
    }).filter(order => order !== null); 

    orders = [...orders, ...newOrders];

    res.status(201).json({
        message: "عملیات موفقیت آمیز بود",
        newOrders
    });
};

module.exports = { createOrder };
