/*23Conditional Tests: Write a series of conditional tests. 
Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/


let car = 'subaru';

//Test 1: Equality Coparision Test

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true


//Test 2: Non-Equality Coparision Test

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); //false


//Test 3 : Strict Equality Comparision
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //true


//Test 4 : Non-Strict Equality Comparision
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //fasle


//Test 5 : Less than Comparision
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); //false


//Test 6 : Less than or equal to Comparision
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); //true

//Test 7 : Greater than Comparision
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru');//false


//Test 8 : Greater than or equal to Comparision
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); //true


//Test 9 : Cheching Truthiness
console.log("Is car? I predict True");
console.log(car);//true


//Test 10 : Cheching Falsiness
console.log("Is !car? I predict Fasle");
console.log(car);//fasle