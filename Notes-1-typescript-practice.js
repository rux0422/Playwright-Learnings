"use strict";
const myname = "Rux";
console.log(myname);
let myage = 23;
myage = 24;
console.log(myage);
console.log(`My name is ${myname}`);
//Data types in typescript
let isStudent = true; //boolean
let myname1 = "Rux"; //string
let myage1 = 23; //number
let hobbies = ["coding", "gaming", "traveling"]; //Array-list
console.log(hobbies[2]);
let me = ["Rux", 23, true]; //Array-tuple
console.log(me[0]);
let nums = [1, 2, 3, 4, 5]; //Alternative way to declare an array
console.log(nums[3]);
//Objects in typescript
let person = { name: "Rux", age: 23 };
console.log(person.name);
console.log(person.age);
//Functions and arrow functions in typescript
function greeting() {
    console.log("Hi, how are you?");
}
greeting();
