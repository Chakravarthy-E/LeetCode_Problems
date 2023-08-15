/**
 * 7. Reverse Integer
Medium
11.4K
12.6K
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 */
const reverseInteger = (x) => {
  let isNegative = x < 0;
  let str = Math.abs(x).toString();
  let rev = str.split("").reverse().join("");
  let revNum = parseInt(rev, 10) * (isNegative ? -1 : 1);
  return revNum;
};
let x = -120;
console.log(reverseInteger(x));


//optimize solution

/**
 function reverse(x) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  let reversed = 0;

  while (x !== 0) {
    const pop = x % 10;
    x = (x / 10) | 0;

    if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && pop > 7)) return 0;
    if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && pop < -8)) return 0;

    reversed = reversed * 10 + pop;
  }

  return reversed;
}

// Example usage
console.log(reverse(123));   // Output: 321
console.log(reverse(-123));  // Output: -321
console.log(reverse(120));   // Output: 21

 */