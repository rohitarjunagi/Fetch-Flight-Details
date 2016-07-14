var express = require('express');
var _ = require('lodash');
var util = require('util');
var request = require('request');

exports = module.exports = FetchAirlineDetails


function FetchAirlineDetails() {

}

FetchAirlineDetails.prototype.getAirlineDetails = function() {
  var self = this;
  return function(req, res, next) {
    self.callAirlinesApi(function(err, data) {
      if (err) {
        res.status(400).send(err.message);
      }
      res.set({
        'Content-Type': 'application/json'
      });
      res.status(200).send(data);
    })
  }
}

FetchAirlineDetails.prototype.callAirlinesApi = function(cb) {
  request('http://node.locomote.com/code-task/airlines', function(error, response, body) {
    if (error || response.statusCode !== 200) {
      return cb(error);
    }
    try {
      var airlinesData = JSON.parse(body);
    } catch (err) {
      return cb(err);
    }
    cb(null, airlinesData);
  });
}

/**
Function registers /airlines route with express and
returns a router
*/
FetchAirlineDetails.prototype.setupRoutes = function() {
  var router = express.Router();
  router.get('/airlines', this.getAirlineDetails(), handleErrors);
  return router;
}