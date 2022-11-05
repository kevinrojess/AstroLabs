// JS Exercise 3
var building = {
  name: "Burj Khalifa",
  address: "",
  floors: ["Floor 1", "Floor 2", "Floor 3"],
  entrances: ["Main", "Fashion"],
};

// 1. Use console.log() to log the name of the 'building',
console.log(building["name"]);

// 2. Update the building to include the address: 'Downtown, Dubai, UAE'.
building["address"] = "Downtown, Dubai, UAE";

// 3. Add a third entrance to 'building' called 'Cinema'
building["entrances"].push("Cinema");

// 4. Use a for loop to add a total of 163 floors. Note:
//    each floor must be in this format 'Floor #', where # is a number
for (let i = 4; i <= 163; i++) {
  building["floors"].push("Floor" + i);
}

// 5. Add two floors before 'Floor 1' called 'P1' and 'P2'
building["floors"].unshift("P1", "P2");
console.log(building);
