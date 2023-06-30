// Assignment code here
var characterLength = 8;
var choiceArr = [];

var specialCharacterArr = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}","|","?","/","<",">"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberArr = ["1","2","3","4","5","6","7","8","9","0"];


function generatePassword() {
  console.log("Button was clicked");
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  
  }
  return password;
  // Generate password based on criteria
  
  // Display password for the page
  return "Password is here";
}

function getPrompt() {
choiceArr = [];
//  Prompts user for the password criteria
  characterLength = parseInt(prompt("How many characters would you like? (8 - 128"))
//  Password length of 8 - 128
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){ // Validate the input
  alert("Character length has to be a number, 8 - 128 digits.");
  return false;
  } // Lowercase, uppercase, and special characters
  if(confirm("Would like lowercase letters?")){
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if(confirm("Would like uppercase letters?")){
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if(confirm("Would like numbers?")){
    choiceArr = choiceArr.concat(numberArr);
  }
    if(confirm("Would like special characters?")){
    choiceArr = choiceArr.concat(specialCharacterArr);
  }
  return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompt = getPrompt();  //returns true or false
  var passwordText = document.querySelector("#password");
  if(correctPrompt) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
