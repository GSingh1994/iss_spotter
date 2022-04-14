const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  fetchCoordsByIP(ip, (error, coordinates) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    fetchISSFlyOverTimes(coordinates, (error, data) => {
      if (error) {
        console.log("It didn't work!", error);
        return;
      }
      console.log(data);
    });
  });
});
