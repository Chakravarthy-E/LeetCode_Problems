/**
 * 347. Top K Frequent Elements
Medium

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 
 */

const topKFrequent = (nums, k) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  let sorted = [...map.keys()]
    .sort((a, b) => map.get(b) - map.get(a))
    .slice(0, k);
  return sorted;
};
const nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(topKFrequent(nums, k));
