const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders GET'
    })
})

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order POST!',
        order: order
    })
})

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'The order updated!',
        orderId: req.params.orderId
    })
})

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'The order updated!',
        orderId: req.params.orderId
    })
})

module.exports = router;