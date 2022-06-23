const fruits = [
  { name: "apple", price: 50 },
  { name: "banana", price: 25 },
  { name: "orange", price: 30 },
  { name: "pineapple", price: 75 },
  { name: "grape", price: 60 },
];

//filter() => filters the array to only include fruits with price's less than 50
const filteredFruits = fruits.filter((fruit) => {
  return fruit.price <= 50;
});

//console.log(filteredFruits);

//map() => travels through the array to only get the name of the fruits in order to create a new array
const FruitNames = fruits.map((fruit) => {
  return fruit.name;
});

//console.log(FruitNames);

//find() => finds an element in the array
const foundFruit = fruits.find((fruit) => {
  return fruit.name === "orange"; //This will find the fruit since it exist in our array
});

//console.log(foundFruit);

//forEach() applies what we want on each element of the array
fruits.forEach((fruit) => {
  //console.log("Name : " + fruit.name); //in this case it displays every fruit's name
});

//some() => verifies a certain condition in the array -- only returns true or false
const hasFreeFruit = fruits.some((fruit) => {
  return fruit.price <= 0; //this will return false since all the fruits in our initial array have a price
});

//console.log(hasFreeFruit);

//every() is very similar to some() but instead of verifying the condition for 1 element, every() makes sure
//all the element correspond the condition
const hasInexpensiveFruit = fruits.every((fruit) => {
  return fruit.price <= 100; //this will return true since all the fruits cost less than 100 in the fruits array
});

//console.log(hasInexpensiveFruit);

//reduce() is a method that runs small addition operations on 2 consecutive items in the array at the time
// in order to get the combination of all those operations like a Total par exemple
// the value '0'(which can be a variable) is the first value passed to the 'currentTotal' param and is necessary for the function to run properly

//let previousPrice = 240;
const totalPrice = fruits.reduce((currentTotal, fruit) => {
  return fruit.price + currentTotal;
}, 0 /*previousPrice*/);

//console.log(totalPrice);

//includes() is like find() but instead of finding an element
//it returns a boolean that lets you know if your element is or not in the array
const numbers = [1, 2, 3];

var searchedNumber = 5;

const isNumberIncluded = numbers.includes(2 /*searchedNumber*/);
//console.log(isNumberIncluded);

//push() lets you inject the value or object you specified in the array
//in case of an object you will need to give the attr and values of the object though
numbers.push(5);
//console.log(numbers);

fruits.push({ name: "mangoe", price: 80 });

//console.log(fruits);
