/**
 * 342. Power of Four
Easy
3.2K
346
Companies
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

 

Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true
 
 */
const powerOfFour = (n) => {
  let x = 0;
  while (4 ** x < n) {
    x++;
  }
  return 4 ** x === n;
};
let n = 5;
console.log(powerOfFour(n));
