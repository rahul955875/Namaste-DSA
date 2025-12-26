//find k closest elements to x in a sorted array
const findKClosests = (arr, k, x) => {
  const n = arr.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr.slice(left, left + k);
};
