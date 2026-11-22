var checkString = function (s) {
  let isB = false;
  for (let i = 0; i < s.length; i++) {
    if (isB && s[i] === "a") return false;
    if (s[i] === "b") isB = true;
  }
  return true;
};

let s1 = "aaabbb"
let s2 = "abab"
let s3 = 'bbb'
console.log(checkString(s1))
console.log(checkString(s2))
console.log(checkString(s3))