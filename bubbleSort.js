function swap(arr, i) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}

function inOrder(arr, i) {
  return arr[i] <= arr[i + 1];
}

function bubbleSort(arr) {
  for (let j = arr.length; j > 0; j--) {
    let swapped = false;
    for (let i = 0; i < j - 1; i++) {
      if (!inOrder(arr, i) && arr[i + 1]) {
        swap(arr, i);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
