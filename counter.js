/**
 * 
 * 
Code

Testcase
Testcase
Result

2620. Counter
Easy
Companies
Hint
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

 

Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 
 */

function createCounter(initialValue) {
    let count = initialValue;
  
    return function () {
      return count++;
    };
  }
  
  function executeCounterCalls(initialValue, calls) {
    const counter = createCounter(initialValue);
    const results = [];
  
    for (let i = 0; i < calls.length; i++) {
      if (calls[i] === "call") {
        results.push(counter());
      }
    }
  
    return results;
  }
  
  // Example 1:
  const n1 = 10;
  const calls1 = ["call", "call", "call"];
  const output1 = executeCounterCalls(n1, calls1);
  console.log(output1); // Output: [10, 11, 12]
