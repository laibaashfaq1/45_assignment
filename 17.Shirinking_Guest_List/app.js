var guest_list = ["Ali", "Sara", "kashmala"];
var guest_not_present = "Ali";
var newGuest = "Ahmed";
guest_list[1] = newGuest;
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Dear" +
//       guest_list[i] +
//       ",\n I will invite you to dinner tomorrow. \n Thankyou \n"
//   );
// }
console.log("Mr ".concat(guest_not_present, "  will not coming tommorrow at dinner")); //Q15
guest_list.unshift("kiran", "kainat", "Awais");
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Dear" +
//       guest_list[i] +
//       ",\n I will invite you to dinner tomorrow.We found big table so we decided to invite you on a dinner \n Thankyou \n"
//   );
// } //Q16
console.log("\n unfortunately  we can not arrange big table , only two people allow");
while (guest_list.length < 2) {
    var remove_guest = void 0;
    -guest_list.pop();
    console.log("SOrry Sir/Madam, ".concat(remove_guest, " you are not invited for dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear" +
        guest_list[i] +
        ",\n Yes you are still invited on dinner \n Thankyou \n");
}
guest_list.splice(0, 2);
console.log(guest_list);
