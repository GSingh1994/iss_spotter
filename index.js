const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  passTimes.map((time) => {
    console.log(`Next pass at ${new Date(time.risetime)} for ${time.duration} seconds!`);
  });
});
