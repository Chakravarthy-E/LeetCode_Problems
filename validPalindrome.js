/**

 * 125. Valid Palindrome
Easy
7.8K
7.6K
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty str
 */
const validPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return s === s.split("").reverse().join("");
};
let s = "A man, a plan, a canal: Panama";
console.log(validPalindrome(s));
