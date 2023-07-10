// Assignment code here
var charaLen = 8;
var optionsArr = [];
// options to choose from
var spCharacter = ["!","@","#","$","^","%","*","&","(",")","[","]","{","}","|","?","/","<",">"];
var uCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbArr = ["1","2","3","4","5","6","7","8","9","0"];

function genPword() {
  console.log("Button was clicked");
  var pass = "";
  for(var i = 0; i < charaLen; i++) {
    var randomOpt = Math.floor(Math.random() * optionsArr.length);
    pass = pass + optionsArr[randomOpt];
  
  }
  return pass;
  // Generate password based on criteria
  
  // Display password for the page
  return "Password is here";
}

function getPrompt() {
optionsArr = [];
//  Prompts user for the password criteria
  charaLen = parseInt(prompt("How many characters would you like? (8 - 128"))
//  Password length of 8 - 128
  if(isNaN(charaLen) || charaLen < 8 || charaLen > 128){ // Validate the input
  alert("Character length has to be a number, 8 - 128 digits.");
  return false;
  } // Lowercase, uppercase, and special characters
  if(confirm("Would like lowercase letters?")){
    optionsArr = optionsArr.concat(lCase);
  }
  if(confirm("Would like uppercase letters?")){
    optionsArr = optionsArr.concat(uCase);
  }
  if(confirm("Would like numbers?")){
    optionsArr = optionsArr.concat(numbArr);
  }
    if(confirm("Would like special characters?")){
    optionsArr = optionsArr.concat(spCharacter);
  }
  return true;
}

// Get references to the #generate element
var genBtn = document.querySelector("#gen");

// Write password to the #password input
function writePass() {
  var corrPrompt = getPrompt();  //returns true or false
  var passText = document.querySelector("#pass");
  if(corrPrompt) {
    var newPass = genPword();
    passText.value = newPass;
  } else {
    passText.value = "";
  }

}
// Add event listener to generate button
genBtn.addEventListener("click", writePass);
