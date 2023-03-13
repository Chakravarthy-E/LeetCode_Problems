/**
 * Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 */

// let PalindromeNumber = (x) => {
//   let str = x.toString();
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
//       return false;
//     }
//   }
//   return true;
// };

// let x = 10;
// console.log(PalindromeNumber(x));
let PalindromeNumber = (num) => {
  let x = num.toString();
  let reverse = "";
  for (let i = x.length - 1; i >= 0; i--) {
    reverse += x[i];
  }
  if (x === reverse) {
    return true;
  } else {
    return false;
  }
};
let num = 121;
console.log(PalindromeNumber(num));
