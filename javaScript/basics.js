// =============================
// FILE 1: quick-revision.js
// =============================

// 1. Basics
console.log("Hello JS");
alert("Hi");
prompt("Enter value");

// 2. Variables
var a = 10;
let b = 20;
const c = 30;

// 3. Data Types
let num = 10;
let str = "text";
let bool = true;
let arr = [1,2,3];
let obj = {name:"Sam"};

// 4. Type Casting
parseInt("10");
parseFloat("10.5");
String(123);
Number("123");

// 5. Operators
let x = 5 + 3;
let y = 5 > 3;
let z = true && false;
let res = (x > 5) ? "Yes" : "No";

// 6. Conditions
if(x > 5) {}
else if(x === 5) {}
else {}

// 7. Loops
for(let i=0;i<5;i++){}
while(false){}
do{}while(false);

// 8. Advanced Loops
let nums = [1,2,3];
for(let n of nums){}
nums.forEach(n => {});

// 9. Functions
function add(a,b){ return a+b }
const sub = (a,b) => a-b;

// 10. DOM
// document.getElementById("id")
// document.querySelector(".class")
