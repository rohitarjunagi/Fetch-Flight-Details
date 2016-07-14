exports = module.exports = FlightSearch

var express = require('express');
var _ = require('lodash');
var util = require('util');
var request = require('request');
var fetchAirlineDetails = require('./FetchAirlineDetails');
var fetchAirportDetails = require('./FetchAirportDetails');

function FlightSearch() {

}

function searchAirlines(cb) {
  var airlineCode = new fetchAirlineDetails();
  airlineCode.callAirlinesApi(function(err, data) {
    if (err) {
      return cb(err);
    }
    cb(null, data);
  });
}

function searchAirportCodes(from, to, cb) {
  var codes = [];
  var getAirportCode = new fetchAirportDetails();
  getAirportCode.callAirportApi(from, function(err, fromPort) {
    if (err) {
      return cb(err);
    }
    if (fromPort.length > 1) {
      return cb(new Error('Please select an airport name from the below list for From location: ' + util.inspect(fromPort)));
    }
    if (fromPort.length == 0) {
      return cb(new Error('Invalid From location'));
    }
    codes.push(fromPort[0].airportCode);
    getAirportCode.callAirportApi(to, function(err, toPort) {
      if (err) {
        return cb(err);
      }
      if (toPort.length == 0) {
        return cb(new Error('Invalid To location'));
      }
      if (toPort.length > 1) {
        return cb(new Error('Please select an airport name from the below list for To location: ' + util.inspect(toPort)));
      }
      codes.push(toPort[0].airportCode);
      cb(null, codes);
    });
  });
}

FlightSearch.prototype.processFlights = function() {
  return function(req, res, next) {
    searchAirlines(function(err, airlines) {
      if (err) {
        return res.status(err.status || 400).send(err.message || 'Internal Server Error');
      }
      var flightsData = [];
      if (!checkParams(req.query)) {
        return res.status(400).send('request params not correct!!!!');
      }
      searchAirportCodes(req.query.from, req.query.to, function(err, data) {
        if (err) {
          return res.status(err.status || 400).send(err.message || 'Internal Server Error');
        }
        if (data.length === 0) {
          return res.status(400).send('No valid Airports returned');
        }
        searchFlightsData(airlines, data[0], data[1], req.query.date, flightsData, function(err) {
          if (err) {
            return res.status(err.status || 400).send(err.message || 'Internal Server Error');
          }
          res.set({
            'Content-Type': 'application/json'
          });
          res.status(200).send(flightsData);
        });
      });
    });
  }
}

function searchFlightsData(airlines, from, to, date, flightsData, cb) {
  if (airlines.length == 0) {
    return cb(null);
  }
  var airline = airlines.shift();
  var queryString = 'http://node.locomote.com/code-task/flight_search/' + airline.code + '?' + 'from=' + from + '&to=' + to + '&date=' + date;
  request(queryString, function(error, response, body) {
    if (error) {
      return cb(error);
    }
    if (response.statusCode !== 200) {
      return cb(new Error(body));
    }
    try {
      var flightDetails = JSON.parse(body);
      flightsData.push(flightDetails);
    } catch (err) {
      return cb(err);
    }
    searchFlightsData(airlines, from, to, date, flightsData, cb);
  });
}

function checkParams(queryParam) {
  if (!queryParam) {
    return false;
  }
  if (!queryParam.date) {
    return false;
  }
  if (!queryParam.from) {
    return false;
  }
  if (!queryParam.to) {
    return false;
  }
  return true;
}

/**
Function registers /flight_search route with express and
returns a router
*/
FlightSearch.prototype.setupRoutes = function() {
  router = express.Router();
  router.get('/flight_search', this.processFlights());
  return router;
}