const findSingleElemntInSortedArray = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (mid % 2 === 0) {
      if (nums[mid] === nums[mid + 1]) {
        l = mid + 2;
      } else {
        r = mid;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
  }
  return nums[l];
};
