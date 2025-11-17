const reverStr = (s, k) => {
  s = s.split("");
  const mid = Math.floor(k / 2);
  for (let i = 0; i < s.length; i += 2 * k) {
    for (let j = 0; j < mid; j++) {
      const temp = s[i + j];
      s[i + j] = s[i + k - j - 1];
      s[i + k - j - 1] = temp;
    }
  }
  return s.join("");
};
//time complextiy : o(n)
//spance complexity : o(n)
console.log(reverStr("abcedfge", 2));
