/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const stack = [];
  const ans = Array(n).fill(-1);
  stack.push(nums[n - 1]);

  for (let i = 2 * n - 2; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (top > nums[i % n]) {
        ans[i % n] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(nums[i % n]);
  }
  return ans;
};
