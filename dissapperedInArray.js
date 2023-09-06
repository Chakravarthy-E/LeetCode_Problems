/**
 * 448. Find All Numbers Disappeared in an Array
Easy
8.9K
449
Companies
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]
 */
const dissaperedInArray = (nums) => {
  const n = nums.length;
  const set = new Set(nums);
  const disappearedNumbers = [];

  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      disappearedNumbers.push(i);
    }
}
return disappearedNumbers;
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(dissaperedInArray(nums));
