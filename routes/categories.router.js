const express = require('express');

const CategoryService = require('./../services/category.service');

const router = express.Router();
const service = new CategoryService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId,
  })
});

module.exports = router;
