/*They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/

interface item {
    name : string
    price : number
}
//create two objects
const book : item ={
    name: "Essential Typescript"
    price:450
}

const apple : item={
    name: `apple`
    price: 200
}

console.log(`Book name: ${book.name}, price: $${book.price}`);
console.log(`Apple name: ${apple.name}, price: $${apple.price}`);
