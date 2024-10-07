//lower case 
//show the name in all the small letter 
let personName: string = "laiba"
console.log("lowercase:", personName.toLowerCase());

//upper case
//show the name in all capital letter
console.log("uppercase:", personName.toUpperCase());

//title case
//show the name with first letter capital
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

