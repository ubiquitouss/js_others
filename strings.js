const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
console.log("B737"[0]);
console.log(airline.length);
console.log("B737".length);
console.log(airline.indexOf("r"));
console.log(airline.indexOf("Portugal"));
console.log(airline.lastIndexOf("r"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
//!in slice '4' is the start up point to slice
//!7 is the ending point

//extract the first word
console.log(airline.slice(0, airline.indexOf(" ")));
//extract the first word
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
//takes the values of last 2
console.log(airline.slice(1, -1));
//starts from the beginning. and cuts the final value

const checkMiddleSeat = function (seat) {
  //B or  E is the middle seat
  const s = seat.slice(-1);
  if (s === "B" || s == "E") console.log("you got the middle seat");
  else console.log("you got lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// Fix capitalization

const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//comparing emails

const email = "hello@ok.com";
const loginEmail = " Hello@Ok.com \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

//!all at once
const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);

//replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(console.log(announcement.replace("door", "gate")));
console.log(console.log(announcement.replace(/door/g, "gate")));
console.log(console.log(announcement.replaceAll("door", "gate")));

//Boolean

const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new airbus family");
}

console.log("a+very+nice+string".split("+"));
const [firstName, lastName] = "Tawkir Talukder".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

//to make  a name properly capitalize

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("tawkir talukder");

//padding
const message = "Go to gate 23";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log("tawkir".padStart(25, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(23625474584587));

//repeat

const message2 = "Bad weather .. All departures dalayed....";
console.log(message2.repeat(5));
//! the message will be shown 5 times

