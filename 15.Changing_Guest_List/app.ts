/*Q15 Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
 you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let guest_list: string[] = ["Ali", "Sara", "kashmala"];
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear" +
      guest_list[i] +
      ",\n I will invite you to dinner tomorrow. \n Thankyou \n"
  );
} //Q14

let guest_not_present: string = `Ali`;
let newGuest: string = `Ahmed`;
guest_list[1] = newGuest;
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    "Dear" +
      guest_list[i] +
      ",\n I will invite you to dinner tomorrow. \n Thankyou \n"
  );
}
console.log(`Mr ${guest_not_present}  will not coming tommorrow at dinner`); //Q15
