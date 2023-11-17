/**
 * 1089. Duplicate Zeros
Easy
Topics
Companies
Hint
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
 */

var duplicateZeros = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
    }
  }
  return arr;
};

const arr = [1, 0, 2, 3, 0, 4, 5, 0];

console.log(duplicateZeros(arr));
