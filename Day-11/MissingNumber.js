// range [0,n]

function findMissingNumber(nums) {
  let sum = (nums.length * (nums.length + 1)) / 2;
  let actualSum = nums.reduce((acc, curr) => acc + curr, 0);
  return sum - actualSum;
}

console.log(findMissingNumber([0, 1, 2, 3, 5]));
