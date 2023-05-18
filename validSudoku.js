let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let validSudoku = (matrix) => {
  for (let row = 0; row < 9; row++) {
    let map = new Map();
    for (let colomn = 0; colomn < 9; colomn++) {
      let char = matrix[row][colomn];
      if (char !== "." && map.has(char)) {
        return "False";
      }
      map.set(char);
    }
  }
  for (let colomn = 0; colomn < 9; colomn++) {
    let map = new Map();
    for (let row = 0; row < 9; row++) {
      let char = matrix[row][colomn];
      if (char !== "." && map.has(char)) {
        return "False";
      }
      map.set(char);
    }
  }
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let map = new Map();
      for (let row = i; row < 3; row++) {
        for (let colomn = j; colomn < 3; colomn++) {
          let char = matrix[row][colomn];
          if (char !== "." && map.has(char)) {
            return "False";
          }
          map.set(char);
        }
      }
    }
  }
  return "True";
};
let sudoku = [];
for (i = 0; i < 9; i++) {
  sudoku.push(readLine().split(" "));
}
console.log(validSudoku(sudoku));
