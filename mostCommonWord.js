/**
 819. Most Common Word
Easy
Topics
Companies
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 

Example 1:

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
Example 2:

Input: paragraph = "a.", banned = []
Output: "a"
 */

var mostCommonWord = function (paragraph, banned) {

  const words = paragraph.toLowerCase().match(/\b\w+\b/g);

  const wordCount = {};
  words.forEach((word) => {
    if (!banned.includes(word)) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  }); 
  
  let mostCommon = [];
  let maxCount = 0;

  Object.entries(wordCount).forEach(([word, count]) => {
    if (count > maxCount) {
      mostCommon = [word];
      maxCount = count;
    } else if (count === maxCount) {
      mostCommon.push(word);
    }
  });

  return mostCommon[0];
};

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
  banned = ["hit"];
console.log(mostCommonWord(paragraph, banned));
