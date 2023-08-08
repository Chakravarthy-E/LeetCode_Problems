let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
//-------------------------------------------
let uniqueCharacter = (str) => {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (!count[str[i]]) {
      count[str[i]] = 1;
    } else {
      count[str[i]]++;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return i;
    }
  }
  return -1;
};
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let str = readLine();
  console.log(uniqueCharacter(str));
}
