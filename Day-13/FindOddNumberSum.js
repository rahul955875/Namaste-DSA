function findSumOfOdd(n) {
  if (n === 0) return nums[n] % 2 === 0 ? 0 : nums[n];
  return (nums[n] % 2 === 0 ? 0 : nums[n]) + findSumOfOdd(n - 1);
}
const nums = [7, 5, 3, 4, 2, 1];
console.log(findSumOfOdd(nums.length - 1));
