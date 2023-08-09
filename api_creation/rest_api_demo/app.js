// All import statements
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// need to connect the database
// mongoose.connect('mongodb+srv://node-shop:node-shop@node-rest-shop.bcwjbso.mongodb.net/?retryWrites=true&w=majority');
// on the above line we have hard coded the password but we can do it in dynamically.
mongoose.connect(
    'mongodb+srv://node-shop:'
    + process.env.MONGO_ATLAS_PW +
    '@node-rest-shop.bcwjbso.mongodb.net/?retryWrites=true&w=majority');

// routes path
const productRoutes = require('./API/routes/products');
const ordersRoutes = require('./API/routes/orders');

// morgan Using Morgan, you can easily log requests made to your Node.js server, including information such as the request method, the URL of the request, the status code of the response, and the length of the response body.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS policy handle
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATH');
        return res.status(200).json({});
    }
    next();
});


// Routes should handle request
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

// 
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;