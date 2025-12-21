var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  const ans = [-1, -1];
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  if (nums[l] === target) ans[0] = l;
  l = 0;
  r = nums.length - 1;
  while (l < r) {
    const m = l + Math.ceil((r - l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  if (nums[l] === target) ans[1] = l;
  return ans;
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
