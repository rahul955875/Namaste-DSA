/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const n = nums2.length;
  const ans = Array(nums2.length).fill(-1);
  const result = [];
  stack.push(nums2[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (top > nums2[i]) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(nums2[i]);
  }
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i]);
    if (index >= 0) {
      result[i] = ans[index];
    } else {
      result[i] = -1;
    }
  }
  return result;
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
