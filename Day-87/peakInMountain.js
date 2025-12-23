// peak in mountain array

var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (arr[m] > arr[m + 1] && arr[m] > arr[m - 1]) {
      return m;
    }
    if (arr[m] > arr[m + 1]) {
      r = m;
    } else {
      l = m;
    }
  }
};
console.log(peakIndexInMountainArray([0, 2, 1, 0])); //1 index
