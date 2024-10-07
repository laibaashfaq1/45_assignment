let guest_list: string[] = ["Ali", "Sara", "kashmala"];
let guest_not_present: string = `Ali`;
let newGuest: string = `Ahmed`;
guest_list[1] = newGuest;
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Dear" +
//       guest_list[i] +
//       ",\n I will invite you to dinner tomorrow. \n Thankyou \n"
//   );
// }
console.log(`Mr ${guest_not_present}  will not coming tommorrow at dinner`); //Q15

guest_list.unshift(`kiran`, `kainat`, `Awais`);
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Dear" +
//       guest_list[i] +
//       ",\n I will invite you to dinner tomorrow.We found big table so we decided to invite you on a dinner \n Thankyou \n"
//   );
// } //Q16
console.log(`\n unfortunately  we can not arrange big table , only two people allow`)
while (guest_list.length<2){
    let remove_guest - guest_list.pop();
console.log(`SOrry Sir/Madam, ${remove_guest} you are not invited for dinner`);
}
for (let i = 0; i < guest_list.length; i++) {
  console.log(
   "Dear" +
 guest_list[i] +
",\n Yes you are still invited on dinner \n Thankyou \n"
 );
  }
  guest_list.splice(0,2)
  console.log(guest_list)