const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => printPasstimes(passTimes))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printPasstimes = (passTimes) => {
  passTimes.map((time) => {
    console.log(`Next pass at ${new Date(time.risetime)} for ${time.duration} seconds!`);
  });
};
