/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const n = nums2.length;
  const ans = Array(nums1.length).fill(-1);
  stack.push(nums2[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (top > nums2[i]) {
        for (let j = 0; j < nums1.length; j++) {
          if (nums2[i] === nums1[j]) {
            ans[j] = nums2[top - i];
          }
        }
      } else {
        stack.pop();
      }
    }
    stack.push(i);
  }
  console.log(ans);
  return ans;
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
