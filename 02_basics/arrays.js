// Javascript arrays are resizable and can contain a mix of different data types.

// Array Delaration
const myArr=[1,2,3,4,5];

// const myArr2=new Array(6,7,8,9,10);
// console.log(myArr[0]);
// console.log(myArr2[1]);

//Array Methods
// myArr.push(6);  // add element at the end
// myArr.push(7);
// myArr.pop();    // remove element from the end
// console.log(myArr);

// myArr.unshift(0);  // add element at the beginning
// myArr.shift();    // remove element from the beginning
// console.log(myArr);

// slice, splice, concat, indexOf, includes, join are some other useful array methods.
//  using these gives each exampes
// console.log(myArr.slice(1,4)); //slices from index 1 to 3
// const myArr2=[6,7,8,9,10];
// const newArr=myArr.concat(myArr2);

// console.log(newArr);

// console.log(newArr.indexOf(7)); 
// console.log(newArr.includes(5));
// console.log(newArr.join("-"));

// //example of splice
// const fruits=["apple", "banana", "mango", "orange"];    
// fruits.splice(2,1,"grapes","kiwi"); // at index 2 remove 1 element and add grapes and kiwi
// console.log(fruits);

// // difference between slice and splice
// const letters=["a","b","c","d","e","f","g"];
// const subArr=letters.slice(2,5); // slice does not modify original array
// console.log(subArr);
// console.log(letters);

// letters.splice(2,3,"x","y"); // splice modifies original array
// console.log(letters);


//create two strings array
const arr1=["Hello", "World", "!"];
const arr2=["Welcome", "to", "JavaScript"];
arr1.push(arr2); // using spread operator to push elements of arr2 into arr1
console.log(arr1);
//output: [ 'Hello', 'World', '!', [ 'Welcome', 'to', 'JavaScript' ] ]
//correct way
const arr3=["Hello", "World", "!"];
const arr4=["Welcome", "to", "JavaScript"];
arr3.push(...arr4); // using spread operator to push elements of arr2 into arr1
console.log(arr3);
//output: [ 'Hello', 'World', '!', 'Welcome', 'to', 'JavaScript' ]  

console.log(Array.isArray("Pratima"))  //false
console.log(Array.isArray(["Pratima"]))  //true
console.log(typeof(arr1))  //object
console.log(Array.from("Pabitra"))  //['P','a','b','i','t','r','a']


console.log(Array.from({name:"Pabitra"}))  //[] - because object is not iterable means we cannot loop through it.

let name1="Ram";
let name2="Shyam";
let name3="Hari";
console.log(Array.of(name1,name2,name3))  //['Ram','Shyam','Hari']