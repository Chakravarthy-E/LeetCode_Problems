/**
 * 169. Majority Element
Easy
16.6K
483
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 
 */
const majorityElement = (nums) => {
  let map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let key in map) {
    if (map[key] > nums.length / 2) {
      return key;
    }
  }
};
let nums = [3, 2, 3];
console.log(majorityElement(nums));
