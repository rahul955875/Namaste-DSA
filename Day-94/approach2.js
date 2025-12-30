var strStr = function (haystack, needle) {
  const m = haystack.length;
  const n = needle.length;

  for (let i = 0; i <= m - n; i++) {
    let j = 0;
    for (; j < n; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
    }
    if (j === n) return i;
  }
  return -1;
};

console.log(strStr("sturdaysad", "sad"));
