/*Special Ops
Coders here is a simple task for you, you have given an array of size N and an integer M. Your task is to calculate the difference between maximum sum and minimum sum of N-M elements of the given array.

Constraints:
1<=t<=10
1<=n<=1000
1<=a[i]<=1000
Input
First line contains an integer T denoting the number of testcases. First line of every testcase contains two integer N and M. Next line contains N space separated integers denoting the elements of array

Output
For every test case print your answer in new line

Example
Input:

1
5 3
1 2 3 4 5
Output:

6
Explanation:
M is 3 and N is 5 so you have to calculate maximum and minimum sum using (5-3 =) 2 elements. Maximum sum using the 2 elements would be (4+5=)9. Minimum sum using the 2 elements would be (1+2=)3. Difference will be 9-3=6.

*/

let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let SpecialOps = (n, m, arr) => {
  arr.sort((a, b) => a - b);
  let max = 0;
  let min = 0;
  for (let i = m; i < n; i++) {
    max += arr[i];
  }
  for (let i = 0; i < m; i++) {
    min += arr[i];
  }
  return max - min;
};
let k = parseInt(readLine());
for (let i = 0; i < k; i++) {
  let [n, m] = readLine().split(" ").map(Number);
  let arr = readLine().split(" ").map(Number);
  console.log(SpecialOps(n, m, arr));
}
