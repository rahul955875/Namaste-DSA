/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    console.log(getPermutationForS1(s1))
    for(const s of getPermutationForS1(s1)){
        const exits =s2.includes(s)
        if(exits) return true
    }
    return false
};

const getPermutationForS1 =(s1)=>{
 const arr= s1.split("");
 const len = s1.length;
 const permutationsArr = []
 for(let i=0;i<len; i++){
    const mainChar = arr[i]
    let subString =""
    for(let j=0; j<len; j++){
        if(i !==j){
            subString+=arr[j]
        }
    }
    const permutation = mainChar + subString
    permutationsArr.push(permutation)
 }
 for(let i=len-1;i>=0; i--){
    const mainChar = arr[i]
    let subString =""
    for(let j=len-1; j>=0; j--){
        if(i !==j){
            subString+=arr[j]
        }
    }
    const permutation = mainChar + subString
    permutationsArr.push(permutation)
 }
 return permutationsArr
}
// console.log(checkInclusion(" ","eidbaooo")) works
// console.log(checkInclusion("ab","eidaooo")) works
console.log(checkInclusion("abcdxabcde","abcdeabcdx" )) //fails here

//its dont have valid permutation - not valid solution
