
  // Write your algorithm here
  function isPalindrome(word) {
    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        newWord += word[i];
  }
return (newWord === word)
}


/* 
  Add your pseudocode here
//initialize a function to be true only for palindrom words

if element is a palindrome: push item to be true or false

return result

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
