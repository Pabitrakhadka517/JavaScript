const name="pabitra";
const age=21;

console.log(name+" "+ age); // avoid to write in this way 

console.log(`My name is ${name} and i am ${age} years old.`)

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.indexOf("b"));

// most useful String methods
// 1. length
let str = "JavaScript";
console.log(str.length); // 10

// 2. toUpperCase()/ toLowerCase()
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"

// 3. trim()/ trimStart()/ trimEnd() -> removes spaces
"  hi  ".trim();      // "hi"
"  hi".trimStart();  // "hi"
"hi  ".trimEnd();    // "hi"

//4. include()  ->  Checks if text exists
"JavaScript".includes("Script"); // true

// 5. indexOf()/ lastIndexOf() -> find position
"banana".indexOf("a");     // 1
"banana".lastIndexOf("a");// 5

// 6. slice() -> Extract part of string
"JavaScript".slice(0, 4); // "Java"

// 7. substring() -> similar to slice(no negative index)
"JavaScript".substring(4, 10); // "Script"

// 8. replace()/ replaceAll()  -> Replace text
"Hi World".replace("World", "JS"); // "Hi JS"
"ha ha".replaceAll("ha", "ho");    // "ho ho"

// 9. split()  -> converts string to array
"apple,banana,mango".split(",");
// ["apple", "banana", "mango"]

// 10. concat() -> join strings
"Hello".concat(" ", "World"); // "Hello World"

// 11. chartAt/charCodeAt()
"Hello".charAt(1);      // "e"
"Hello".charCodeAt(1); // 101

// 12. startsWith() / endsWith()
"JavaScript".startsWith("Java"); // true
"JavaScript".endsWith("Script"); // true

// 13. repeat()
"Hi ".repeat(3); // "Hi Hi Hi "

