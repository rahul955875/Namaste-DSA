// divide and conquer
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, mid));
  const arr2 = mergeSort(arr.slice(mid, arr.length));
  let p1 = arr1.length - 1;
  let p2 = arr2.length - 1;
  for (let i = arr1.length + arr2.length - 1; i >= 0; i--) {
    if ((arr1[p1] > arr2[p2] && p1 >= 0) || p2 < 0) {
      arr[i] = arr1[p1--];
    } else {
      arr[i] = arr2[p2--];
    }
  }
  return arr;
}
console.log(
  mergeSort([
    -74, 48, -20, 2, 10, -84, -5, -9, 11, -24, -91, 2, -71, 64, 63, 80, 28, -30,
    -58, -11, -44, -87, -22, 54, -74, -10, -55, -28, -46, 29, 10, 50, -72, 34,
    26, 25, 8, 51, 13, 30, 35, -8, 50, 65, -6, 16, -2, 21, -78, 35, -13, 14, 23,
    -3, 26, -90, 86, 25, -56, 91, -13, 92, -25, 37, 57, -20, -69, 98, 95, 45,
    47, 29, 86, -28, 73, -44, -46, 65, -84, -96, -24, -12, 72, -68, 93, 57, 92,
    52, -45, -2, 85, -63, 56, 55, 12, -85, 77, -39,
  ])
);
