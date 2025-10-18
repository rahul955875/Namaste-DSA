// insertion sort for decresing num.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let prev = i;
    let curr = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < curr) {
        arr[j + 1] = arr[j];
        prev--;
      } else {
        break;
      }
    }
    arr[prev] = curr;
    // console.log("---------");
  }
  return arr;
}
console.log(insertionSort([-77, 100, 300, 2, 54, 6, -6, 3, -5]));
//the thing in this algo is that the second loop is still runnig so we break when thier in no mathed conditon .
