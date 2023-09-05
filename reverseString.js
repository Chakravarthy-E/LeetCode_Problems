/**344. Reverse String
Easy
7.8K
1.1K
Companies
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character. */

const reverseString = (s) => {
   s = s.reverse();
  return s;
};
let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
