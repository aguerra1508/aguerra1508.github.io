// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables for password generator
var lCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var uNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","?","<",">","~","`","{","}","[","]",";",":"];

alert("Welcome to the Password Generator!\nPlease click Generate Password to begin.");
generateBtn.addEventListener("click", generatePassword);

// User prompts: 
function generatePassword (){

  //Prompt user for a password length
  var chooseLength = (prompt("Pick a number for your password length.\nPassword must be at least 8 characters but no more than 128."));
    if (chooseLength > 8 && chooseLength < 128) {
        console.log(chooseLength);
    } else {
      alert("You must choose a number between 8 and 128. Please try again.");
      return;
    }

  //Alert user they must include at least one character type for their password
  alert("Your password must include at least one character type.\nCharacter types: lowercase, uppercase, numbers or special characters.");

  //Confirm if user wants lowercase
  var chooseLow = (confirm("Do you want to include lowercase letters?\nClick Ok for Yes, Cancel for No."));
    if (chooseLow === true) {
    console.log(lCase);
    } else {
      console.log(0);
    }

  //Confirm if user wants Uppercase
  var chooseUpper = (confirm("Do you want to include uppercase letters?\nClick Ok for Yes, Cancel for No."));
    if (chooseUpper === true) {
      console.log(uCase);
    } else {
      console.log(0);
    }

  //Numbers
  var chooseNum = (confirm("Do you want to include numbers?\nClick Ok for Yes, Cancel for No."));
    if (chooseNum === true) {
      console.log(uNum);
    } else {
      console.log(0);
    }

  //Special Characters
  var chooseChar = (confirm("Do you want to include special characters?\nClick Ok for Yes, Cancel for No."));
    if (chooseChar === true) {
      console.log(specialChar);
    } else {
      console.log(0);
    }
    
  //If user selects cancel for all character type selections, alert them they must pick one and start over. 
  if (chooseLow + chooseUpper + chooseNum + chooseChar === 0) {
    alert("You must choose at least one character type. Please try again.");
    console.log(chooseLow + chooseUpper + chooseNum + chooseChar);
  } else {
    console.log("Generate Password.");
  }
  
}
// Write password to the #password input
/*function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/