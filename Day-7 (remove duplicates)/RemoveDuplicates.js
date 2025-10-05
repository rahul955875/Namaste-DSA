function removeDuplicates(array) {
  let x = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[x]) {
      array[++x] = array[i];
    }
  }
  return x + 1;
}
// console.log(removeDuplicates([1, 1, 2]));

function removeDuplicates2(array) {
  let x = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      array[x++] = array[i];
    }
  }
  return x;
}
console.log(removeDuplicates2([1, 1, 2, 3, 3, 3, 4, 5, 6, 7, 7]));
