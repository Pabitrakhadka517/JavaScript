// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2<1);

console.log(null>0);  //false
console.log(null==0); //false
console.log(null>=0);  // true
// note:-  The reason is that an equality check == and comparsion > < >= <= work differently in js
//         Comparsions convert null to a number, treating it is 0.
//         that's why null>=0 is true and null>0 is false.


// === strictly check 
console.log("2"== 2);
console.log("2"=== 2);  // === also check data types of values

