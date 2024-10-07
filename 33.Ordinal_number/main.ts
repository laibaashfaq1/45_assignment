//33.Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.

//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
// and each result should be on a separate line.


/*An ordinal number is a number that indicates the position or order of something in a sequence. 
It is used to describe the position of an element in relation to others, typically in a series or sequence.*/

let Numbers: number[] = [1,2,3,4,5,6,7,8,9];

for(let num of Numbers){

    let ordinalEnding : string ;
    if (num===1){
        ordinalEnding = "st";//"st" is "first"
    }
    else if (num ===2){
        ordinalEnding = "nd";//"nd" is "second"
    }
    else if (num ===3){
        ordinalEnding = "rd";//"rd" is  "third"
    }
    else {
        ordinalEnding = "th";//"th" is "fourth , fifth etc"
    }
    console.log(`${num}${ordinalEnding}`);
}