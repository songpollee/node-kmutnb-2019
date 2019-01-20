const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ value: 'Hello Node' });
});

module.exports = router;
