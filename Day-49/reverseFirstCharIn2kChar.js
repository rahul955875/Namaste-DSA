/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let count = 2 * k;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (count === 2 * k) {
      result += s[i + 1];
      result += s[i];
      i++;
      count = k;
    } else {
      result += s[i];
      count++;
    }
  }
  return result;
};
