//console.log("2"==2)   //only compare values so it return 'true' 
//console.log("2"===2) //compare values as well as data type but it return 'false'
// Symbol we use for symbol like a varible 

const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id===anotherId)
// we got false , so here we can say 2 symbol may equal


//making Objects
const heros=["iron man", "batman", "superman", "hulk"]
//obj
let myObject = {
    name: "AMIT KUMAR",
    Age : 21,
    Email : "Akk71864@gmail.com",
    //this info under the an Object
}

// FUCTION

const myFunction= function(){
    console.log("Hello World!")
    
}
// all data type of functions and non primitive  datatypes have  objects
myFunction();