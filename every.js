let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let everyIthELement = (n, arr, i) => {
  let sum = 0;
  for (let j = i - 1; j < n; j += i) {
    sum += arr[j];
  }
  return sum;
};
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
let i = parseInt(readLine());
console.log(everyIthELement(n, arr, i));
