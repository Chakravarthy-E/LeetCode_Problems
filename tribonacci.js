/**
 1137. N-th Tribonacci Number
Easy
Topics
Companies
Hint
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

 

Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:

Input: n = 25
Output: 1389537
 */

var tribonacci = function (n) {
  let a = 0;
  let b = 1;
  let c = 1;
  for (let i = 0; i < n; i++) {
    let temp = a + b + c;
    a = b;
    b = c;
    c = temp;
  }
  return a;
};
const n = 4;
console.log(tribonacci(n));
