//37.Large Shirts: Modify the make_shirt() function so that shirts are large 
//by default with a message that reads I love TypeScript.
//Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("I want a ".concat(size, " t-shirt and ").concat(text, " "));
}
make_shirt();
make_shirt("Medium");
make_shirt("large", "I love Javascript");
