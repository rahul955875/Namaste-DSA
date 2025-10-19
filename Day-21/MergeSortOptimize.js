function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let p1 = left.length - 1;
  let p2 = right.length - 1;
  let n = left.length + right.length - 1;
  while (p2 >= 0) {
    if (left[p1] > right[p2]) {
      left[n--] = left[p1--];
    } else {
      left[n--] = right[p2--];
    }
  }
  return left;
}

console.log(mergeSort([4, 5, 455, -3, 43, 0, -39, 4]));
// console.log(merge([2, 3, 5], [-1, 4, 6]));
