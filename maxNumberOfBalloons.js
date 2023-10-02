/**
 * 1189. Maximum Number of Balloons
Easy
Topics
Companies
Hint
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:



Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
 */

var maxNumberOfBalloons = function (text) {
  const map = {};
  const balloon = "balloon";
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    map[text[i]] = map[text[i]] > 0 ? map[text[i]] + 1 : 1;
  }

  while (true) {
    for (let i = 0; i < balloon.length; i++) {
      if (map[balloon[i]] > 0) {
        map[balloon[i]]--;
      } else {
        return count;
      }
    }
    count++;
  }

};
let text = "nlaebolko";
console.log(maxNumberOfBalloons(text));
