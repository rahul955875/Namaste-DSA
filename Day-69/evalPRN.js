/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const res = [];
  const op = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(+tokens[i])) {
      res.push(tokens[i]);
    } else {
      const b = res.pop();
      const a = res.pop();
      res.push(op[tokens[i]](+a, +b));
    }
  }
  return +res.pop();
};
console.log(evalRPN(["2", "1", "+", "3", "*"]));
