var groupAnagrams = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const charaKey = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      charaKey[strs[i][j].charCodeAt() - "a".charCodeAt()]++;
    }
    let key = "";
    for (let k = 0; k < charaKey.length; k++) {
      key += String.fromCharCode(k + "a".charCodeAt()) + charaKey[k];
    }
    if (map[key]) {
      map[key].push(strs[i]);
    } else {
      map[key] = [strs[i]];
    }
  }
  return Object.values(map);
};

//time complexity : o(n * k) where n is the number of strings and k is the maximum length of a string
//space complexity : o(n) for the hashmap to store the grouped anagrams
