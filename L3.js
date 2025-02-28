let greeting = "Hello!";
console.log(greeting);

let StrNum = "5";
let numType = 5;
console.log(typeof StrNum);
console.log(typeof numType);
let danke = 15;
console.log(danke);

let trust = true;
console.log(trust);

let bo6 = 5 == 5; // true
let lmaon = 10 > 5; // true
let bear = true && false; // false
console.log(bo6, lmaon, bear);

let shallom = "Hello";
console.log(shallom.toUpperCase());

let world = "shallom";
console.log(world.toLowerCase());

let text = "Hello";
text.toUpperCase();
console.log(text);

let hallom;
console.log(hallom); // Outputs "undefined"

let text2 = "Hello2";
console.log(text2.toLowerCase()); // Corrected, Outputs "hello2"

let age = Number(prompt("How old are you?"));
let nextAge = age + 1;
console.log(`Next year you will be ${nextAge}`);

let name = prompt("What is your name?");
let aga = Number(prompt("How old are you?"));
let isInSixties = aga >= 60 && aga < 70;
console.log(`${name} is in sixties: ${isInSixties}`);

let x = 5;
console.log(x++); // Outputs 5, then x becomes 6
console.log(x); // Outputs 6

let y = 5;
console.log(++y); // Outputs 6, y is incremented before printing
console.log(y); // Outputs 6

let variable;
console.log(variable); // Outputs "undefined"

let a = 5;
let b = "5";
console.log(a == b); 

let a2 = 5;
let b2 = "5";
console.log(a2 != b2); 

let result = "5" + 5;
console.log(result); // Outputs "55"