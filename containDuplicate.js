/**
 * 217. Contains Duplicate
Easy
10.4K
1.2K
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:
 */
const containDuplicates = (nums) => {
  //   let map = {};
  //   for (let num of nums) {
  //     map[num] = (map[num] || 0) + 1;
  //   }
  //   for (let key in map) {
  //     if (map[key] > 1) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  let set = new Set();
  for (let item of nums) {
    if (!set.has(item)) {
      set.add(item);
    }
  }
  if (nums.length !== set.size) {
    return true;
  } else {
    return false;
  }
};
const nums = [2, 14, 18, 22, 22];
console.log(containDuplicates(nums));
