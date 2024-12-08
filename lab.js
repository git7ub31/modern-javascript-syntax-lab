//Array.prototype.map() >Exercise 1: Create a new array where each value is multiplied by 2 and log the new array.
// const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// const numsNew = nums.map((currentElement) => {
//     return currentElement*2
// });

// console.log('EX1:',numsNew);

// EX2: Array destructuring> Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// const [firstTopping, secondTopping] = pizzaToppings;

// console.log(firstTopping);
// console.log(secondTopping);

//EX3: Object destructuring> Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };

//   const {make, model} = car;

//   console.log(make);
//   console.log(model);

//EX4: Spread Operator on Arrays> // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings];
 console.log(controversialPizzaToppings);

 //EX5: Spread Operator on Objects: Duplicate the following object and spread its values into a new variable `myCar`. // Change the `model` property of `myCar` to 'q7'. Log both objects.

 const car = {
    make: 'Audi',
    model: 'q5',
  };

const myCar = {...car};
myCar.model = 'q7';

console.log('car:', car);
console.log('myCar:', myCar);

//EX6:Dynamic Keys in Object
const propertyName = 'keys'; 

const userProfile = {
    [propertyName]: 7,
};

console.log(userProfile);

//EX7: import and export, other pages

//EX8: Default Parameters
function twoParams(noun= 'cat', adjective='white'){
    console.log(`the ${noun} is ${adjective}`);
}

twoParams()

//EX9: Ternary Operator
// Convert the following `if...else` statement in to a ternary:

// let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here
let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');

//EX10: Boolean Gates
// 1. SET LANGUAGE
// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 
// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en';
// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light';
// Log the result
console.log('User theme setting:', USER_THEME);


//EX:11
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age;
  
  console.log(cat);
  