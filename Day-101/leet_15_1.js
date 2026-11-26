/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort();
  //   console.log(nums)
  let fixer = 0;
  const result = [];
  let i = 1;
  let j = nums.length - 1;

  while (fixer < nums.length) {
    if (nums[fixer] === nums[fixer - 1]) {
      fixer++;
      continue;
    }
    let group = [];
    let firstPass = true;
    while (i < j) {
      firstPass = false;
      const sum = nums[i] + nums[j];
      if (sum + nums[fixer] === 0) {
        group.push(nums[fixer]);
        group.push(nums[i]);
        group.push(nums[j]);
        i++;
      } else if (sum < nums[fixer]) {
        i++;
      } else {
        j--;
      }
      //   console.log(group, "group", i, j, sum + nums[fixer]);
      if (group.length) {
        const duplicateCheck = result[result.length - 1] || [];

        if (
          duplicateCheck[0] != group[0] ||
          duplicateCheck[1] != group[1] ||
          duplicateCheck[2] != group[2]
        ) {
          result.push(group);
        }
        group = [];
      }
    }

    fixer++;
    i = fixer + 1;
    j = nums.length - 1;
  }
  return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([1, 2, 0, 1, 0, 0, 0, 0]));
