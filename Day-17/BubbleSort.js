function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapping = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapping = true;
      }
    }
    if (!swapping) break;
  }
  return arr;
}
console.log(bubbleSort([77, 2, 3, 5, 1, 100, 99, 88, 23, 3]));
