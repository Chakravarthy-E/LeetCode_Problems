/**
 
Code

Testcase
Test Result
Test Result

40. Combination Sum II
Medium
Topics
Companies
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]
 
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let paths = [];

  find(target, [], 0, candidates, paths);

  return paths;
};
function find(target, currPath, index, candidates, paths) {
  if (target === 0) {
    paths.push(currPath.slice());
    return;
  } else {
    while (index < candidates.length && target - candidates[index] >= 0) {
      find(
        target - candidates[index],
        [...currPath, candidates[index]],
        index + 1,
        candidates,
        paths
      );
      index++;
      while (candidates[index - 1] === candidates[index]) index++;
    }
  }
}
let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;

console.log(combinationSum2(candidates, target));
