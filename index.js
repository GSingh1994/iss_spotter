const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP();

const ip = '50.71.209.90';

fetchCoordsByIP(ip, (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log(coordinates);
});
