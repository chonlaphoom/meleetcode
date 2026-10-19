/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  if (k > nums.length) {
    return 0;
  }

  let max = -Infinity;
  const map = new Map();
  let currSum = 0;
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
    currSum += nums[end];
    map.set(nums[end], (map.get(nums[end]) || 0) + 1);
    if (end - start + 1 === k) {
      if (map.size === k) {
        max = Math.max(max, currSum);
      }
      currSum -= nums[start];
      map.set(nums[start], map.get(nums[start]) - 1);
      if (map.get(nums[start]) === 0) {
        map.delete(nums[start]);
      }
      start++;
    }
  }

  return max === -Infinity ? 0 : max;
};

console.log(maximumSubarraySum([1, 2, 3, 4, 5], 2)); // Output: 9
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 3)); // Output: 12
console.log(maximumSubarraySum([1, 2, 3, 4, 5], 4)); // Output: 14
