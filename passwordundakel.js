function generatePassword(length, isUpper, isLower, isDigit, isSymbol) {
  let finalPassword = "";
  let secondPassword = [];
  let firstPassword = [];
  let i = 0;

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (isUpper) firstPassword += upperCaseChars;
  if (isUpper) firstPassword += lowerCaseChars;
  if (isUpper) firstPassword += numberChars;
  if (isUpper) firstPassword += symbolChars;

//   console.log("\nFirst Temporary Password : " + firstPassword);

  while (i != firstPassword.length) {
    const randomIndex = Math.floor(Math.random() * firstPassword.length);
    secondPassword += firstPassword[randomIndex % firstPassword.length];
    i++;
  }
//   console.log("\nSecond Temporary Password : " + secondPassword);
  i = 0; 
  while (i != length) {
    const randomIndex = Math.floor(Math.random() * secondPassword.length);
    finalPassword += secondPassword[randomIndex % secondPassword.length];
    i++;
  }
  
  return finalPassword;
}

console.log("\nFinal  Password Generated : " + generatePassword(10, true, true, false, false) + "\n");
