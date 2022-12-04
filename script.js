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
  selectedCharacter = [];
  characterLength = parseInt(
    prompt(
      "How many characters would you like your password to be? (minimum 10 characters, maximum 64 characters"
    )
  );

  if (isNaN(characterLength) || characterLength < 10 || characterLength > 64) {
    alert(
      "Please try again. Character length must be a number, between 10 - 64 characters."
    );
    return false;
  }

  if (
    confirm("Would you like to include special characters in your password?")
  ) {
    selectedCharacter = selectedCharacter.concat(specialCharacters);
  }

  if (confirm("Would you like to include numbers in your password?")) {
    selectedCharacter = selectedCharacter.concat(numericCharacters);
  }

  if (
    confirm("Would you like to include lowercase letters in your password?")
  ) {
    selectedCharacter = selectedCharacter.concat(lowerCasedCharacters);
  }

  if (
    confirm("Would you like to include uppercase letters in your password?")
  ) {
    selectedCharacter = selectedCharacter.concat(upperCasedCharacters);
  } else {
    alert('You must select at least one character set');
    return false;
  } 
  return true;
}


// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < characterLength; i++)
    var arr = Math.floor(Math.random() * selectedCharacter.length);
  return arr;
}

// Function to generate password with user input
function generatePassword() {
  var genPass = "";
  for (var i = 0; i < characterLength; i++) {
    genPass = genPass + selectedCharacter[getRandom()];
  }

  return genPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var correctOptions = getPasswordOptions();

  if (correctOptions) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);