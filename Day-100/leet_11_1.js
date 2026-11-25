/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let pa = 0;
  let pb = height.length - 1;
  let max = 0;
  while (pa < pb) {
    let xDiff = pb - pa;
    let maxHeight = Math.min(height[pa], height[pb]);

    const result = xDiff * maxHeight;
    max = Math.max(result, max);
    if (height[pa] > height[pb]) {
      pb--;
    } else {
      pa++;
    }
  }
  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
