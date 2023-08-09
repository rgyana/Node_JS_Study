// Import Section
const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');

// GET Product
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Headeing GET request to /products'
    });
});

// POST Product
router.post('/', (req, res) => {
    // const product = new Product({
    //     _id: new mongoose.Types.ObjectId(),
    //     name: req.body,
    //     price: req.body

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    console.log(product);
    product.save()
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: 'Headeing POST request to /products',
                createdProduct: result,

            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            });
        });
});

// GET Specific product
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    Product.findById(id).exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
        .catch(err => {
            console.log(err);
            err.status(500).json({ error: err });
        })
});

// Update product
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product!'
    })
})

// Delete Product
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'The product in Deleted'
    })
})

module.exports = router;