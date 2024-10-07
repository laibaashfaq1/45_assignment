//42.Great Magicians: Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians by adding 
//the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.


let magicians :string[] =['Harry Houdini' , 'Afzaal Afridi' , 'Munawar Khan' , 'Tariq Shah'];

function show_magicians(magicians :string[]){//exercise 41
    magicians.forEach(magician =>
        {
            console.log(magician)
        }
    );
}
//show_magicians(magicians);


function make_great(magicians:string[]){//exercise 42
    for (let i = 0 ; i < magicians.length ; i++){
        magicians[i] = magicians [i] + " The Great Magician";
    }
}
make_great(magicians); //modifies the original array
show_magicians(magicians); //show modified names