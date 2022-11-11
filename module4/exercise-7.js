// JS Exercise 7

var company = {
  name: "Apple",
  founders: ["Steve Jobs", "Steve Wozniak"],
  products: ["iPad", "iPhone", "PS5"],
  "tech company": undefined,
  origin: "USA",
};

// 1. console.log() the length of the company 'name"

console.log(company.name.length);

// 2. console.log() the number of founders for company
console.log(company.founders.length);

// 3. Remove the 'PS5' from the products
company["products"].pop();
console.log(company.products);

// 4. Change the value of the element with key 'tech company' to true
company["tech company"] = "true";
console.log(company[4]);

// 5. If the origin is "USA", alert "Made in USA".

if (company["origin"] === "USA") {
  // alert("Made in USA");
}
console.log(company);

//---------------------------------------------------------------------------------

var newAppleProduct = [["iPhone 14", 5000, "16.0"]];

// 6. console.log() the name of the model in 'newAppleProduct'
newAppleProduct[0][0];
// 7. console.log() the price of the 'newAppleProduct'
newAppleProduct[0][1];

// 8. Change the version number from '16.0' to '16.2'
newAppleProduct[0][2] = "16.2";

// console.log(newAppleProduct);
console.log("New Porduct: " + newAppleProduct);
