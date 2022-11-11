const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('payment', { id: req.params.id });
});

router.post('/', (req, res) => {
  res.render('success')
})

module.exports = router;
