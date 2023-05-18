/**
 * merge_list
Description
Given M sorted lists each containing N elements print them in sorted order efficiently.

Input
The first two lines of the input consists of two numbers M and N. The next M lines contain N space separated integers each.

Output
Print M*N integers sorted in ascending order.

Constraints
M>1
N>1
Sample cases
Input

3
4
2 6 12 34 
1 9 20 1000 
23 34 90 2000

Output 1 2 6 9 12 20 23 34 34 90 1000 2000
 */

let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};
let merge = (left,right) => {
        let sortedArray = []
        let i = 0
        let j = 0;
    for(let k =0 ; k< left.length + right.length ;k++){
        if( i >= left.length){
            sortedArray[k] = right[j]
            j++;
        }else if(j >= right.length ){
            sortedArray[k] = left[i]
            i++
        }
        else if(left[i] <= right[j]){
            sortedArray[k] = left[i]
            i++
        }
        else{
            sortedArray[k] = right[j]
            j++
        }
    }
    return sortedArray;

}
let t = parseInt(readLine());
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < t; i++) {
  let a = readLine().split(" ").map(Number);
  arr.push(...a);
}
console.log(mergeSort(arr));
