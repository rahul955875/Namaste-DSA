function moveZeros(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x++] = nums1[i];
    }
  }
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
}
const nums1 = [1, 2, 0, 4, 0, 0, 1];
moveZeros(nums1);
console.log(nums1);
