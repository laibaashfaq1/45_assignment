/*24.More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False
result for each of the following:*/
//• Tests for equality and inequality with strings _ Done
console.log("Testing with Equality strings: ");
console.log("mango" == "mango"); //true
console.log("Testing with Inequality strings:");
console.log("mango" == "Mango"); //false
//• Tests using the lower case function
console.log("Testing with lower case function: ");
console.log("Mango".toLowerCase() == "mango"); //false
// Numerical tests involving equality and inequality, 
console.log("Testing Numerical with equality and inequality");
console.log(5 === 2); //false
//greater than and less than
console.log("Testing Numerical with < , > ");
console.log(5 > 2); //true
console.log(10 < 5); //false
//greater than or equal to, and less than or equal to
console.log("Testing Numerical with <= , >= ");
console.log(5 >= 2); //true
console.log(10 <= 5); //false
//• Tests using "and" and "or" operators
console.log("Test using & operator:");
console.log(5 === 5 && 10 < 5); //false
console.log("Test using & operator:");
console.log(5 === 5 || false); //true
//• Test whether an item is in a array
var fruits = ["Apple", "Mango", "Banana"];
console.log('Test "Mango" is in the array:', fruits.includes("Mango")); //true
//• Test whether an item is not in a array
console.log('Test "Guava" is not in the array:', fruits.includes("Guava")); //false
