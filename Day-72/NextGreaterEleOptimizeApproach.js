var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = {};
  const n = nums2.length;
  stack.push(nums2[n - 1]);
  map[nums2[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (top > nums2[i]) {
        map[nums2[i]] = top;
        break;
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) map[nums2[i]] = -1;
    stack.push(nums2[i]);
  }
  return nums1.map((n) => map[n]);
};
