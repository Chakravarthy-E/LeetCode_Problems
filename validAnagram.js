/**
 * 242. Valid Anagram
Easy
10.1K
321
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */
const validAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
};
const s = "anagram",
  t = "nagaram";
console.log(validAnagram(s, t));
