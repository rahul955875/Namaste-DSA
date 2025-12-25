/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) {
      return nums[m];
    }
    if (nums[m] === nums[m - 1]) {
      const isOdd = (m - 2 - l + 1) % 2 !== 0;
      if (isOdd) {
        r = m - 2;
      } else {
        l = m + 1;
      }
      console.log(l, r);
    } else {
      const isOdd = (m + 2 - r + 1) % 2 !== 0;
      console.log(isOdd);
      if (isOdd) {
        l = m + 2;
      } else {
        r = m - 1;
      }
    }
  }
  return nums[r];
};
