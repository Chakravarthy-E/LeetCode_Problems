/*
2648. Generate Fibonacci Sequence
Easy
Companies
Hint
Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

 

Example 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
Example 2:

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted
 */

var fibGenerator = function* () {
  yield 0;
  yield 1;
  let vals = [0, 1];
  while (true) {
    vals.push(vals[vals.length - 1] + vals[vals.length - 2]);
    yield vals[vals.length - 1];
  }
};
const callCount = 5;
console.log(fibGenerator(callCount));
