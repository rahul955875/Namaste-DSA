var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    if (nums[l] <= nums[r]) {
      return nums[l];
    }
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] < nums[m - 1]) {
      return nums[m];
    }
    if (nums[m] >= nums[l]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
};
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
