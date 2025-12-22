var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  const ans = [-1, -1];
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      ans[0] = m;
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) {
      l = m + 1;
      ans[1] = m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return ans;
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
