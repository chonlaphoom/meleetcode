// dynamic programing
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let df = new Array(nums.length).fill(false);
  df[nums.length - 1] = true;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= nums.length - 1) {
      df[i] = true;
    }
    let c = nums[i];
    while (c != 0) {
      if (df[i] == true) {
        break;
      }
      if (df[c + i] == true) {
        df[i] = true;
        break;
      }
      c--;
    }
  }
  return df[0];
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
console.log(canJump([2, 0])); // true
console.log(canJump([1, 2, 3])); // true
console.log(canJump([1, 0, 1])); // false
console.log(canJump([2, 5, 0, 0])); // true

// pure greedy
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump2 = function (nums) {
  let df = new Array(nums.length).fill(false);
  df[nums.length - 1] = true;
  let lastPos = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= lastPos) {
      lastPos = i;
    }
  }
  return lastPos == 0;
};
