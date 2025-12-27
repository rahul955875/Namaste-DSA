var findClosestElements = function (arr, k, x) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (arr[m + k] - x < x - arr[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  const ans = [];
  for (let i = r; i < l + k; i++) {
    ans.push(arr[i]);
  }
  return ans;
};
