/**
 * 500. Keyboard Row
Easy
1.4K
1.1K
Companies
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

 

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 */

const keyBoardRow = (words) => {
  const result = [];
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  words.forEach((word) => {
    const lowerWord = new Set(word.toLowerCase());
    if (
      isSubset(lowerWord, row1) ||
      isSubset(lowerWord, row2) ||
      isSubset(lowerWord, row3)
    ) {
      result.push(word);
    }
  });

  return result;
};

const isSubset = (subset, set) => {
  for (const char of subset) {
    if (!set.has(char)) {
      return false;
    }
  }
  return true;
};

const words = ["adsdf","sfd"];
console.log(keyBoardRow(words));
