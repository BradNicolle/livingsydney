var express = require('express');
var router = express.Router();
var parkingLots = require('../datasets/parking_lots.json');
var parkingDisabled = require('../datasets/parking_disabled.json');

var redis = require('redis'),
    client = redis.createClient();
var _ = require('lodash');

var proximity = require('geo-proximity').initialize(client)

var parkingLocations = _.map(parkingDisabled, function (parking) {
  return [parking.X_Lon, parking.Y_Lat, parking.Street];
});

proximity.addLocations(parkingLocations, function(err, reply){
  if(err) console.error(err)
  else console.log('added locations:', reply)
});

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

router.post('/parking/nearby', function(req, res, next) {
  // look for all points within radius m of Toronto.
  proximity.nearby(req.params.lat, req.params.lng, req.params.radius, function(err, parkingLocations){
    if(err) console.error(err)
    else console.log('nearby locations:', locations)
  });
  res.status(200).json(locations);
});

module.exports = router;
