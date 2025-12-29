var isSubsequence = function (s, t) {
  let start = 0;
  let sStart = 0;
  while (start < t.length && sStart < s.length) {
    if (s[sStart] === t[start]) {
      sStart++;
    }
    start++;
  }
  return sStart === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
