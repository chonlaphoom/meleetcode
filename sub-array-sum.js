/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let m = { 0: 1 };
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (m[sum - k] != undefined) {
      count += m[sum - k];
    }
    m[sum] = (m[sum] || 0) + 1;
  }
  return count;
};

console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2
