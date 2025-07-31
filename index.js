// js-array-tasks --------

// ---- Declare an array-----

// const fruits = ["mango","apple","painaple","tometo","banana"];

//  fruits[2] = "jambura";
//  console.log(fruits);

// const numbers = [1,2,3,4,5,6,7,8,9];
// numbers[5] = 20;
// console.log(numbers);

// ----Add or remove elements-----
//  const tree = ["dhaka","savar","mirpur"];

//   tree.push("khagan");
//   tree.push("uttora","daffodil");
//   tree.pop();
//   console.log(tree);

// ---- Checking Array Membership with ‘includes’----
// const booksLibery = ["bangla","english","math","islam"];

// console.log(booksLibery.includes("bangla"));
// console.log(booksLibery.includes("physics"));

// let books = ["html basis","css mastery","Javascript essentials","Python for Beginners"];
// let hasJavascriptBook = books.includes("javascript essentials");
// if(hasJavascriptBook){
//     console.log("Yes, the JavaScript book is in the array");
// }else{
//      console.log("No, the JavaScript book is not in the array.");
// }

// let numbers = [25,36,48,95,42,57,15,65];
// let hasNumbersList = numbers.includes(205);
// if(hasNumbersList){
//     console.log("Yes")
// }else{
//     console.log("no")
// }
//------- Checking if it's an Array--------

// const names = ["rony","frioz","rasel","jibon","arman"];
// const age = 18;
// const city = "dhaka";
// const isBooks = true;

// console.log(Array.isArray(names)?"names is an array":"names is NOT an array");
// console.log(Array.isArray(age)?"names is an array":"names is NOT an array");
// console.log(Array.isArray(age)?"names is an array":"names is NOT an array");
// console.log(Array.isArray(age)?"names is an array":"names is NOT an array");


// let fruits = ["mango", "banana","apple","painaple"];
// let age = 18;
// let isStudent = true;

// console.log(Array.isArray(fruits)? "fruits names is array":"fruits names is NOT array");
// console.log(Array.isArray(fruits)? "fruits names is array":"fruits names is NOT array");
// console.log(Array.isArray(fruits)? "fruits names is array":"fruits names is NOT array");
// 

// -----Combining Arrays--------

let names = ["rasel","rony","faysal"];
let fruits = ["apple","mango","banana"];
let all = names.concat(fruits);

console.log("fruits Array:",fruits);
console.log("names Array:",names);
console.log("Combained all array:",all);
