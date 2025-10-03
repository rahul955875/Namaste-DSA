var reverse = function (x) {
  const xCopy = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (rev > 2 ** 31 || rev < -(2 ** 31)) {
    return 0;
  }
  return xCopy < 0 ? -rev : rev;
};

console.log(reverse(4343));
