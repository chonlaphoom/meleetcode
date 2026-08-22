// dynamic programming
function rob(nums: number[]): number {
  if (nums.length == 1) {
    return nums.at(0)!;
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }

  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
}

console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([2, 7, 9, 3, 1])); // Output: 12
console.log(rob([2, 1, 1, 2])); // Output: 4
console.log(rob([1, 3, 1, 3, 100])); // Output: 103
console.log(rob([4, 1, 2, 7, 5, 3, 1])); // Output: 14
