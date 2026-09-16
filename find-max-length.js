/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  if (nums.length === 1) return 0;

  let currentSum = 0;
  let prefixSum = { 0: -1 };
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentSum += 1;
    } else {
      currentSum -= 1;
    }

    // if current sum - any previous prefix = 0
    if (prefixSum[currentSum] !== undefined) {
      const length = i - prefixSum[currentSum];
      count = Math.max(length, count);
    } else {
      prefixSum[currentSum] = i;
    }
  }
  return count;
};

console.log(findMaxLength([0, 1])); // Output: 2
console.log(findMaxLength([0, 1, 0])); // Output: 2
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0])); // Output: 6
