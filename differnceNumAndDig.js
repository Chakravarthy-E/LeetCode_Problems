/**
 * 2535. Difference Between Element Sum and Digit Sum of an Array
Easy
528
13
Companies
You are given a positive integer array nums.

The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.

Note that the absolute difference between two integers x and y is defined as |x - y|.

 

Example 1:

Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Explanation:
The element sum of nums is 1 + 2 + 3 + 4 = 10.
The digit sum of nums is 1 + 2 + 3 + 4 = 10.
The absolute difference between the element sum and digit sum is |10 - 10| = 0.
 */
const diifernceBetweenNumAndDigit = (nums) => {
  let elementSum = 0;
  let digitSum = 0;
  let element = nums.join("").split("").map(Number);
  for (let i = 0; i < element.length; i++) {
    elementSum += element[i];
  }
  for (let i = 0; i < nums.length; i++) {
    digitSum += nums[i];
  }
  return Math.abs(elementSum - digitSum);
};
let nums = [1,2,3,4]
console.log(diifernceBetweenNumAndDigit(nums));
