let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let MakePalindrome = (str, n) => {
  let rev = str.split("").reverse().join("");
  if (n === 0) {
    return str + rev;
  } else {
    return str + rev.slice(1);
  }
};
let str = readLine();
let n = parseInt(readLine());
console.log(MakePalindrome(str, n));
