/**
 * 844. Backspace String Compare
Easy
Topics
Companies
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 */
const backspaceCompare = (s, t) => {
  const removeSpace = (str) => {
    return str.split("").reduce((acc, item) => {
      if (item !== "#") {
        acc.push(item);
      } else {
        acc.pop();
      }
      return acc;
    }, []);
  };
  return removeSpace(s).join("") === removeSpace(t).join("");
};
const s = "ab#c",
  t = "ad#c";
console.log(backspaceCompare(s, t));
