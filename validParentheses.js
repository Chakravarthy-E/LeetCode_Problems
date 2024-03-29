/**
 * 20. Valid Parentheses
Easy
21.6K
1.4K
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

 */
const validParentheses = (s) => {
  let store = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{") {
      store.push("}");
    } else if (s[i] == "[") {
      store.push("]");
    } else if (s[i] == "(") {
      store.push(")");
    } else if (store.pop() !== s[i]) {
      return false;
    }
  }
  return !store.length
};
let s = "()[]{}";
console.log(validParentheses(s));
