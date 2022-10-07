const express = require('express');
const faker = require('faker');

const app = express();
const port = 3020;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/new-endpoint', (req, res) => {
  res.send('Another endpoint');
});

app.get('/home', (req, res) => {
  res.send('<h1>Home</h1>');
});

app.get('/products', (req, res) => {
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

app.get('/products/filter', (req, res) => {
  res.send('Filter');
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id: id,
    name: 'product 2',
    price: 600,
  });
});

app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('There is no params');
  }
});

app.get('/categories', (req, res) => {
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

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId,
  })
});

app.listen(port, () => {
  console.log('Port: ' + port);
});
