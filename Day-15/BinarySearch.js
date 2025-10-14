var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
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
//wrong answer
console.log(search([-8, -7, -1, 0, 5, 7], 5));
