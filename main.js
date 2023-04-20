let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;
let runnersAge = 18;

runnersAge > 18 ? (raceNumber = raceNumber + 1000) : raceNumber;

if ((runnersAge > 18) & (registeredEarly == true)) {
  console.log("Race at 9:30am. Your Race Nbr is " + raceNumber);
} else if ((runnersAge > 18) & (registeredEarly == false)) {
  console.log("Race at 11:00am. Your Race Nbr is " + raceNumber);
} else if (runnersAge == 18) {
  console.log("See registration desk");
} else {
  console.log(
    "Youth registrants run at 12:30 pm (regardless of registration). Your Race Nbr is " +
      raceNumber
  );
}
