/**
 * 504. Base 7
Easy
732
216
Companies
Given an integer num, return a string of its base 7 representation.

 

Example 1:

Input: num = 100
Output: "202"
Example 2:

Input: num = -7
Output: "-10"
 
 */
const base7 = (num) => {
  return num.toString(7);
};
let num = -7;
console.log(base7(num));
