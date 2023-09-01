/**
 * 231. Power of Two
Easy
5.8K
374
Companies
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

 

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
 

Constraints:

-231 <= n <= 231 - 1
 

Follow up: Could you solve it without loops/recursion?
 */
const powerOfTwo = (n) => {
  let x = 0;
  while (2 ** x < n) {
    x++;
  }
  return 2 ** x === n;

};
let n = 4;
console.log(powerOfTwo(n));

/**
  while(2**x < 2){
    x++
    0+1
}
 */
