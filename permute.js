/**
 * 46. Permutations
Medium
Topics
Companies
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 */

var permute = function (nums) {
  if (nums.length === 1) {
    return [nums.slice()];
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let n = nums.shift();
    var perums = permute(nums.slice());
    for (var p of perums) {
      p.push(n);
    }
    res.push(...perums);
    nums.push(n);
  }
  return res;
};
let nums = [1, 2, 3];
console.log(permute(nums));
