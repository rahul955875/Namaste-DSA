function getSum(array) {
  if (array.length === 1) return array[0];
  return array[0] + getSum(array.slice(1, array.length));
}

console.log(getSum([1, 2, 3, 4, 5]));
