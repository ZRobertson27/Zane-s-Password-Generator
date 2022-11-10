// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("hello")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = window.prompt("How long would you like your password? Min: 8 characters Max: 128 characters.");
 
  if (!passLength) {
  return;
 }
 if (passLength < 8) {
  window.alert("Please enter a larger number.");
 } 
 if (passLength > 128) {
  window.alert("Please enter a smaller number.");
 }

 var upCase = window.confirm("Would you like to include UPPERCASE LETTERS?");


 var lowCase = window.confirm("Would you like to include LOWERCASE letters?");

 var specCase = window.confirm("Would you like to include SPECIAL CHARACTERS?");

}