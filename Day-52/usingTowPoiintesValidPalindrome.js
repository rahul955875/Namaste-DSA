function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s.match(/[^'a-z0-9']/i)) {
      left++;
      continue;
    }
    if (s.match(/[^'a-z0-9']/gi)) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome("A man , a plan, a canal: Panama"));
