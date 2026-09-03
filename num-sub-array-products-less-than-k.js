/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let windows = 1;
    if (nums[i] * windows >= k) {
      continue;
    }
    counter++;
    windows *= nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (windows * nums[j] >= k) {
        break;
      } else {
        counter++;
        windows *= nums[j];
      }
    }
  }
  return counter;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // Output: 8
console.log(numSubarrayProductLessThanK([1, 2, 3], 0)); // Output: 0
console.log(numSubarrayProductLessThanK([1, 2, 3], 10)); // Output: 6
