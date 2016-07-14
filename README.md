# Fetch-Flight-Details
An API that fetches flight details and displays it to the user


## Running Locally

```sh
$ git clone https://github.com/rohitarjunagi/Fetch-Flight-Details.git # or clone your own fork
$ cd Fetch-Flight-Details
$ npm install
$ npm start
```

## Documentation

To use the app, send GET requests to the following URLs:
-  Send GET Request to : (http://localhost:3000/airlines) to get a list of airlines

Here is the sample Response:

```json
[
  {
    "code": "SU",
    "name": "Aeroflot"
  },
  {
    "code": "MU",
    "name": "China Eastern"
  },
  {
    "code": "EK",
    "name": "Emirates"
  },
  {
    "code": "KE",
    "name": "Korean Air lines"
  },
  {
    "code": "QF",
    "name": "Qantas"
  },
  {
    "code": "SQ",
    "name": "Singapore Airlines"
  }
]
```
- Send GET request to : (http://localhost:3000/airports?q=New York)
  where query string is a destination for which a list of airports is returned

  Here is the sample Response :

```json

[
  {
    "airportCode": "JFK",
    "airportName": "John F Kennedy Intl",
    "cityCode": "NYC",
    "cityName": "New York",
    "countryCode": "US",
    "countryName": "United States",
    "latitude": 40.639751,
    "longitude": -73.778925,
    "stateCode": "NY",
    "timeZone": "America\/New_York"
  },
  {
    "airportCode": "EWR",
    "airportName": "Newark Liberty Intl Arpt",
    "cityCode": "NYC",
    "cityName": "New York",
    "countryCode": "US",
    "countryName": "United States",
    "latitude": 40.6925,
    "longitude": -74.168667,
    "stateCode": "NJ",
    "timeZone": "America\/New_York"
  },
  {
    "airportCode": "LGA",
    "airportName": "New York La Guardia Arpt",
    "cityCode": "NYC",
    "cityName": "New York",
    "countryCode": "US",
    "countryName": "United States",
    "latitude": 40.777245,
    "longitude": -73.872608,
    "stateCode": "NY",
    "timeZone": "America\/New_York"
  },
  {
    "airportCode": "SWF",
    "airportName": "New York Stewart International Arpt",
    "cityCode": "SWF",
    "cityName": "Newburgh",
    "countryCode": "US",
    "countryName": "United States",
    "latitude": 41.504094,
    "longitude": -74.104839,
    "stateCode": "NY",
    "timeZone": "America\/New_York"
  }
]

```
- Send GET request to (http://localhost:3000/flight_search?date=2016-09-02&from=Kingsford Smith&to=John F Kennedy Intl)
  Where date should be a valid date, from and to should be valid destinations

  Here is the sample response: 

  ```json
  [
  [
    {
      "key": "U1U2NjcgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SU",
        "name": "Aeroflot"
      },
      "flightNum": 667,
      "start": {
        "dateTime": "2016-09-02T17:17:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T23:18:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2236.28
    },
    {
      "key": "U1UzNTggMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SU",
        "name": "Aeroflot"
      },
      "flightNum": 358,
      "start": {
        "dateTime": "2016-09-03T09:58:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T15:59:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2202.71
    },
    {
      "key": "U1U1NjggMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SU",
        "name": "Aeroflot"
      },
      "flightNum": 568,
      "start": {
        "dateTime": "2016-09-03T08:56:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T14:57:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2077.27
    },
    {
      "key": "U1UxNTAgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SU",
        "name": "Aeroflot"
      },
      "flightNum": 150,
      "start": {
        "dateTime": "2016-09-03T06:52:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T12:53:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "380",
        "shortName": "Airbus A380",
        "fullName": "Airbus Industrie A380",
        "manufacturer": "Airbus",
        "model": "A380"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1480.9
    },
    {
      "key": "U1U5NDIgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SU",
        "name": "Aeroflot"
      },
      "flightNum": 942,
      "start": {
        "dateTime": "2016-09-03T09:58:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T15:59:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "380",
        "shortName": "Airbus A380",
        "fullName": "Airbus Industrie A380",
        "manufacturer": "Airbus",
        "model": "A380"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2362.32
    },
    {
      "key": "U1U4MTQgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SU",
        "name": "Aeroflot"
      },
      "flightNum": 814,
      "start": {
        "dateTime": "2016-09-03T05:48:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T11:49:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1546.98
    },
    {
      "key": "U1U2NiAxNDcyNzc0NDAwMDAw",
      "airline": {
        "code": "SU",
        "name": "Aeroflot"
      },
      "flightNum": 66,
      "start": {
        "dateTime": "2016-09-03T08:56:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T14:57:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2029.33
    },
    {
      "key": "U1UxOTYgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SU",
        "name": "Aeroflot"
      },
      "flightNum": 196,
      "start": {
        "dateTime": "2016-09-02T11:04:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T17:05:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1604.02
    },
    {
      "key": "U1U4MDMgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SU",
        "name": "Aeroflot"
      },
      "flightNum": 803,
      "start": {
        "dateTime": "2016-09-02T23:34:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T05:35:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1503.63
    }
  ],
  [
    {
      "key": "TVU0OTIgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "MU",
        "name": "China Eastern"
      },
      "flightNum": 492,
      "start": {
        "dateTime": "2016-09-03T04:47:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T10:48:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1324.84
    },
    {
      "key": "TVUxNzEgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "MU",
        "name": "China Eastern"
      },
      "flightNum": 171,
      "start": {
        "dateTime": "2016-09-02T18:20:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T00:21:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1306.83
    },
    {
      "key": "TVU1OTIgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "MU",
        "name": "China Eastern"
      },
      "flightNum": 592,
      "start": {
        "dateTime": "2016-09-02T19:22:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T01:23:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1969.23
    },
    {
      "key": "TVU0MzEgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "MU",
        "name": "China Eastern"
      },
      "flightNum": 431,
      "start": {
        "dateTime": "2016-09-02T19:23:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T01:24:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1410.79
    },
    {
      "key": "TVUyMjggMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "MU",
        "name": "China Eastern"
      },
      "flightNum": 228,
      "start": {
        "dateTime": "2016-09-03T03:43:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T09:44:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "380",
        "shortName": "Airbus A380",
        "fullName": "Airbus Industrie A380",
        "manufacturer": "Airbus",
        "model": "A380"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1620.65
    },
    {
      "key": "TVU3MjYgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "MU",
        "name": "China Eastern"
      },
      "flightNum": 726,
      "start": {
        "dateTime": "2016-09-03T01:38:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T07:39:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1534.7
    },
    {
      "key": "TVU1NTAgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "MU",
        "name": "China Eastern"
      },
      "flightNum": 550,
      "start": {
        "dateTime": "2016-09-03T02:41:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T08:42:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1681.2
    },
    {
      "key": "TVU5ODcgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "MU",
        "name": "China Eastern"
      },
      "flightNum": 987,
      "start": {
        "dateTime": "2016-09-02T20:26:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T02:27:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1923.29
    },
    {
      "key": "TVUzMDAgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "MU",
        "name": "China Eastern"
      },
      "flightNum": 300,
      "start": {
        "dateTime": "2016-09-02T22:31:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T04:32:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "380",
        "shortName": "Airbus A380",
        "fullName": "Airbus Industrie A380",
        "manufacturer": "Airbus",
        "model": "A380"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2051.62
    }
  ],
  [
    {
      "key": "RUsyNzkgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "EK",
        "name": "Emirates"
      },
      "flightNum": 279,
      "start": {
        "dateTime": "2016-09-03T02:40:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T08:41:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3385.91
    },
    {
      "key": "RUsyNDYgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "EK",
        "name": "Emirates"
      },
      "flightNum": 246,
      "start": {
        "dateTime": "2016-09-03T03:43:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T09:44:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3016.06
    },
    {
      "key": "RUs0MTkgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "EK",
        "name": "Emirates"
      },
      "flightNum": 419,
      "start": {
        "dateTime": "2016-09-03T06:50:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T12:51:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2545.51
    },
    {
      "key": "RUs0MTcgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "EK",
        "name": "Emirates"
      },
      "flightNum": 417,
      "start": {
        "dateTime": "2016-09-03T05:49:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T11:50:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2568.76
    },
    {
      "key": "RUs0MjMgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "EK",
        "name": "Emirates"
      },
      "flightNum": 423,
      "start": {
        "dateTime": "2016-09-03T08:56:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T14:57:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2500.66
    },
    {
      "key": "RUsyODAgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "EK",
        "name": "Emirates"
      },
      "flightNum": 280,
      "start": {
        "dateTime": "2016-09-02T16:14:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T22:15:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3394.4
    },
    {
      "key": "RUs0NDkgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "EK",
        "name": "Emirates"
      },
      "flightNum": 449,
      "start": {
        "dateTime": "2016-09-02T19:23:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T01:24:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2279.34
    },
    {
      "key": "RUs2NzQgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "EK",
        "name": "Emirates"
      },
      "flightNum": 674,
      "start": {
        "dateTime": "2016-09-03T09:59:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T16:00:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3284.98
    },
    {
      "key": "RUs5NDcgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "EK",
        "name": "Emirates"
      },
      "flightNum": 947,
      "start": {
        "dateTime": "2016-09-03T08:56:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T14:57:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3540.81
    }
  ],
  [
    {
      "key": "S0UxNDcgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "KE",
        "name": "Korean Air lines"
      },
      "flightNum": 147,
      "start": {
        "dateTime": "2016-09-03T03:43:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T09:44:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1949.64
    },
    {
      "key": "S0U1NDIgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "KE",
        "name": "Korean Air lines"
      },
      "flightNum": 542,
      "start": {
        "dateTime": "2016-09-03T09:59:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T16:00:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2429.14
    },
    {
      "key": "S0UyOTYgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "KE",
        "name": "Korean Air lines"
      },
      "flightNum": 296,
      "start": {
        "dateTime": "2016-09-02T22:30:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T04:31:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3062.66
    },
    {
      "key": "S0U0NDkgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "KE",
        "name": "Korean Air lines"
      },
      "flightNum": 449,
      "start": {
        "dateTime": "2016-09-02T19:23:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T01:24:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1994.43
    },
    {
      "key": "S0U2NDIgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "KE",
        "name": "Korean Air lines"
      },
      "flightNum": 642,
      "start": {
        "dateTime": "2016-09-03T05:48:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T11:49:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3078.95
    },
    {
      "key": "S0UxNzkgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "KE",
        "name": "Korean Air lines"
      },
      "flightNum": 179,
      "start": {
        "dateTime": "2016-09-02T15:13:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T21:14:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 1992.84
    },
    {
      "key": "S0U4NzEgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "KE",
        "name": "Korean Air lines"
      },
      "flightNum": 871,
      "start": {
        "dateTime": "2016-09-03T00:35:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T06:36:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2601.06
    },
    {
      "key": "S0U2NjIgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "KE",
        "name": "Korean Air lines"
      },
      "flightNum": 662,
      "start": {
        "dateTime": "2016-09-03T06:50:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T12:51:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2973.59
    },
    {
      "key": "S0U0OCAxNDcyNzc0NDAwMDAw",
      "airline": {
        "code": "KE",
        "name": "Korean Air lines"
      },
      "flightNum": 48,
      "start": {
        "dateTime": "2016-09-03T01:39:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T07:40:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2852.65
    }
  ],
  [
    {
      "key": "UUY4MSAxNDcyNzc0NDAwMDAw",
      "airline": {
        "code": "QF",
        "name": "Qantas"
      },
      "flightNum": 81,
      "start": {
        "dateTime": "2016-09-02T13:07:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T19:08:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2727.83
    },
    {
      "key": "UUY5ODcgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "QF",
        "name": "Qantas"
      },
      "flightNum": 987,
      "start": {
        "dateTime": "2016-09-03T07:53:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T13:54:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3159.7
    },
    {
      "key": "UUYzNTkgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "QF",
        "name": "Qantas"
      },
      "flightNum": 359,
      "start": {
        "dateTime": "2016-09-03T09:58:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T15:59:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3156.53
    },
    {
      "key": "UUY4NDcgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "QF",
        "name": "Qantas"
      },
      "flightNum": 847,
      "start": {
        "dateTime": "2016-09-03T00:36:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T06:37:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "380",
        "shortName": "Airbus A380",
        "fullName": "Airbus Industrie A380",
        "manufacturer": "Airbus",
        "model": "A380"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2547.56
    },
    {
      "key": "UUYyMDAgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "QF",
        "name": "Qantas"
      },
      "flightNum": 200,
      "start": {
        "dateTime": "2016-09-02T21:28:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T03:29:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "KAN",
        "shortName": "Skippy",
        "fullName": "Kangaroo",
        "manufacturer": "Australia",
        "model": "Red"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2342.96
    },
    {
      "key": "UUY5NTcgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "QF",
        "name": "Qantas"
      },
      "flightNum": 957,
      "start": {
        "dateTime": "2016-09-02T23:34:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T05:35:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3369.21
    },
    {
      "key": "UUY4NzYgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "QF",
        "name": "Qantas"
      },
      "flightNum": 876,
      "start": {
        "dateTime": "2016-09-02T11:04:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T17:05:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2911.27
    },
    {
      "key": "UUY0OTAgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "QF",
        "name": "Qantas"
      },
      "flightNum": 490,
      "start": {
        "dateTime": "2016-09-02T21:27:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T03:28:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2166.72
    },
    {
      "key": "UUYyMjcgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "QF",
        "name": "Qantas"
      },
      "flightNum": 227,
      "start": {
        "dateTime": "2016-09-03T09:58:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T15:59:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2649.93
    }
  ],
  [
    {
      "key": "U1EzNjggMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SQ",
        "name": "Singapore Airlines"
      },
      "flightNum": 368,
      "start": {
        "dateTime": "2016-09-03T09:58:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T15:59:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "380",
        "shortName": "Airbus A380",
        "fullName": "Airbus Industrie A380",
        "manufacturer": "Airbus",
        "model": "A380"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2927.96
    },
    {
      "key": "U1ExMTQgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SQ",
        "name": "Singapore Airlines"
      },
      "flightNum": 114,
      "start": {
        "dateTime": "2016-09-03T08:56:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T14:57:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2242.56
    },
    {
      "key": "U1EyNTYgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SQ",
        "name": "Singapore Airlines"
      },
      "flightNum": 256,
      "start": {
        "dateTime": "2016-09-02T23:34:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T05:35:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2880.63
    },
    {
      "key": "U1E4MyAxNDcyNzc0NDAwMDAw",
      "airline": {
        "code": "SQ",
        "name": "Singapore Airlines"
      },
      "flightNum": 83,
      "start": {
        "dateTime": "2016-09-03T03:43:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T09:44:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "333",
        "shortName": "Airbus A330-300",
        "fullName": "Airbus Industrie A330-300",
        "manufacturer": "Airbus",
        "model": "A330-300"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2584.93
    },
    {
      "key": "U1E2ODEgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SQ",
        "name": "Singapore Airlines"
      },
      "flightNum": 681,
      "start": {
        "dateTime": "2016-09-02T16:16:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T22:17:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "74H",
        "shortName": "Boeing 747-8",
        "fullName": "Boeing 747-8",
        "manufacturer": "Boeing",
        "model": "747-8 Intercontinental"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2940.31
    },
    {
      "key": "U1E5ODIgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SQ",
        "name": "Singapore Airlines"
      },
      "flightNum": 982,
      "start": {
        "dateTime": "2016-09-02T17:18:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T23:19:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "380",
        "shortName": "Airbus A380",
        "fullName": "Airbus Industrie A380",
        "manufacturer": "Airbus",
        "model": "A380"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3067.67
    },
    {
      "key": "U1EyNDEgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SQ",
        "name": "Singapore Airlines"
      },
      "flightNum": 241,
      "start": {
        "dateTime": "2016-09-02T12:06:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T18:07:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "380",
        "shortName": "Airbus A380",
        "fullName": "Airbus Industrie A380",
        "manufacturer": "Airbus",
        "model": "A380"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 2704.6
    },
    {
      "key": "U1E5MzUgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SQ",
        "name": "Singapore Airlines"
      },
      "flightNum": 935,
      "start": {
        "dateTime": "2016-09-02T14:11:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-02T20:12:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "380",
        "shortName": "Airbus A380",
        "fullName": "Airbus Industrie A380",
        "manufacturer": "Airbus",
        "model": "A380"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3241.44
    },
    {
      "key": "U1EyNzUgMTQ3Mjc3NDQwMDAwMA==",
      "airline": {
        "code": "SQ",
        "name": "Singapore Airlines"
      },
      "flightNum": 275,
      "start": {
        "dateTime": "2016-09-02T20:26:00+10:00",
        "airportCode": "SYD",
        "airportName": "Kingsford Smith",
        "cityCode": "SYD",
        "cityName": "Sydney",
        "countryCode": "AU",
        "countryName": "Australia",
        "latitude": -33.946111,
        "longitude": 151.177222,
        "stateCode": "NS",
        "timeZone": "Australia\/Sydney"
      },
      "finish": {
        "dateTime": "2016-09-03T02:27:00-04:00",
        "airportCode": "JFK",
        "airportName": "John F Kennedy Intl",
        "cityCode": "NYC",
        "cityName": "New York",
        "countryCode": "US",
        "countryName": "United States",
        "latitude": 40.639751,
        "longitude": -73.778925,
        "stateCode": "NY",
        "timeZone": "America\/New_York"
      },
      "plane": {
        "code": "789",
        "shortName": "Boeing 787-9",
        "fullName": "Boeing 787-9 Dreamliner",
        "manufacturer": "Boeing",
        "model": "787-9"
      },
      "distance": 16014,
      "durationMin": 1201,
      "price": 3070.8
    }
  ]
]

  ```