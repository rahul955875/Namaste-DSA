const largestOddNumber = function (nums) {
  let x = nums.length - 1;
  while (x >= 0) {
    if (nums[x] % 2 !== 0 && nums[x] != 0) {
      return nums.slice(0, x + 1);
    }
    x--;
  }
  return "";
};

console.log(largestOddNumber("239537672423884969653287101"));
