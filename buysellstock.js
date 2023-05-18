let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// let BuySellStock = (arr, n) => {
//   let min = Infinity;
//   let max = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     } else if (arr[i] - min > max) {
//       max = arr[i] - min;
//     }
//   }
//   return max;
// };
// let arr = readLine().split(" ").map(Number);
// let n = arr.length;
// console.log(BuySellStock(arr, n));
const maxProfit = (prices) => {
    let left = 0; 
    let max_profit = 0;
    for ( let right = 1;right < prices.length ; right++) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
    }
    return max_profit;
  };
