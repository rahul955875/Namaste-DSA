// knuth morris Pratt algorithm for substring search notes.
function KMPSearch(pattern, text) {
  const M = pattern.length;
  const N = text.length;

  // create lps[] that will hold the longest prefix suffix
  // values for pattern
  const lps = computeLPSArray(pattern);
  let i = 0; // index for text[]
  let j = 0;
  while (i < N) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }
    if (j === M) {
      return i - j; // found pattern at index (i - j)
    } else if (i < N && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return -1; // pattern not found
}

function computeLPSArray(pattern) {
  const M = pattern.length;
  const lps = new Array(M).fill(0);
  let len = 0; // length of the previous longest prefix suffix
  let i = 1;
  while (i < M) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}
