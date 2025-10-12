function powerOfTow(n, count = 0) {
  if (n === 1) return [true, count];
  else if (n < 1 || n % 2 !== 0) return [false, count];

  return powerOfTow(n / 2, ++count);
}
console.log(powerOfTow(32));
