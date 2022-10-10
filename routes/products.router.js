const express = require('express');

const ProductService = require('./../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) =>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
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

router.patch('/:id', async (req, res, next) => {
  try {
    const body = req.body;
    const {id} = req.params;
    const product = await service.update(id, body);

    res.json(product);
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const response = await service.delete(id);

  res.json(response);
});

module.exports = router;
