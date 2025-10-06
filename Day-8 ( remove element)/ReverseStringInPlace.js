function reverseString(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let x = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = x;
  }
  return array;
}
const array = ["h", "e", "l", "l", "o"];
console.log(reverseString(array));
