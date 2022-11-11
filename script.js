// variable arrays to pull characters from.
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var littleLetter = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var bigLetter = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", "?"];


// Assignment Code
// Assigns button to variable.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Function that runs generatepassword function and displays on screen
function writePassword() {
  console.log("hello")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() { 
  // variable set to = how long you want your password.
  var passLength = window.prompt("How long would you like your password? Min: 8 characters Max: 128 characters.");
 
  if (!passLength) {
  return;
 }
 if (passLength < 8) {
  window.alert("Please refresh the page and enter a larger number.");
  return;
 } 
 if (passLength > 128) {
  window.alert("Please refresh the page and enter a smaller number.");
  return;
 }
// Set whether your want uppercase letters to true/false.
 var upCase = window.confirm("Would you like to include UPPERCASE LETTERS?");
// Set whether you want lowercase letters to true/false
 var lowCase = window.confirm("Would you like to include LOWERCASE letters?");
// Set whether you want special characters to true/false.
 var specCase = window.confirm("Would you like to include SPECIAL CHARACTERS?");
// Set whether you want numbers to true/false.
 var numberCase = window.confirm("Would you like to include NUMBERS?");
// If chosen character = true, will add array to variable availableCharacters.
 var availableCharacters = "";
 if (upCase) availableCharacters = availableCharacters.concat(bigLetter);
 if (lowCase) availableCharacters = availableCharacters.concat(littleLetter);
 if (specCase) availableCharacters = availableCharacters.concat(specials);
 if (numberCase) availableCharacters = availableCharacters.concat(numbers);
 // Logs for checking status / if everything works.
 console.log(passLength);
 console.log(availableCharacters);
 // Equation to generate the random password.
 var characters = " ";
 for (var i = 0; i < passLength; i++) {
  characters += availableCharacters.charAt(Math.floor(Math.random() * passLength));
 }
 console.log(characters);
 return characters;
}