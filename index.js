const express = require('express');
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
  res.json([
    {
      id: 1,
      name: 'product 1',
      price: 1000,
    },
    {
      id: 2,
      name: 'product 2',
      price: 600,
    },
    {
      id: 3,
      name: 'product 3',
      price: 1500,
    }
  ]);
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

app.listen(port, () => {
  console.log('Port: ' + port);
});
