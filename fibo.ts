// practice dynamic programming
//
// O(n) time complexity
// O(n) space complexity
//
// best profit, min cost, max score
// number of combinations
// can/cannot reach

function _fibonucci(n: number): number {
  const dp = new Array(n).fill(0);
  if (n == 1 || n == 2) {
    return n;
  }
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n - 1];
}

console.log(_fibonucci(5)); // Output: 8
console.log(_fibonucci(6)); // Output: 13
console.log(_fibonucci(7)); // Output: 21
console.log(_fibonucci(8)); // Output: 34
