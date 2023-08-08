const MergeSort = (arr) => {
    if (arr.length < 2) {
      return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
  
    return merge(MergeSort(left), MergeSort(right));
  };
  
  const merge = (left, right) => {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    for (let k = 0; k < left.length + right.length; k++) {
      if (i >= left.length) {
        sortedArray[k] = right[j];
        j++;
      } else if (j >= right.length || left[i] <= right[j]) {
        sortedArray[k] = left[i];
        i++;
      } else {
        sortedArray[k] = right[j];
        j++;
      }
    }
    return sortedArray;
  };
  
  let arr = [3, 1, 3, 11, 4, 9, 2, 12, 10];
  console.log(MergeSort(arr));
  
