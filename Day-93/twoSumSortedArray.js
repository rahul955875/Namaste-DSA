var twoSum = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
