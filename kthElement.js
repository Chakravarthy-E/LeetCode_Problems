/**
 215. Kth Largest Element in an Array
Medium
15.6K
735
Companies
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 */
const KthLargestElement = (nums, k) => {
  let sortedArray = nums.sort((a, b) => b - a);
  let map = {};
  for (let num of sortedArray) {
    map[num] = (map[num] || 0) + 1;
  }
  return map;
};
let nums = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(KthLargestElement(nums, k));
