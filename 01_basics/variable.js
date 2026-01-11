// In js, varaible is used to store data values.

// There are 3 ways to declare a variable in JavaScript:
// 1. var
// 2. let
// 3. const 
// Note: It is recommended to use 'let' and 'const' over 'var' due to their block scope and other advantages.

// Example of using 'var'                     old way-> avoid using
var name = 'Alice';
console.log('Name using var:', name);
// Function-scoped
// Can be redeclared
// Can cause bugs ❌



// Example of using 'let'  
let age = 25;
console.log('Age using let:', age);
// Block-scoped { }
// Can be updated
// Cannot be redeclared in the same scope
age = 26; // updating the value
console.log('Updated age using let:', age);




// Example of using 'const'
const birthYear = 1998;
console.log('Birth year using const:', birthYear);
// Block-scoped
// Cannot be updated or redeclared
// Best for fixed values 



console.log('This is the variable JavaScript file.');

