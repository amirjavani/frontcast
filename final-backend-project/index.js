const express = require("express");
const app = express()
const cors = require("cors");  

const productRoute = require("./routes/product_route")
const authtRoute = require("./routes/auth_route")
const orderRoute = require("./routes/order_route")
const path = require("path")
app.use(cors());

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, "public")))


app.use('/api/products', productRoute)
app.use('/api/users', authtRoute)
app.use('/api/orders', orderRoute)

app.listen(5000, () => {
    console.log("connect to 5000");
})