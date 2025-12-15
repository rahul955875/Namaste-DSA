var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const midInd = l + Math.floor((r - l) / 2);
    if (nums[midInd] === target) return midInd;

    if (nums[midInd] >= nums[l]) {
      if (target < nums[midInd] && target >= nums[l]) {
        r = midInd - 1;
      } else {
        l = midInd + 1;
      }
    } else {
      if (target > nums[midInd] && target <= nums[r]) {
        l = midInd + 1;
      } else {
        r = midInd - 1;
      }
    }
  }
  return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
