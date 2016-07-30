var express = require('express');
var router = express.Router();
var parkingLots = require('../datasets/parking_lots.json');
var parkingDisabled = require('../datasets/parking_disabled.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Living Sydney' });
});

router.get('/parking/lots', function(req, res, next) {
  res.status(200).json(parkingLots);
});

router.get('/parking/disabled', function(req, res, next) {
  res.status(200).json(parkingDisabled);
});

module.exports = router;
