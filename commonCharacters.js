/**
 * 1002. Find Common Characters
Easy
Topics
Companies
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 */

const commonChars = (words) => {
  let common = [];
  let first_word = [...words[0]];
  for (let letter of first_word) {
    if (words.every((word) => word.includes(letter))) {
      common.push(letter);
      words = words.map((word) => word.replace(letter, ""));
    }
  }

  return common;
};
let words = ["bella", "label", "roller"];
console.log(commonChars(words));
