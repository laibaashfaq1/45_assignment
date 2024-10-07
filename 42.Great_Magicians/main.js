//42.Great Magicians: Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians by adding 
//the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
var magicians = ['Harry Houdini', 'Afzaal Afridi', 'Munawar Khan', 'Tariq Shah'];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
//show_magicians(magicians);
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " The Great Magician";
    }
}
make_great(magicians); //modifies the original array
show_magicians(magicians); //show modified names
