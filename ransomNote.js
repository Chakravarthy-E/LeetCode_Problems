/**
 * 
Code

Testcase
Testcase
Result

383. Ransom Note
Easy
Topics
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 */

const canConstruct = (ransomNote, magazine) => {
  for (let char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  return !ransomNote ? true : false;
};
const ransomNote = "aa",
  magazine = "aab";
console.log(canConstruct(ransomNote, magazine));
