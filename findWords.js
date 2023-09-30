/**
 * 1160. Find Words That Can Be Formed by Characters
Easy
Topics
Companies
Hint
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 */

const strToCntArr = (str) => {
  const arr = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) arr[str.charCodeAt(i) - 97]++;

  return arr;
};

const countCharacters = (words, chars) => {
  let sum = 0;

  const have = strToCntArr(chars);

  outer: for (const word of words) {
    have;
    if (chars.length < word.length) continue;

    const need = strToCntArr(word);

    for (let i = 0; i < 26; i++) if (have[i] < need[i]) continue outer;

    sum += word.length;
  }

  return sum;
};
const words = ["cat", "bt", "hat", "tree"],
  chars = "atach";

console.log(countCharacters(words, chars));
