function mergeSortedArray(num1, m, num2, n) {
  const xnum1 = num1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (xnum1[p1] < num2[p2] && p1 < m)) {
      num1[i] = xnum1[p1];
      p1++;
    } else {
      num1[i] = num2[p2];
      p2++;
    }
  }
}
//[1,2,4,]

// with low space time complexity
function mergeSortedArray2(num1, m, num2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (num1[p1] > num2[p2] && p1 >= 0) {
      num1[i] = num1[p1--];
    } else {
      num1[i] = num2[p2--];
    }
  }
}
const num1 = [1, 2, 4, 5];
mergeSortedArray2(num1, 4, [4, 5, 6], 3);
console.log(num1);
