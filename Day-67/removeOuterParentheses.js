var removeOuterParentheses = function (s) {
  const stack = [];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
    if (stack.length > 1 || (stack.length === 1 && s[i] == ")")) {
      result += s[i];
    }
  }
  return result;
};
console.log(removeOuterParentheses("(()())(())(()(()))"));
