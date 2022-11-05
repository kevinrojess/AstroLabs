/*
     JavaScript Assignment A
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var cities = [
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

var countries = [
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
// for(i=0; i<cities.length; i++){

// };

// 2. Inside the for loop, console.log() the country for that city (e.g, "Abu Dhabi, UAE")
// Hint: use a counter variable to access both 'cities' and 'countries'
for (let i = 0; i < cities.length; i++) {
  let j = i + 1;
  if (cities[i] === "???" || countries[i] === "???") {
    i++;
  }
  // console.log(j + ". " + cities[i] + ", " + countries[i]);
  j++;
}

// 3. If the name of a city is missing (i.e there is '???'), use console.log("Oops!")

// NOTE: For 2 and 3, use if/else. There should be no '???' in the console!

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "???") {
    console.log("Oops!");
    cities.splice(i, 1);
  }
  console.log(i + 1 + ". " + cities[i]);
}
