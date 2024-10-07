//27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//Version 1  :-
let alien_Color: string = "green";
if (alien_Color === "green") {
  console.log("Version 1 :-The player earned 5 points.");
} else if (alien_Color === "yellow") {
  console.log("The player earned 10 points.");
} else if (alien_Color === "red") {
  console.log("The player earned 15 points.");
} else {
  console.log("Please select right color");
}

//Version 2  :-
alien_Color = "yellow";
if (alien_Color === "green") {
  console.log("The player earned 5 points.");
} else if (alien_Color === "yellow") {
  console.log("Version 2 :-The player earned 10 points.");
} else if (alien_Color === "red") {
  console.log("The player earned 15 points.");
} else {
  console.log("Please select right color");
}

//Version 3  :-
alien_Color = "red";
if (alien_Color === "green") {
  console.log("The player earned 5 points.");
} else if (alien_Color === "yellow") {
  console.log("The player earned 10 points.");
} else if (alien_Color === "red") {
  console.log("Version 3 :- The player earned 15 points.");
} else {
  console.log("Please select right color");
}
