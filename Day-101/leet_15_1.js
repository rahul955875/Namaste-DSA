/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let fixer = 0;
  const result = [];
  let i = 1;
  let j = nums.length - 1;

  while (fixer < nums.length) {
    if (nums[fixer] === nums[fixer - 1]) {
      fixer++;
      i++;
      continue;
    }
    let group = [];
    while (i < j) {
      const sum = nums[i] + nums[j];
      if (sum + nums[fixer] === 0) {
        console.log(fixer, i, j);
        group.push(nums[fixer]);
        group.push(nums[i]);
        group.push(nums[j]);
        i++;
        j--;
        while (i < j && nums[i] === nums[i - 1]) i++;
      } else if (sum + nums[fixer] < 0) {
        i++;
      } else {
        j--;
      }
      //   console.log(group, "group", i, j, sum + nums[fixer]);
      if (group.length) {
        result.push(group);
        group = [];
      }
    }

    fixer++;
    i = fixer + 1;
    j = nums.length - 1;
  }
  return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([1, 2, 0, 1, 0, 0, 0, 0]));
console.log(
  threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10]),
);
