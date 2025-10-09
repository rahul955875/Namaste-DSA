function maxConsecutiveOnes(array) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      count++;
    } else {
      if (max < count) {
        max = count;
      }
      count = 0;
    }
  }
  return max > count ? max : count;
}
console.log(maxConsecutiveOnes([1, 1, 1, 1, 0, 1, 1, 1, 0])); //3
