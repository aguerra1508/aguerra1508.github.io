// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("password");

//Variables types of characters
var lCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var uNum = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","- ","_","+","=","?","<",">","~","`","{","}","[","]",";",":"];

//Variable to put user choices into an array
var userChoices = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

//Generation of password via user prompts and confirms
function generatePassword (){

  //Prompt user for a password length
  var chooseLength = (prompt("Pick a number for your password length.\nPassword must be at least 8 characters but no more than 128."));
    if (chooseLength > 8 && chooseLength < 128) {
        console.log(chooseLength);
    } else {
      alert("You must choose a number between 8 and 128. Please try again.");
      //Return to the generate password page
      return "";
    }

  //Confirm if user wants Lowercase
  var chooseLow = (confirm("Do you want to include lowercase letters?\nClick Ok for Yes, Cancel for No."));
    if (chooseLow === true) {
      //If true, add the lower case array to the user choice array
      userChoices = userChoices.concat(lCase)
      console.log(userChoices);
    } else {
      console.log(false);
    }

  //Confirm if user wants Uppercase
  var chooseUpper = (confirm("Do you want to include uppercase letters?\nClick Ok for Yes, Cancel for No."));
    if (chooseUpper === true) {
      //If true, add the upper case array to the user choice array
      userChoices = userChoices.concat(uCase);
      console.log(userChoices);
    } else {
      console.log(false);
    }
  //Confirm if user wants Numbers
  var chooseNum = (confirm("Do you want to include numbers?\nClick Ok for Yes, Cancel for No."));
    if (chooseNum === true) {
      //If true, add the number array to the user choice array
      userChoices = userChoices.concat(uNum);
      console.log(userChoices);
    } else {
      console.log(false);
    }

  //Confirm if user wants Special Characters
  var chooseChar = (confirm("Do you want to include special characters?\nClick Ok for Yes, Cancel for No."));
    if (chooseChar === true) {
      //If true, add the special characters array to the user choice array
      userChoices = userChoices.concat(specialChar);
      console.log(userChoices);
    } else {
      console.log(false);
    }

  //If user selects cancel for all character type selections, alert them they must pick one and start over. 
  if (chooseLow === false && chooseUpper === false && chooseNum === false && chooseChar === false) {
    alert("You must choose at least one character type. Please try again.");
    console.log(userChoices);
    //Return back to the generate password page
    return "";
    } else {
    console.log(userChoices);
  }
  //Variable for creating the password to use in the write password function
     var password = "";
     //Loop through all userchoices. Password length choosen by the user.
      for (var i = 0; i <=chooseLength; i++){
        //Create an array of all of the selected user choices and randomize them
        var randomPassword = userChoices[Math.floor(Math.random()*userChoices.length)];
        //Make password by adding the random password variable to the password variable
       password = password + randomPassword;
      }
      //Return the final password result
      return password;
}

