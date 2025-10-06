function removeElement(a, val) {
  let x = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== val) {
      a[x++] = a[i];
    }
  }
  return x;
}
console.log(removeElement([1, 2, 2, 3, 3, 4, 5, 6], 2));
