// Assignment Code
var specialCharacters = [ '!','"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var lowerCaseCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacters = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var characLength = 8;
var selection = [];
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("howdy  howdy dhowdy ")
  //1. prompt user for password criteria
  //   a. password length 8 < 128 characters
  //   b. lowercase, uppercase, numbers, special characters
  //2. validate input
  //3. generate password based on criteria


  //4. display generated password on page
  return "Generated Password will go here";
}

function prompts() {
  characLength = parseInt( prompt ("How many characters do you want your password to be? 8- 128 characters"));

  if(isNaN(characLength) || characLength < 8 || characLength > 128) {
    alert("Character length must be a number between 8-128 characters.");
    
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
