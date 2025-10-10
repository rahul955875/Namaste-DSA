function findSingleNumber(array) {
  let xor = array[0];
  for (let i = 1; i < array.length; i++) {
    xor = xor ^ array[i];
  }
  return xor;
}
// console.log(findSingleNumber([1, 1, 2, 2, 5, 3, 3]));

function findSingleNumber(array) {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else {
      hash[array[i]]++;
    }
  }
  for (const key in hash) {
    if (hash[key] === 1) {
      return key;
    }
  }
  return 0;
}
console.log(findSingleNumber([1, 1, 2, 2, 5, 5, 3, 3]));
