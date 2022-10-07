const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Cat 1',
    },
    {
      id: 2,
      name: 'Cat 2',
    },
    {
      id: 3,
      name: 'Cat 3',
    },
  ]);
});

router.get('/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId,
  })
});

module.exports = router;
