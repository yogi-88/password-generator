// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Enter the length of password you need to create"));
  while (passwordLength < 10 || passwordLength > 64 ){
    passwordLength = prompt("Password length should be between 10 and 64 and should be integer, Please enter correct integer for password length")
    
  }
  var confirmLowerCase = confirm("Do you need Lower case in your password?");
  var confirmUpperCase = confirm("Do you need Upper case in your password?");
  var confirmNumeric = confirm("Do you need numeric characters in your password?");
  var confirmSpecialchars = confirm("Do you need Special characters in your password?");
  // if (!confirmLowerCase && !confirmUpperCase && !confirmNumeric && !confirmSpecialchars) {
  //   alert("You must choose at least one character type!")
  //   return;
  // }
  return {"passwordLength" : passwordLength,
          "confirmLowerCase" : confirmLowerCase,
          "confirmUpperCase" : confirmUpperCase,
          "confirmNumeric" : confirmNumeric ,
          "confirmSpecialchars" : confirmSpecialchars};
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)]
  return randomElement;
}


// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions();
  var possibleCharacters = [];
  if (passwordOptions["confirmLowerCase"]) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters)
  }
  if(passwordOptions["confirmUpperCase"]) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters)
  }
  if(passwordOptions["confirmNumeric"]) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
  }
  if(passwordOptions["confirmSpecialchars"]) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
  }
  console.log(possibleCharacters);
  console.log(passwordOptions["passwordLength"]);
  console.log(getRandom(possibleCharacters));


 let password = "";
  for (let i = 0; i < passwordOptions["passwordLength"]; i++){
    password = password + getRandom(possibleCharacters)
  }
  console.log(password);
  return password;

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);