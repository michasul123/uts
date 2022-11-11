var express = require('express');
var router = express.Router();
const items = [
  { id: 111, name: 'bibit lele betina', harga: 1000, image: '/images/betina.webp' },
  { id: 222, name: 'bibit lele jantan', harga: 1000, image: '/images/jantan.webp' },
  { id: 333, name: 'pelet lele', harga: 5000, image: '/images/pelet.webp' },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', items });
});

module.exports = router;
