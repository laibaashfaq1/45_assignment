/*They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.*/
//create two objects
var book = {
    name: "Essential Typescript",
    price: 450
};
var apple = {
    name: "apple",
    price: 200
};
console.log("Book name: ".concat(book.name, ", price: $").concat(book.price));
console.log("Apple name: ".concat(apple.name, ", price: $").concat(apple.price));
