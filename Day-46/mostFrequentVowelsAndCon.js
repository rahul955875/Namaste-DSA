/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const hashConsonent = {};
  const hashVowels = {};

  for (let i = 0; i < s.length; i++) {
    console.log(/['aioue']/gi.test(s[i]));
    if (/['aioue']/gi.test(s[i])) {
      if (hashVowels[s[i]]) {
        hashVowels[s[i]]++;
      } else {
        hashVowels[s[i]] = 1;
      }
    } else {
      if (hashConsonent[s[i]]) {
        hashConsonent[s[i]]++;
      } else {
        hashConsonent[s[i]] = 1;
      }
    }
  }
  let conMax = 0;
  let VowMax = 0;
  for (let key in hashConsonent) {
    if (conMax < hashConsonent[key]) {
      conMax = hashConsonent[key];
    }
  }
  for (let key in hashVowels) {
    if (VowMax < hashVowels[key]) {
      VowMax = hashVowels[key];
    }
  }
  console.log(hashConsonent, hashVowels);
  return conMax + VowMax;
};
console.log(maxFreqSum("success"));
