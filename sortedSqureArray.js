let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let sortedSqureArray = (arr) => {
  let squred = arr.map((i) => i * i);
  squred.sort((a, b) => a - b);

  return squred.join(" ");
};
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
console.log(sortedSqureArray(arr));
