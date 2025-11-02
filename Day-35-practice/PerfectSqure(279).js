var numSquares = function (n) {
  let sqrt = Math.floor(Math.sqrt(n));
  let remain = n;
  let totalCount = 0;

  while (remain) {
    totalCount += Math.floor(remain / sqrt ** 2);
    remain = remain % sqrt ** 2;
    if (remain === 0) {
      return totalCount;
    }
    sqrt--;
  }
};

console.log(numSquares(12));
