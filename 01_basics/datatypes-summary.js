// 2 datatypes in JS (kis tarah se data ko memory mein rakha jaata hai aur access kiya jaata hai)
// primitive and non primitiv
// call by val and call by reference

// primitive -> call by value Original data copy karke milta hai
// 7 types:  String, Number, Boolean, NULL, undefined, symbol(kisi val ko unique banane ke liye [Advanced use case]), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined         let userEmail = undefined      // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console. tog( id === anotherId);

const bigNumber = 6458791254879465132n



//TS -> const score:number = 100

// non primitive -> refernce type
// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]; //array

let myObj = {
    name:"hitesh",
    age:22
}

//fucntion can be treated as a vairable
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber);
// JS must -> Obejcts and Browser web events


/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

JS is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

*/

