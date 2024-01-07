/**
 * 43. Multiply Strings
Medium
Topics
Companies
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
 
 */

var multiply = function (num1, num2) {
//   return String(BigInt(num1) * BigInt(num2));
  let one = BigInt(num1);
  let two = BigInt(num2);
  return String(one * two);
};
let num1 = "987654321",
  num2 = "123456789";

console.log(multiply(num1, num2));
