/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    nums[mid] > nums[mid + 1] ? (r = mid) : (l = mid + 1);
  }
  return l;
};
