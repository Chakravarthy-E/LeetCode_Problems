/**
 * 1185. Day of the Week
Easy
Topics
Companies
Hint
Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

 

Example 1:

Input: day = 31, month = 8, year = 2019
Output: "Saturday"
Example 2:

Input: day = 18, month = 7, year = 1999
Output: "Sunday"
Example 3:

Input: day = 15, month = 8, year = 1993
Output: "Sunday"
 */
const dayOfTheWeek = (day, month, year) => {
  let options = { weekday: "long" };
  let date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", options);
};
const day = 31,
  month = 8,
  year = 2019;
console.log(dayOfTheWeek(day, month, year));
// const alpha = (arr) => {
//   let str = "abcdefghijklmnopqrstuvwxyz";
//   arr = arr.toLowerCase().split("").sort()
//   let set = new Set(arr);
//   let neeArr = [...set].join("").trim()
//   return str === neeArr ? 1 : 0;
// };
// let arr = "The quick brown fox jumps over the lazy dog";

// console.log(alpha(arr));
