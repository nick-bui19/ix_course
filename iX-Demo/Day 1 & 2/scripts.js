let firstName = 'Nick';
const lastName = 'Bui';

let address = '2301 Vanderbilt Pl';

let age = 20;

console.log(typeof firstName);
console.log(lastName);
console.log(address);
console.log(typeof age);

//two keys are not the same even though they are assigned the same value.
let uniqueKey = Symbol('key');
let uniqueKey2 = Symbol('key');

console.log(uniqueKey == uniqueKey2);

let isCool = true;
let isVeryCool = false;

console.log(isCool);
console.log(isVeryCool);

let dob = null;
console.log (dob);

//undefined
let address1;
console.log(address1);

//undefined const can't exist because its const u cant change it even though its nothing 
//-> waste of space.
//const address2;
//console.log(address2);

let x = 5;
let y = x;
y = 10;

console.log(x);

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

//arrays are passed by reference in JS.
console.log(arr1);

// String concatenation
console.log("My name is " + firstName + " and I am " + age + " years old");

// String interpolation
console.log(`My name is ${firstName} and I am ${age} years old`);

//String interpolations are considered cleaner.

let s = `My name is ${firstName}`;

// string properties
console.log(s.length);

// string methods
console.log(s.toLocaleUpperCase());

s = s.toLocaleUpperCase();

s.indexOf("Y", 2);

s.substring(0, 7);

s1 = s[0];

s2 = s[8];

console.log(s1, s2);

//ARRAYS
// Initializing an array - old
let nums1 = new Array(1, 2, 3, 4, 5, 6, 'a', false); //use the Array object
console.log(nums1);

// Initializing an array - new
let alphaNumeric = [1, 2, 3, 4, 5, "a", "b"];
console.log(alphaNumeric);

let fruits = ["orange", "pear", "apple"];

console.log(fruits);

// get element in array (remember it's zero indexed):
console.log(fruits[2]);

// array properties
console.log(fruits.length);

// array methods
fruits.push("strawberries"); // add to back
console.log(fruits);
fruits.unshift("grape"); // add to front
console.log(fruits);
const lastFruit = fruits.pop(); //pop the last element off
console.log(lastFruit, fruits);
const index = fruits.indexOf("orange");
console.log(index, fruits);

//NON-PRIMITIVE DATA TYPES
let address3 = {
    street: "Zinnia",
    city: "Potchefstroom",
    province: "North West",
};

let person = {
    // Object properties:
    firstName: "John",
    lastName: "Doe",
    age: 29,
    hobbies: ["golf", "surfing", "sport", "music"],
    address: address3,

    // Object methods:
    getFullName: () => {
      return person.firstName + " " + person.lastName;
    },
    getAddress: () => {
      return (
        person.address.street +
        " " +
        person.address.city +
        " " +
        person.address.province
      );
    },
  };
  
  console.log(person);
  
  // Calling object methods
  console.log(person.getFullName());
  console.log(person.getAddress());
  
  // Adding properties:
  person.email = "byron@mail.com";
  person["email"] = "byron@mail.com";
  console.log(person);

//LOOPS

console.log("starting for loop");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("for loop finished");

// While loop example
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Extra Example
const todos = [
  {
    id: 1,
    title: "take out the trash",
    completed: true,
  },
  {
    id: 2,
    title: "feed the dogs",
    completed: false,
  },
  {
    id: 3,
    title: "go to the bank",
    completed: true,
  },
];

for (let i = 0; i < todos.length; i++) {
  const todo = todos[i];
  const doneText = todo.completed ? "" : "not";
  console.log(`${todo.title} task is ${doneText} completed`);
}

console.log("\n \n \n");

//for x of arr
for (let todo of todos){
    const doneText = todo.completed ? '':'not';
    console.log (`${todo.title} task is ${doneText} completed`)
}

//another way to do for loops
todos.forEach((todo) => {
    const doneText = todo.completed ? "" : "not";
    console.log(`${todo.title} task is ${doneText} completed`);
  });

console.log("\n \n \n");

//Higher Order Array methods, filter() function
let fruit = ['apple', 'banana', 'apple'];

const filterFunction = (fruit) => {
    return fruit != 'apple';
}

let filteredFruit = fruit.filter(filterFunction);
console.log(filteredFruit);

//Conditional Statements
const num = 10;

if (num == 10) {
    console.log('num = 10');
} else if (num < 10){
    console.log('num < 10');
} else {
    console.log('num > 10');
}

//Switch Statements
switch (num) {
    case 10: 
        console.log('num = 10');
    case 5: 
        console.log('num = 5');
    default: 
        console.log('num is not 5 or 10');
}

//Ternary operator: 
(x == 5) ? console.log ('x is 5') : console.log ('x is not 5');

//num = 10
let lessThanFive = num < 5 ? true : false;
console.log(lessThanFive);

const onSubmit = (e) => {
    //'e.preventDefault()' is a method of the event object 'e' that prevents the 
    //default behavior of the event from occuring.

    //in the context of a form submission, the default is to send a request to the server, 
    //reload the page, or navigate to a new page

    //using preventDefault() prevents the form from submitting and reloading, 
    //allowing us to handle the form data with JS, such as validating input or sending requests via 
    //AJAX request.
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const firstName2 = document.getElementById("lastName").value;
    console.log("firstName", firstName);
    console.log("firstName2", firstName2);
    console.log("lastName", lastName);
}

//Event listener for form submission
document.getElementById("myForm").addEventListener("submit", onSubmit);

//'document' is part of the Document Object Model (DOM),
// which represents the HTML page. 