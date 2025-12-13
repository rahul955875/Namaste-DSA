//binary search algorithm
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSquare = mid ** 2;
    if (midSquare === x) return mid;
    if (midSquare > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};
console.log(mySqrt(8)); //2
