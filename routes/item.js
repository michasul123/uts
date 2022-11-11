const express = require('express');
const router = express.Router();
const items = [
  { id: 111, name: 'bibit lele betina', harga: 1000, image: '/images/betina.webp' },
  { id: 222, name: 'bibit lele jantan', harga: 1000, image: '/images/jantan.webp' },
  { id: 333, name: 'pelet lele', harga: 5000, image: '/images/pelet.webp' },
]

router.get('/:id', function (req, res, next) {
  const item = items.find(item => item.id == req.params.id);
  res.render('detail', { item });
});

router.get('/i/:id', (req, res) => {
  const item = items.find(item => item.id == req.params.id);
  res.json(item);
})

router.put('/', (req, res) => {
  res.json({ succes: true });
})

module.exports = router;
