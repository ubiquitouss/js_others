"use strict";
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
//!enhanced object literals
const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [`day-${2 + 4}`]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours,
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery(starterIndex, mainIndex, time, address) {
      console.log(
        `Order received! ${this.starterMenu[sterterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
    },

    orderPast(ing1, ing2, ing3) {
      console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    },
  };

//* Rest Operator

//!SPREAD BECAUSE THE RIGHT SIDE OF
// const arr = [1, 2, ...[3, 4]];

//!REST, BECAUSE THE LEFT SIDE OF
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherFood);
//!rest elements must be the last elements
//!pizza and risotto will be different and the otherFood will be as one with the other foods

//for objects

// const { thu, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

if (restaurant.openingHours && restaurant.openingHours.month)
  console.log(restaurant.openingHours.mon.open);
//with optional chaining
console.log(restaurant.openingHours.mon?.open);
//or
console.log(restaurant.openingHours?.mon?.open);
//! we are checking for both if they are available

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  console.log(day);
  restaurant.openingHours[day];
  const open = restaurant.openingHours[day]?.open ?? "closed";
  // const open = restaurant.openingHours[day]?.open || "closed";
  console.log(`On {day}, we open at ${open}`);
}
//* we can also call it for methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

//* arrays

const users = [{ name: "tawkir", email: "buki@yahoo.com" }];
console.log(users[0]?.name ?? "User does not exist");
if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

//property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;

for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}

//property VALUES
const values = Object.values(openingHours);
console.log(values);

//loop over entire objects

const entries = Object.keys(openingHours);
console.log(entries);
//! we can loop over it
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(menu);

for (const item of menu.entries()) {
  console.log(item);
}
console.log([...menu.entries()]);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

const question = new Map([
  ["question", "What is the best programming language in the whole world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try again"],
]);

console.log(question);

//!convert object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}

// const answer = Number(prompt("your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));
//!question.get("correct")= true
//!question.get(true)="correct"

//convert map to array
console.log(...question);
console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
