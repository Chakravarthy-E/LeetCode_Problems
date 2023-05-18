let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let matrixTranspose = (arr) => {
  let row = arr.length;
  let col = arr[0].length;
  let transpose = [];
  for (let i = 0; i < col; i++) {
    transpose[i] = [col];
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      transpose[j][i] = arr[i][j];
    }
  }
  return transpose;
};
let [n, m] = readLine().split(" ").map(Number);
let arr = [];
for (let i = 0; i < n; i++) {
  let matrix = readLine().split(" ").map(Number);
  arr.push(matrix);
}
console.log(matrixTranspose(arr));
