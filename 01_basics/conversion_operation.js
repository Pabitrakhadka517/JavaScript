// // conversion
// let score="33abc";

// console.log(typeof score);
// console.log(typeof(score));

// let convertInNum=Number(score);
// console.log(convertInNum);
// console.log(typeof(convertInNum));

// // note:  "33"=>33                 
// // "33abc" => NaN(not a number)
// // true=>1;   false=0 



// operations
let value=3
let negValue= -value
console.log(negValue)

// console.log(5+3)
// console.log(5-3)
// console.log(5*3)
// console.log(5**3)
// console.log(5/3)
// console.log(5%3)

// let str1="Hello"
// let str2="World"
// console.log(str1+ " " +str2)


// console.log("1"+2); //12
// console.log(1+"2"); // 12
// console.log("1"+ 2 + 2);   //122- if the first value is in string, it joint all numbers
// console.log(1+2+"2");   //32- if the last value is in string, it add agadi ko values and joint the string

// prefix and postfix in js :- refers to increment(++) and decrement(--) operators.
// prefix increment ++  :- increment first and then returns the value
let x=5;
let y=++x;
console.log(x);  //6
console.log(y);  //6


// postfix increment   :- returns the value first and then increment.
let a=5;
let b=a++;
console.log(a);  //6
console.log(b);  //5