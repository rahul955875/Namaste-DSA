function countDigits(digit) {
  if (digit === 0) return 1;
  digit = Math.abs(digit);
  let count = 0;
  while (digit > 0) {
    digit = Math.floor(digit / 10);
    count++;
  }
  return count;
}
console.log(countDigits(5349874927432)); //13
