const express = require('express');

const ProductService = require('./../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Filter');
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) =>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  })
});

router.put('/:id', (req, res) => {
  const body = req.body;
  const {id} = req.params;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.patch('/:id', (req, res) => {
  const body = req.body;
  const {id} = req.params;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
