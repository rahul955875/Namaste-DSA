var guess = function (num, pick) {
  if (num === pick) return 0;
  else if (num > pick) return -1;
  else return 1;
};

var guessNumber = function (n, pick) {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const res = guess(mid, pick);

    if (res === 0) {
      return mid;
    } else if (res === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(guessNumber(10, 6));
