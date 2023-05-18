let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let transPose = (matrix) => {
  let rows = matrix.length;
  let colomn = matrix[0].length;
  let trans = [];
  for (let i = 0; i < colomn; i++) {
    trans[i] = [colomn];
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colomn; j++) {
      trans[j][i] = matrix[i][j];
    }
  }
  return trans;
};
let [k, n] = readLine().split(" ").map(Number);
let matrix = [];
for (let i = 0; i < k; i++) {
  let arr = readLine().split(" ").map(Number);
  matrix.push(arr);
}
console.log(transPose(matrix));
