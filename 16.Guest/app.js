var guest_list = ["Ali", "Sara", "kashmala"];
// for (let i = 0; i < guest_list.length; i++) {
//   console.log(
//     "Dear" +
//       guest_list[i] +
//       ",\n I will invite you to dinner tomorrow. \n Thankyou \n"
//   );
// } //Q14
var guest_not_present = "Ali";
var newGuest = "Ahmed";
guest_list[1] = newGuest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear" +
        guest_list[i] +
        ",\n I will invite you to dinner tomorrow. \n Thankyou \n");
}
console.log("Mr ".concat(guest_not_present, "  will not coming tommorrow at dinner")); //Q15
guest_list.unshift("kiran", "kainat", "Awais");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear" +
        guest_list[i] +
        ",\n I will invite you to dinner tomorrow.We found big table so we decided to invite you on a dinner \n Thankyou \n");
} //Q16
