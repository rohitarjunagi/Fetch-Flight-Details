exports = module.exports = FetchAirportDetails

var express = require('express');
var _ = require('lodash');
var util = require('util');
var request = require('request');

function FetchAirportDetails() {

}


FetchAirportDetails.prototype.getAirportDetails = function() {
  var self = this;
  return function(req, res, next) {
    var q = {};
    if (!req.query.q) {
      return res.status(400).send('Incorrect Query Parameter');
    }
    q = req.query.q;
    self.callAirportApi(q, function(err, data) {
      if (err) {
        return res.status(err.status || 400).send(err.message || 'Internal Server Error');
      }
      res.set({
        'Content-Type': 'application/json'
      });
      res.status(200).send(data);
    });
  }
}

FetchAirportDetails.prototype.callAirportApi = function(airport, cb) {
  request('http://node.locomote.com/code-task/airports?q=' + airport, function(error, response, body) {
    if (error) {
      return cb(error);
    }
    if (response.statusCode !== 200) {
      return cb(new Error(body));
    }
    try {
      var airportDetails = JSON.parse(body);
    } catch (err) {
      return cb(err);
    }
    cb(null, airportDetails);
  })
}

/**
Function registers /airports route with express and
returns a router
*/
FetchAirportDetails.prototype.setupRoutes = function() {
  var router = express.Router();
  router.get('/airports', this.getAirportDetails());
  return router;
}