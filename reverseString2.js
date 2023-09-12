/**
 * 541. Reverse String II
Easy
1.8K
3.4K
Companies
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 */
const reverseString2 = (s, k) => {
  for (let i = 0; i < s.length; i = i + 2 * k) {
    s =
      s.slice(0, i) +
      s
        .substring(i, i + k)
        .split("")
        .reverse()
        .join("") +
      s.slice(i + k);
  }
  return s;
};
const s = "abcdefg",
  k = 2;
console.log(reverseString2(s, k));
