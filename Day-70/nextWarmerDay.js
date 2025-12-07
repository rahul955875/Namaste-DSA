var dailyTemperatures = function (arr) {
  const stack = [];
  const n = arr.length;
  const ans = Array(n).fill(0);
  stack.push(n - 1);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (arr[i] >= arr[top]) {
        stack.pop();
      } else {
        ans[i] = top - i;
        break;
      }
    }
    stack.push(i);
  }
  return ans;
};
