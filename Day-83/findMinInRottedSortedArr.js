var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] >= nums[l] && nums[l] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[r];
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
