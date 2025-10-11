function findSumOfN(n) {
  if (n === 1) return 1;
  return n + findSumOfN(n - 1);
}

console.log(findSumOfN(5))