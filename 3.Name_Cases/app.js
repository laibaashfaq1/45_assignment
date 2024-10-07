//lower case 
//show the name in all the small letter 
var personName = "laiba";
console.log("lowercase:", personName.toLowerCase());
//upper case
//show the name in all capital letter
console.log("uppercase:", personName.toUpperCase());
//title case
//show the name with first letter capital
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
