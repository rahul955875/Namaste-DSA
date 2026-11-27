/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
     nums.sort((a,b)=>a-b)
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            twoSum(ans, i, nums)
        }
    }
    return ans
};

const twoSum = (arr, x, nums) => {
    let i = x + 1
    let j = nums.length - 1
    while (i < j) {
        const sum = nums[i] + nums[j] + nums[x]
        if (sum === 0) {
            arr.push([nums[i], nums[j], nums[x]])
            i++
            j--
            while (i < j && nums[i] === nums[i - 1]) i++
        } else if (sum > 0) {
            j--
        } else {
            i++
        }
    }

}