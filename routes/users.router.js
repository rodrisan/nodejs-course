const express = require('express');

const UserService = require('./../services/user.service');

const router = express.Router();
const service = new UserService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/params', (req, res) => {
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

module.exports = router;
