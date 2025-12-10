/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const arr = [...nums, ...nums];
  const n = arr.length;
  const stack = [];
  const ans = Array(n).fill(-1);
  stack.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (arr[i] < top) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i]);
  }
  return ans.slice(0, n / 2);
};
