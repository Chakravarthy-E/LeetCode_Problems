/**
 * 
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 
 */
const rorateArray = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  return nums;
};
let nums = [-1, -100, 3, 99],
  k = 2;
console.log(rorateArray(nums, k));

/**
 * const n = nums.length;
  k = k % n; // Handle cases where k is larger than n
  if (k < 0) {
    k = k + n; // Handle negative k values
  }

  const rotated = new Array(n);

  for (let i = 0; i < n; i++) {
    const newIndex = (i + k) % n;
    rotated[newIndex] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }

  return nums;
 */
