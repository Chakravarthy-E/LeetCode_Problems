/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

let findLongestCommonPrefix = (strs) => {
  const N = strs.length;
  let prefix = "";
  strs.sort();
  for (let i = 0; i < strs[N - 1].length; i++) {
    if (strs[0][i] === strs[N - 1][i]) {
      prefix = prefix + strs[0][i];
    } else {
      break;
    }
  }
  if (prefix.length) {
    return prefix;
  }
  return "";
}

let strs = ["flower", "flow", "flight"];
let n = strs.length;
console.log(findLongestCommonPrefix(strs, n));
