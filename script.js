// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var number = document.getElementById("myRange").value;
  var charlength = document.getElementById("charlength");
  charlength.innerHTML = number;
  var length = number,
      charset = "abcdefghijklmnopqrstuvwxyz",
      retVal = "";

      var uppercase = document.getElementById("uppercase");   
      if (uppercase.checked == true){
      charset += uppercase.value;
      }

      var numeric = document.getElementById("numeric");   
      if (numeric.checked == true){
      charset += numeric.value;
      }  
 
      var special = document.getElementById("special");   
      if (special.checked == true){
      charset += special.value;
      } 

  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

