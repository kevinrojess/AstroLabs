//  JS Exercise 4

// Part 1
// Use the appropriate string methods to capitalize 'city'
// Expected output: 'Dubai'
// var city = "dubai";
// Add your code below...

// console.log(city[0].toUpperCase() + city.slice(1));

// Part 2
// Create a solution to capitalize all the values in 'cities'
// Expected output:
// [
//     'Dubai',
//     'Mumbai',
//     'Chicago',
//     'Berlin',
//     'Manchester'
// ]

var cities = ["dubai", "mumbai", "chicago", "berlin", "manchester"];

// Add your code below...
// capitalize the first character in every string in the array cities?
for (var i = 1; i < cities.length; i++) {
  cities[i] = cities[i].charAt(0).toUpperCase();
}

cities[i] = cities[i].charAt(0).toUpperCase() + cities[i].substr(1);
console.log(cities[i]);
