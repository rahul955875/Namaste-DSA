var removeOuterParentheses = function (s) {
  let count = 0;
  let res = "";
  for (const i of s) {
    if (i === "(") {
      count++;
    } else {
      count--;
    }
    if (count > 1 || (count == 1 && i == ")")) {
      res += i;
    }
  }
  return res;
};
