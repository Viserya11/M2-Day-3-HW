/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const firstArray = [1, 2, 3, 4, 5];
console.log(firstArray);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const details = {
  firstName: "Panni",
  lastName: "Szűcs",
  email: "szucspann@gmail.com",
  age: 22,
};
const firstVariable = details;

console.log(firstVariable);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

details.license = false;

console.log(details);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete details.age;

console.log(details);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const details2 = {
  firstName: "John",
  secondName: "Doe",
  email: "randomemailjohndoe@email.email",
};

if (details.email == details2.email) {
  console.log("These emails are the same.");
} else {
  console.log("These emails aren't the same.");
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let item1 = 15;
let item2 = 35;
let item3 = 40;
let totalAmount = item1 + item2 + item3;
console.log("\nThe total amount of your order in dollars:" + totalAmount);
if (totalAmount > 50) {
  console.log("Congratulations, you are free of the shipping charges!");
} else {
  console.log("The additional shipping fee is 10 dollars.");
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let totalAmount2 = item1 * 0.8 + item2 * 0.8 + item3 * 0.8;
console.log("\nThe total amount of your order in dollars:" + totalAmount2);
if (totalAmount2 > 50) {
  console.log("Congratulations, you are free of the shipping charges!");
} else {
  console.log("The additional shipping fee is 10 dollars.");
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car1 = {
  brand: "yondacivic",
  model: "2001",
  licensePlate: "writeThisIMust",
};

const car2 = Object.assign({}, car1);
const car3 = Object.assign({}, car1);
const car4 = Object.assign({}, car1);
const car5 = Object.assign({}, car1);
const car6 = Object.assign({}, car1);
car2.licensePlate = "orElse";
car3.licensePlate = "iWillBe";
car4.licensePlate = "in";
car5.licensePlate = "BigBig";
car6.licensePlate = "Trouble";
console.log(
  "\n",
  car1,
  "\n",
  car2,
  "\n",
  car3,
  "\n",
  car4,
  "\n",
  car5,
  "\n",
  car6
);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [car1, car2, car3, car4, car5, car6];
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
carsForRent.shift();

console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(carsForRent);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [car2, car3, car4];
let totalCars = carsForRent.length + carsForSale.length;

console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let i = 0; i < carsForSale.length; i++) {
  console.log("All cars for sale in shop: ", carsForSale[i]);
}
