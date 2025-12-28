var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const wanted = target - nums[i];
    if (map[wanted] >= 0 && map[wanted] !== i) {
      return [map[wanted], i];
    } else {
      map[(nums[i], i)];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
