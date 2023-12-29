/**17. Letter Combinations of a Phone Number
Medium
Topics
Companies
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"] */

var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }

  const digitMapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const backtrack = (index, path) => {
    if (index === digits.length) {
      result.push(path.join(""));
      return;
    }

    const currentDigit = digits[index];
    const letters = digitMapping[currentDigit];

 
    for (const letter of letters) {
      path.push(letter);
      backtrack(index + 1, path);
      path.pop(); 
    }
  };

  const result = [];
  backtrack(0, []); 
  return result;
};

const digits = "7";
console.log(letterCombinations(digits));
