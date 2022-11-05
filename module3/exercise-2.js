// JS Exercise 2

// var cart = ["T-Shirt", "iPhone 14", "Laptop Stand", "USB-C Cable", "iPhone 6"];
// // ADD YOUR SOLUTION AFTER THIS LINE
// // DO NOT CHANGE CODE ABOVE

// // // 1. Use console.log() to see ALL the values of the cart (no for loop needed)

// console.log(cart);
// // // // 2. Use console.log() to see the last value in the cart

// console.log(cart[4]);
// // // // 3. Remove the last element from the array

// cart.pop();
// console.log(cart);
// // // // 4. Add 'iPhone 14 Charger' to the START of the cart

// cart.unshift("iPhone 14 Charger");
// console.log(cart);
// // // // 5. Use .splice() to replace the 'USB-C Cable' with 'iPhone Cable'.

// cart.splice(4, 1, "iPhone Cable");
// console.log(cart);

// 6. BONUS step
let total = 0;

const prices = [75, 3500, 100, 65];

for (let index = 0; index < 4; index++) {
  total = total + prices[index];
}

console.log(total);

// total = prices[0];
// total = total + prices[1];
// total = total + prices[2];
// total = total + prices[3];

// console.log(total);

