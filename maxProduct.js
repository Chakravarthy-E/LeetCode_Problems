/**
 * 628. Maximum Product of Three Numbers
Easy
Topics
Companies
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6
 */
const maxProductOfThreeNumbers = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let leng = nums.length;
  const case1 = nums[leng - 1] * nums[leng - 2] * nums[leng - 3];
  const case2 = nums[0] * nums[1] * nums[leng - 1];
  return Math.max(case1, case2);
};
const nums = [-100, -98, -1, 2, 3, 4];
console.log(maxProductOfThreeNumbers(nums));
