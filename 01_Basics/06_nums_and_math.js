
/*
const score = 100;
console.log(score);

const balance = new Number(600); // balance must be a number
console.log(balance);

console.log(balance.toString());  //converted to string
console.log(balance.toString().length); // converted to string and printing the lenght
console.log(balance.toFixed(2)); // number of values to show after decimal

const otherNumber = 24.8945;
console.log(otherNumber.toPrecision(4)); // It roundoffs the value precisely
console.log(otherNumber.toPrecision(2));

const num = 1234.8765;
console.log(num.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-In'));
*/

//++++++++++ MATH LIBERERY +++++++++++

/*
console.log(Math); // 'Math' itself is an object
console.log(Math.abs(-5));
console.log(Math.round(4.3));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

//Finding maximum and minimum in an arrey using min and max function
console.log(Math.min(2, 4, 7, 3, 8));
console.log(Math.max(2, 4, 7, 3, 8));
*/

console.log(Math.random()); // This function alays picks values betwen 0 an 1
console.log(Math.random() * 10); // To move the decimal one digit forward
console.log((Math.random() * 10) + 1); // We can use +1 to avoid '0.0' type of stiuation cuz it's randomly generated


const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1))) + min);
//(max - min + 1) ensures that the range covers all integers from min to max.
// in this case its between 11 to 20
//+ min Shifts the random integer into the desired range.
// Example: 0.1234 * (20 - 10 + 1) + 10
// Ans:- 11.3574 after using the Math.floor on the whole operation the answer will be 11
// Note that random() function can pick any value between 0 and 1
