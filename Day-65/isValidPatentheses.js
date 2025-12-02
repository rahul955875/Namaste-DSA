const isValid = function (s) {
  const stack = [];
  const pMap = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (pMap[s[i]]) {
      stack.push(s[i]);
    } else {
      const top = stack.pop();
      if (!top || pMap[top] !== s[i]) {
        return false;
      }
    }
  }
  return !stack.length;
};

console.log(isValid("(){}[)")); //false
