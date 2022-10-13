const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {boomErrorHandler, errorHandler, logErrors, ormErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3020;

app.use(express.json());

const whiteList = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('not allowed'));
    }
  }
}

app.use(cors(options));

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

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Port: ' + port);
});
