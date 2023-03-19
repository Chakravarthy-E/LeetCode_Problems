let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function containsAllVowels(str) {
  // Create a set of all vowels
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      vowels.delete(str[i]);
    }
    if (vowels.size === 0) {
      return "YES";
    }
  }
  return "NO";
}

// Example usage:
let n = parseInt(readLine());
const str = readLine();
console.log(containsAllVowels(str));
