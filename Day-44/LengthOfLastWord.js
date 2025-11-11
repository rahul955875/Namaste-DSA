var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  let count = 0;
  for (let i = n; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (count > 0 && s[i] === " ") {
      break;
    }
  }
  return count;
};

const lengthOfLastWord = (s) => {
  let n = s.length - 1;
  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
};
