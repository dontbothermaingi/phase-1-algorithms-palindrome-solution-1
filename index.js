function isPalindrome(word) {
  // Write your algorithm here

  // convert the word to lower Case
  const cleanWord = word.toLowerCase()

  // create a reversed word
  const reversedWord = cleanWord.split('').reverse().join('');
  
  // return true if the the owrd is a paliondrome otherwise return false
  return cleanWord === reversedWord;
}

/* 
  Add your pseudocode here
  1.Change the word to lowercase
  2.reverse the word
  3.compare the reversed word to the original word
  4.If they are similar return true otherwise false
*/

/*
  Add written explanation of your solution here
  the function first cleans the input word by changing it to lowercase.
  then the input word is reversed.
  after that the input word is compared to the reversed word.
  then if the two words match return true otherwise return false 
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
