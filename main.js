// 1.Create a string for the user saying: You have received this message because you
//  have been chosen to open an important vault. Here is the secret combination:

let vaultMessage = "You have received this message because you have been chosen to open an important vault. Here is the combination: ";

// 2.Assign three variables. Each variable contains the corresponding result of 
// calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.

let comboNumOne = 6 + 4;
let comboNumTwo = 4 * 10;
let comboNumThree = 49 -10;

console.log(comboNumOne);
console.log(comboNumTwo);
console.log(comboNumThree);
// create a dialog box displaying the vault code 
window.alert(vaultMessage + comboNumOne + ", "  + comboNumTwo + ", " + comboNumThree);