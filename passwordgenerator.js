// Arrays of characters to be included in password
const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
    const length = parseInt(prompt('Enter password length (between 8 and 128):'));
    
    while (isNaN(length) || length < 8 || length > 128) {
      alert('Please enter a valid password length.');
      length = parseInt(prompt('Enter password length (between 8 and 128):'));
    }
  
    const includeSpecial = confirm('Include special characters?');
    const includeNumeric = confirm('Include numeric characters?');
    const includeLowercase = confirm('Include lowercase characters?');
    const includeUppercase = confirm('Include uppercase characters?');
  
    if (!includeSpecial && !includeNumeric && !includeLowercase && !includeUppercase) {
      alert('Please select at least one character type.');
      return null;
    }
  
    return {
      length,
      includeSpecial,
      includeNumeric,
      includeLowercase,
      includeUppercase
    };
  }

  // Function to get a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  const options = getPasswordOptions();

  if (!options) {
    return ''; // User canceled or provided invalid options
  }

  let characters = [];
  if (options.includeSpecial) characters = characters.concat(specialCharacters);
  if (options.includeNumeric) characters = characters.concat(numericCharacters);
  if (options.includeLowercase) characters = characters.concat(lowerCasedCharacters);
  if (options.includeUppercase) characters = characters.concat(upperCasedCharacters);

  let password = '';
  for (let i = 0; i < options.length; i++) {
    password += getRandom(characters);
  }

  return password;
}

// Get references to the #generate element
const generateBtn = document.getElementById('generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.getElementById('password');

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);