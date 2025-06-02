"use strict"; //treat all JS code as newer version
// alert(3 + 2); //we are using nodeJS , not browser so it not work

// rule 1 : readability of code should be HIGH
let name = "John"; //string
let age = 30; //number range: -2^53 to 2^53 if number is too large the we use BigInt
let isMarried = false; //boolean  true or false
let person = {
  name: "John",
  age: 30,
  isMarried: false,
}; //object
null //null is a special value that represents the absence of any value
//undefined => undefined is a special value that represents a variable that has not been assigned a value
let state = null; //it does not have any value
let city; //it is undefined because it has not been assigned a value
//symbol => it is a unique and immutable value that can be used as an identifier for object properties
console.log(typeof "1456"); //string    
console.log(typeof 1456); //number
console.log(typeof true); //boolean
console.log(typeof null); //object (this is a bug in JS, null is not an object) 
