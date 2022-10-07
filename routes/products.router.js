const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  let products = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Filter');
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id: id,
    name: 'product 2',
    price: 600,
  });
});

module.exports = router;
