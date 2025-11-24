var groupAnagrams = function (strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedKey = strs[i].split("").sort().join("");
    if (map[sortedKey]) {
      map[sortedKey].push(strs[i]);
    } else {
      map[sortedKey] = [strs[i]];
    }
  }

  return Object.values(map);
};

//time complexity : o(n * k log k) where n is the number of strings and k is the maximum length of a string
//space complexity : o(n) for the hashmap to store the grouped anagrams
