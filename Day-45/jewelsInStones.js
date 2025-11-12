//brute force approach
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAzzza"));

//optimize approach
var numJewelsInStones = function (jewels, stones) {
  let set = new Set([...jewels]); //s.c - o(1) 52 eng letters overall tc = o(n) sp = o(1)
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) {
      //searching o(1)
      count++;
    }
  }
  return count;
};
