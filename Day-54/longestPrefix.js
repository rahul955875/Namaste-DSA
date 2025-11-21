var longestCommonPrefix = function (strs) {
  let x = 0;
  let str = strs[0];
  while (x < str.length) {
    let ch = str[x];
    for (let i = 1; i < strs.length; i++) {
      if (ch !== strs[i][x] || strs[i].length === x) {
        return str.substring(0, x);
      }
    }
    x++;
  }
  return str;
};
