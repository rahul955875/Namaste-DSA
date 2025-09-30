function findLargestNum(array) {
  let largestNum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (largestNum < array[i]) {
      largestNum = array[i];
    }
  }
  return largestNum;
}

console.log(findLargestNum([1, 2, 4, 5, 6, 23, 23, 73, 86, 23]));
