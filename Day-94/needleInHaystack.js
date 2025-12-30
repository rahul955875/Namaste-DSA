var strStr = function (haystack, needle) {
  const m = haystack.length;
  const n = needle.length;
  let i = 0;
  while (i <= m - n) {
    let j = 0;
    while (j < n) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
      j++;
    }
    if (j === n) return i;
    i++;
  }
  return -1;
};
console.log(strStr("hello", "ll")); //2
