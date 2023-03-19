function findPairs(arr, sum) {
  // let set = new Set()
  // console.log(set)
  // for(let i=0; i<arr.length; i++){
  //     if(set.has(sum - arr[i])){
  //         console.log(arr[i],sum-arr[i])
  //         break;

  //     }else{
  //         set.add(arr[i])
  //     }
  // }
  let hm = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hm.has(arr[i])) {
      hm.set(arr[i], hm.get(arr[i]) + 1);
    } else {
      hm.set(arr[i], 1);
    }
  }
  console.table(hm);

 

}
const arr = [3, 5, 1, 0, 8, 5, 7, 10, 2];
const sum = 10;
findPairs(arr, sum);
