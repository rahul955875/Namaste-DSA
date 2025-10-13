var search = function (nums, target) {
  let left = 0;
  let right = nums.length;
  while (right > left) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = right - mid;
    } else {
      left = left + mid;
    }
  }
  return -1;
};
//
console.log(search([-1, 0, 3, 5, 9, 12], 9));
