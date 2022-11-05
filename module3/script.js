// 1. Built-In Functions
// --------------------------------------------

// alert("YOU HAVE A VIRUS!!!!");
// prompt("What is your name?");


// alert("Good Morning" + " " + "Mohammad" + "!");



// 2. Variable
// --------------------------------------------
//var username = prompt("What is your name?");

// var username = "John";
// username = "Doe";
// alert(username);


// var firstname = "Dany";
// alert("Good Morning" + " " + firstname + "!");


// alert("Line 1" + "\n" + "Line 2" + "\n" + "Line 3")



// 3. Variable Naming Rules
// --------------------------------------------
// 1. Must begin with lowercase letter
// 2. No special character except _
// 3. Do not name after reserved words
// 4. Use either camel case or snake case

// var myfavoritesongband = "Metallica";

// // Camel Case
// var myFavoriteSongBand = "Metallica";

// // Snake Case
// var my_favorite_song_band = "Metallica";




// 4. Control Statements
// --------------------------------------------

// 4.1 If/Else

// var price = 1000;
// var budget = 1500;

// if( price <= budget ) {
//     alert("Buy");
// } 
// else {
//     alert("Don't Buy");
// }


// if("5" == 5) {
//     alert("Yes")
// }


// iPhone14, S22, Pixel5
// 3500, 3200, 2900

// var userInput = prompt("Enter product name");

// if( userInput === "iPhone14" ) {
//     alert(3500);
// }
// else if( userInput === "S22" ) {
//     alert(3200);
// }
// else if( userInput === "Pixel5" ) {
//     alert(2900);
// }
// else {
//     alert("Product not available");
// }



// 4.2 While
// var number = 1;

// while( number < 11 ) {
//     console.log(number);
//     number++;
// }

// 4.3 For
// for (var currentNumber = 0; currentNumber <= 10;) {
//     alert(currentNumber);
// }



var cities =  [ 
    "Abu Dhabi",
    "Beijing",
    "Beirut",
    "Boston",
    "Cairo",
    "Mumbai"
];


for( var index = 0; index < 6; index++ ) {
    console.log( cities[index] ) ;
}





// 4.4 Switch





// 5. Operators
// --------------------------------------------
//      =               Assignment
//      <               Less than
//      >               Greater than
//      <=              Less than or equal
//      >=              Greater than or equal
//      ==              Comparison
//      ===             Strict comparison
//      !=              Not equal
//      !==             Strictly not equal
//      ||              OR
//      &&              AND
//      !               NOT
//      ...             Spread
//      +               Addition (or Concatenation)
//      -               Subtraction
//      /               Division
//      *               Multiplication
//      %               Modulu
//      ++
//      --
//      +=
//      -=
//      *=



// 6. Data Structures: Array
// --------------------------------------------

// var uae = "Abu Dhabi";
// var uk = "London";
// var germany = "Berlin";

// var cities = [
//     "Berlin",           // 0
//     "London",           // 1
// ];


// Retrieving value from array 
// console.log(cities[2]);


// Array methods:
// 

// .push()                                  Adds element to end
// .pop()                                   Removes elements from end 
// .unshift()                               Adds element to start
// .shift()                                 Removes elements from start
// .splice(index, noDelete, itemsAdd)       Add or remove element from anywhere


// cities.push('Mumbai');
// console.log(cities);

// cities.pop();


// cities.unshift('Abu Dhabi');
// console.log(cities);

// cities.shift();


// // Adding with splice
// cities.splice(2, 0, 'Cairo');
// console.log(cities);

// // Removing with splice
// cities.splice(3,1);
// console.log(cities);

// // Replace with splice
// cities.splice(1,1,'Boston');
// console.log(cities);





// 7. Data Types
// --------------------------------------------
// Strings
// Numbers
// Array
// Object
// Boolean
// Null
// Undefined
// Promise
// NaN
// Date



// 8. Data Structures: Objects
// --------------------------------------------


// Array
// var cities = [
//     "Abu Dhabi",        // 0 
//     "Berlin",           // 1
//     "London",           // 2
//     "Mumbai"            // 3
// ];

// cities[3];



// var cities = {
//     0: "Abu Dhabi",        // 0 
//     1: "Berlin",           // 1
//     2: "London",           // 2
//     3: "Mumbai"            // 3
// };





// // Object
// var cities_obj = {
//     "UAE": "Abu Dhabi",     // UAE
//     "Germany": "Berlin",    // Germany
//     "UK": "London",         // UK
//     "India": "Mumbai"       // India
// };

// // square-bracket
// cities_obj["India"]

// // dot-syntax
// cities_obj.India






// var airports = [

//     ["Abu Dhabi"    , "UAE"     , "AUH",    ""],
//     ["Dubai"        , "UAE"     , "DXB",    "DWC"],
//     ["Berlin"       , "GE"      , "BER",    ""],

// ];

// airports[0][2]  // AUH
// airports[0][0]  // Abu Dhabi
// airports[1][1]  // UAE


// var users = {
//     "u001": {
//         "username": "johndoe1",
//         "likedin": "....",
//         "dob": "...",
//         "preferences": ['dark', 'font size'],
//         "followers": 39382
//     },
//     "u002": {
//         "username": "pizza81932037092",
//     }
// }


// users['u001']['preferences'][0]




// var countries = {
//     'UAE': 'Abu Dhabi',
//     'UK': 'London',
//     'India': 'New Delhi'
// }

// // Adding element to object
// countries['Turkey'] = 'Amsterdam';




// var countries = {
//     'UAE': 'Abu Dhabi',
//     'UK': 'London',
//     'India': 'New Delhi',
//     'Turkey': 'Amsterdam'
// }

// // Reassign value
// countries['Turkey'] = 'Ankara';



// var countries = {
//     'UAE': 'Abu Dhabi',
//     'UK': 'London',
//     'India': 'New Delhi',
//     'Turkey': 'Ankara',
//     'iPhone14': 'Apple'
// }

// // Deleting element from object
// delete countries['iPhone14']




// 9. Function
// --------------------------------------------

// function coffeeMachine(beanOption, drinkOption, milkOption, tempOption) {
//     return "your drink"
// }


// var order1 = coffeeMachine('light roast', 'americano', 'dairy', 'hot');
// var order2 = coffeeMachine('dark roast', 'latter', 'dairy', 'hot');


// function registerUser() {
//     var firstName = prompt("What is your first name?");
//     var lastName = prompt("What is your last name?");
//     var email = prompt("What is your email?");
//     var phone = prompt("What is your phone number?");

//     alert(
//         "Thank you for registering!" + "\n" +
//         "Your first name: " + firstName + "\n" +
//         "Your last name:" + lastName + "\n" +
//         "Your email:" + email + "\n" +
//         "Your phone: " + phone
//     );
// }





// 10. Strings
// --------------------------------------------
var alphabet = 'ABCDE';


// var alphabet = {
//     0: 'A',
//     1: 'B',
//     2: 'C',
//     3: 'D',
//     4: 'E',
//     'length': 5
// }



// String methods
// https://www.w3schools.com/js/js_string_methods.asp
// .toUpperCase()
// .toLowerCase()
// .slice()
// .strip()
// .parseInt()
// .indexOf


// Change letter casing
alphabet = 'abcde';
alphabet.toUpperCase() // 'ABCDEF'

// Get a slice of a string
var address = 'AstroLabs, Cluster R, JLT, Dubai, UAE';
address.slice(0,9)      // 'AstroLabs'

var someName = 'AstroLabs';
someName.slice(5)       // 'Labs'


// Get index of the first matching character
alphabet = 'acbde';
alphabet.indexOf('e')

// Split string into an array
var theDate = '04/11/2022';


// Join array into a string
address = ['AstroLabs', 'Cluster R', 'JLT', 'Dubai', 'UAE']
address.join(', ') // "AstroLabs, Cluster R, JLT, Dubai, UAE"