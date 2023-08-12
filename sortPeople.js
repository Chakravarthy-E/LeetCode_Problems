/**
 * 2418. Sort the People
Easy
1K
17
Companies
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

 

Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.
Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
 */

const sortThePeople = (names, heights) => {
  let people = [];
  for (let i = 0; i < names.length; i++) {
    const person = {
      name: names[i],
      height: heights[i],
    };
    people.push(person);
  }
  people.sort((a, b) => b.height - a.height);
  const sortedNames = people.map((person) => person.name);
  return sortedNames;
};

let names = ["Mary", "John", "Emma"],
  heights = [180, 165, 170];
console.log(sortThePeople(names, heights));
