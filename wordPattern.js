/**
 * 290. Word Pattern
Easy
6.7K
830
Companies
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 */
const wordPattern = (pattern, s) => {
  const str = s.split(" ");
  if (str.length !== pattern.length) return false;
  let map1 = new Map();
  let map2 = new Map();

  for (let i in pattern) {
    if (map1.get(pattern[i]) !== map2.get(str[i])) return false;
    map1.set(pattern[i], i);
    map2.set(str[i], i);
  }
  return true;
};
let pattern = "abba",
  s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
