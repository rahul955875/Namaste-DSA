var maxFreqSum = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  let vowelFreq = 0;
  let consoFreq = 0;

  for (const key in map) {
    if (/['aioue']/gi.test(key)) {
      if (vowelFreq < map[key]) {
        vowelFreq = map[key];
      }
    } else {
      if (consoFreq < map[key]) {
        consoFreq = map[key];
      }
    }
  }

  return vowelFreq + consoFreq;
};

console.log(maxFreqSum("success"));
