// time complexity O(n)
// space complexity O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  for (const num of nums) {
    if (num === 0) continue;
    nums[left++] = num;
  }

  for (let i = left; i < nums.length; i++) {
    nums[i] = 0;
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes_alternative = function (nums) {
  let zeroPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[zeroPos], nums[i]] = [nums[i], nums[zeroPos]];
      zeroPos++;
    }
  }
  console.log(nums);
};

console.log(moveZeroes_alternative([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes_alternative([0])); // 0

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // 0
