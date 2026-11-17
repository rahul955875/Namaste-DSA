/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const sorteds1 = s1.split('').sort().join('')
  let left = 0;
  let cord = sorteds1.length
  let right = s2.length-1
  while(left<=right){
    
    const stringSlice = s2.slice(left,cord).split('').sort().join('')
    console.log(stringSlice,'==>',sorteds1)
    if(stringSlice===sorteds1){
      return true
    }
    left++
    cord++
  }
  return false
};

console.log(checkInclusion("abcdxabcde", "abcdeabcdx"));
console.log(checkInclusion("ab","eidbaooo"))
console.log(checkInclusion("ab","eidboaoo"))
console.log(checkInclusion("a","a"))