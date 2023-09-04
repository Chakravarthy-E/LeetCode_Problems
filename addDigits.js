/**
 * 258. Add Digits
Easy
4.4K
1.9K
Companies
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1
 

Follow up: Could you do it without any loop/recursion in O(1) runtime?
 */
const addDigits = (num) => {
  if (num < 10) {
    return num;
  } else {
    num = [...num.toString()].reduce((a, c) => a + Number(c), 0);
    return addDigits(num);
  }
};
let num = 38;
console.log(addDigits(num));