function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
console.log(selectionSort([-2, 77, 2, -3, 5, -1, 100, 99, 88, 23, 3]));
console.log(selectionSort([-2, 88, 23, 3]));
