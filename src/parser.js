'use strict';
const request = require('request');
const cheerio = require('cheerio');
const MISSING_TRAIN_RESPONSE = 'no existe';

function onGet(req, res) {
  const URL = _buildURI(req);
  request(URL, function(error, response, body) {
    if (error) {
      return res.send(500);
    }
    if (body.includes(MISSING_TRAIN_RESPONSE)) {
      return res.send(404);
    }
    res.json(_parseTravels(body));
  });
}

/** Build a renfe request from our request parameters data */
function _buildURI(req) {
  const baseUrl = 'http://horarios.renfe.com/HIRRenfeWeb/buscar.do?';
  const date = new Date(Date.parse(req.params.date));
  const from = req.params.from;
  const to = req.params.to;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const uri = `${baseUrl}O=${from}&D=${to}&AF=${year}&MF=${month}&DF=${day}&SF=6&ID=s`;
  return uri;
}

/** Return a json object with all the travel information */
function _parseTravels(body) {
  const travels = _parseResponseBody(body);
  let parsedTravels = [];
  for (let i = 0; i < travels.length; i++) {
    parsedTravels.push(_parseTravel(travels.eq(i)));
  }
  return parsedTravels;
}

/** Load the renfe response into a cheerio object for data parsing  */
function _parseResponseBody(body) {
  let $ = cheerio.load(body, {
    normalizeWhitespace: true
  });
  let table = $('#row tbody');
  return table.children();
}

/** Create a json object from the given data which represents a travel */
function _parseTravel(rawTravelData) {
  let PRICE_REGEX = /\d+(,\d{1,2})?/;
  let parsedData = {
    train: rawTravelData.children().eq(0).text().trim(),
    departure: rawTravelData.children().eq(1).text().trim(),
    arrival: rawTravelData.children().eq(2).text().trim(),
    price: rawTravelData.children().eq(4).text().match(PRICE_REGEX)[0].trim(),
  };
  return parsedData;
}

module.exports = onGet;
