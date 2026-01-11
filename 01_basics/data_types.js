"use strict";  // treat all js code as newer version

// alert("Hello World!"); // we are using nodejs so alert will not work here, it works in broswer or console only

// JavaScript has two main categories of data types
// Primitiive Data Types:- stores single, simple values.

// 1. String - text data
let name="Pabitra";   //simi colon is optional
let city="Kathmandu"

// 2. Numbers - integers and decimals
let age=21;
let price=99.99;

// 3. BigInt - for very large numbers
let bigNum=1234456778899877;

// 4. Boolean - True or False
let isStudent=true;

// 5. Undefined - declared but not assigned
let x;
console.log(x);  //undefined

// 6. Null - Intentional empty value
let data=null;

// 7. Symbol - Unique and immutable value
let id = Symbol("id");


// Non-Primitive Data Types:- stores multiple values or complex structures.
// 8. Object ->   key-value pairs
let user={
    name:"Pratima",
    age:21
}

// 9. Array - ordered list
let fruits=["apple", "banana", "Mango"];

// 10. Function - Block of reusable code
function greet(){
    return "Namaste";
}

// Primitive Data Types:- Stack Memory -> Copy by value
//  Non-primitive Data types:- Heap Memory  -> Copy by reference