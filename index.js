function isPalindrome(word) {
  // Write your algorithm here
  let removeNonAlpha = /[\W_]/g // removes white spaces and non-alphanumeric characters
  let newTextWord = word.replace(removeNonAlpha , '').split('').reverse().join('')
  console.log(word === newTextWord)
  return word === newTextWord
}

isPalindrome('abba') 

/* 
  Add your pseudocode here
  **A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing
  
  steps
  ****remove all non-alphanumeric characters in the string;
  ****turn everything lower case;
  ****remove all white spaces if available => into a new array
  ****reverse the new array/string
  ****join the array into a string
  ****compare the new string with the original one
  ****if they are equal 
         return true
      otherwise 
         return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
