function findSecondLargestNum(array) {
  let largestNum = -Infinity;
  let secondLarget = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (largestNum < array[i]) {
      secondLarget = largestNum;
      largestNum = array[i];
    } else if (secondLarget < array[i]) {
      secondLarget = array[i];
    }
  }
  return secondLarget;
}

console.log(findSecondLargestNum([1, 192, 100, 23, 23, 73, 86, 23]));
