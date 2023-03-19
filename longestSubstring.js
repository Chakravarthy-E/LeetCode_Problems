let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let LongestSubstring = (str) => {
  let map = new Map();
  let j = 0;
  let maxLen = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (map.has(char) && map.get(char) >= j) {
      j = map.get(char) + 1;
    }
    map.set(char, i);
    maxLen = Math.max(maxLen, i - j + 1);
  }
  return maxLen;
};
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
  let str = readLine();
  console.log(LongestSubstring(str));
}
