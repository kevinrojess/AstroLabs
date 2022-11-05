/*
     JavaScript Assignment A
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

const cities = [
  "Abu Dhabi",
  "Abuja",
  "Cairo",
  "???",
  "Amman",
  "Islamabad",
  "Tokyo",
  "Beirut",
  "???",
  "Ottowa",
  "New Delhi",
  "Brasília",
];

const countries = [
  "UAE",
  "Nigeria",
  "Egypt",
  "???",
  "Jordan",
  "Pakistan",
  "Japan",
  "Lebanon",
  "???",
  "Canada",
  "India",
  "Brazil",
];

/******** Answers Section ********/

// 1. Create a for loop to iterate over 'cities'
for (let i = 0; i < cities.length; i++) {
  console.log(i + 1 + ". " + cities[i]);
}

console.log("---------------------------");

// 2. Inside the for loop, console.log() the country for that city (e.g, "Abu Dhabi, UAE")
// Hint: use a counter constiable to access both 'cities' and 'countries'
for (let i = 0; i < cities.length; i++) {
  let j = i + 1;
  if (cities[i] === "???" || countries[i] === "???") {
    i++;
  }
  console.log(j + ". " + cities[i] + ", " + countries[i]);
  j++;
}

console.log("------------------");

// 3. If the name of a city is missing (i.e there is '???'), use console.log("Oops!")

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "???") {
    console.log("Oops!");
    cities.splice(i, 1);
  }
  console.log(i + 1 + ". " + cities[i]);
}
// NOTE: For 2 and 3, use if/else. There should be no '???' in the console!

//------------------------------------------------------------------------------//

// METHOD: 1
// for (let i = 0; i < cities.length; i++) {
//   if (cities[i] === "???") {
//     console.log("Oops!");
//   } else {
//     console.log(`${i + 1}. ${cities[i]}, ${countries[i]}`);
//   }
// }
console.log("-----------");

// METHOD: 2
for (let i = 0; i < countries.length; i++) {
  if (cities[i] === "???") {
    console.log("Oops");
  } else {
    console.log(cities[i], ": ", countries[i]);
  }
}

// METHOD: 3
// cities.forEach((city, i) => {
//   if (city === "???") {
//     console.log("Oops!");
//   } else {
//     console.log(`${i + 1}. ${city}, ${countries[i]}`);
//   }
// });

//METHOD: 4
// for (const [i, city] of cities.entries()) {
//   if (city === "???") {
//     console.log("Oops!");
//   } else {
//     console.log(`${i + 1}. ${city}, ${countries[i]}`);
//   }
// }

// METHOD: 5 (ADVANCED)             //Doesn't print Oops..
// const result = cities.reduce((str, city, i) => {
//   if (city === "???") return str;
//   return `${str}${i + 1}. ${city}, ${countries[i]}\n`;
// }, "");

// console.log(result);

// METHOD: 6
// for (const city of cities) {
//   if (city === "???") {
//     console.log("Oops!");
//   } else {
//     const i = cities.indexOf(city);
//     console.log(`${i + 1}. ${city}, ${countries[i]}`);
//   }
// }

//METHOD: 7
// const data = Array.from(
//   { length: Math.max(cities.length, countries.length) },
//   (v, i) => ({
//     country: countries[i] || "",
//     city: cities[i] || "",
//   })
// );
// console.log(data);
