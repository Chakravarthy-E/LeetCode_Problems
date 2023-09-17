/**
 * 49. Group Anagrams
Medium
Topics
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 */

var groupAnagrams = (strs) => {
  const map = new Map();
  for (const word of strs) {
    const key = [...word].sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }
  return Array.from(map.values());
};
const str = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(str));

const person = {
  name: "Chakri",
  age: "23",
};

console.log(Array.from(person));
