/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var house = {
    areas: {
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair','microwave']
        }
    },
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: function(){ alert("Beep") }
        }
    }
}



/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.

// (2) Add a stove to the kitchen.

// (3) Remove the washing machine from bedroomOne.

// (4) Change the color of the car to blue.

// (5) Add a another car to the garage with a honk function.

// (6) Make the new car honk.

// (7) If the house has a garden, console.log the name of the flower.

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.