function squareRoot(x) {
  if (x < 2) return x;
  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = l + Math.floor((right - left) / 2);
    if (mid ** 2 === x) return mid;
    if (mid ** 2 > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
