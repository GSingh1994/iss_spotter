const request = require('request');

const ipifyApi = 'https://api.ipify.org/?format=json';

const fetchMyIP = (callback) => {
  request(ipifyApi, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    callback(error, data.ip);
  });
};

const key = '63646cd0-bc33-11ec-9451-c3c5a65bf186';

const fetchCoordsByIP = (ip, callback) => {
  request(`https://api.freegeoip.app/json/${ip}?apikey=${key}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);

    callback(error, { latitude, longitude });
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
