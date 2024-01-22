function split(wholeArray) {
  const half = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, half);
  const secondHalf = wholeArray.slice(half);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let i1 = 0;
  let i2 = 0;
  let mergedArr = [];
  while (i1 < arr1.length || i2 < arr2.length) {
    if (arr1[i1] < arr2[i2] || !arr2[i2]) {
      mergedArr.push(arr1[i1]);
      i1++;
    } else {
      mergedArr.push(arr2[i2]);
      i2++;
    }
  }
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let [arr1, arr2] = split(arr);
  return merge(mergeSort(arr1), mergeSort(arr2));
}
