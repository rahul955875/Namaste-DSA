function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currValue = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (currValue < arr[j]) {
        arr[j + 1] = arr[j];
      }
      if (j == 0 && arr[j] > currValue) {
        arr[0] = currValue;
      }
    }
  }
  return arr;
}
console.log(insertionSort([54, 23, 4, 4, -54, 3, 4, -1, 5, 34]));
