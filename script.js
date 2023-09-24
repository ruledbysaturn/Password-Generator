// Assignment Code
// array for special characters
var specialCharacters = [ '!','"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
// array for lower case characters
var lowerCaseCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//array for upper case charaters
var upperCaseCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//array for numbers
var numericCharacters = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var characLength = 8;
var selection = [];
var generateBtn = document.querySelector("#generate");

//defining generatePassword from writePassword function, function to generate the password
function generatePassword() {
  var password = "";
  for(var i=0; i < characLength; i++){
    var random = Math.floor(Math.random() * selection.length);
    password = password + selection[random];
  }
  return password;
}

//prompting user password criteria
function prompts() {
  selection = [];

  characLength = parseInt( prompt ("How many characters do you want your password to be?"));

//tells user that password must be a number if they do not type in a number
  if(isNaN(characLength) || characLength < 8 || characLength > 128) {
    alert("Password length must be a number, minimum requirement 8, max characters 128.");
    return false;
  }
  if (confirm("Click OK to include lowercase letters in your password")) {
    selection = selection.concat(lowerCaseCharacters);
  }  
  if (confirm("Click OK to include uppercase letters in your password")) {
    selection = selection.concat(upperCaseCharacters);
  }
  if (confirm("Click OK to include special characters in your password")) {
      selection = selection.concat(specialCharacters);
  }
  if (confirm("Click OK to include numbers in your password")) {
        selection = selection.concat(numericCharacters);
  }
  return true;
}
// Write password to the #password input
function writePassword() {
  var rightprompts = prompts();

  if (rightprompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  } else{
    passwordText.value ="";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
