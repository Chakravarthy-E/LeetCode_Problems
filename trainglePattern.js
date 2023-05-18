let fs = require("fs");

/*let n = 5; // Change the value of n to adjust the size of the pattern

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += k === 1 ? "*" : "$*";
  }
  console.log(row);
}
*/
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    if (k === 1) {
      row += "*";
    } else {
      row += "$*";
    }
  }
  console.log(row);
}
