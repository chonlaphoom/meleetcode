// use prefix sum and hash map to find the number of subarrays that sum to k
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let currentSum = 0;
  let count = 0;
  const prefixSum = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (prefixSum[currentSum - k] != undefined) {
      // If currentSum - k exists in the prefixSum, it means there is a subarray that sums to k
      count += prefixSum[currentSum - k];
    }
    prefixSum[currentSum] = (prefixSum[currentSum] || 0) + 1;
  }
  return count;
};

console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2
