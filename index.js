const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3020;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/new-endpoint', (req, res) => {
  res.send('Another endpoint');
});

app.get('/home', (req, res) => {
  res.send('<h1>Home</h1>');
});

routerApi(app);

app.listen(port, () => {
  console.log('Port: ' + port);
});
