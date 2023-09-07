/**459. Repeated Substring Pattern
Easy
6.1K
480
Companies
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 */
const repeatedSubstring = (s) => {
  let double = s + s;
  let sub = double.slice(1, -1);
  return sub.includes(s)
};
let s = "abaaba";
console.log(repeatedSubstring(s));
