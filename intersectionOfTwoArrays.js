/**
 * 349. Intersection of Two Arrays
Easy
5.2K
2.2K
Companies
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
Accepted
911K
Submissions
1.3M
Acceptance Rate
71.5%
 */
const IntersectionofTwoArrays = (nums1, nums2) => {
  let num1Set = new Set(nums1);
  let set = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (num1Set.has(nums2[i])) set.add(nums2[i]);
  }
  return Array.from(set);
};
let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

console.log(IntersectionofTwoArrays(nums1, nums2));
