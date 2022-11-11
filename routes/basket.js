const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('basket', { id: req.params.id });
});

module.exports = router;
