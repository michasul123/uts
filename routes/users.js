const express = require('express');
const router = express.Router();

router.get('/:id', function (req, res, next) {
  res.json({ username: 'dudung' });
});

router.post('/login', (req, res) => {
  res.json({ succes: true });
});

router.post('/register', (req, res) => {
  res.json({ succes: true });
})

module.exports = router;
