const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (map[t[j]] && map[t[j]] >= 0) {
      map[t[j]]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
//time complexity : o(n)
//space complexity : o(1) since the size of the hashmap will be at most 26 for lowercase letters
