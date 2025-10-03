var isPalindrome = function (x) {
  if (x < 0) return false;
  let xCopy = x;
  let result = 0;
  while (x > 0) {
    let rem = x % 10;
    result = result * 10 + rem;
    x = Math.floor(x / 10);
  }
  return result === xCopy;
};

function isPalindromEfficent(x) {
  if (x < 0 || x % 10 === 0) return false;
  let reversedHalf = 0;
  while (reversedHalf < x) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reversedHalf === x || x === Math.floor(reversedHalf / 10);
}

console.log(isPalindromEfficent(3443));
