// Use the “last move” mental model
// dynamic programing
// so I should of if I already knew the answer for smaller cases, how would I build this one?”
//
function coinChange(coins: number[], amount: number): number {
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  const dp = new Array(amount + 1).fill(Infinity);
  // dp[x] -> x is amount and dp[x] is minimum number of coins

  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        const diff = dp[i - coins[j]] + 1;
        if (diff < dp[i]) dp[i] = diff;
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // Output: 3 (11 = 5 + 5 + 1)
console.log(coinChange([2], 3)); // Output: -1 (not possible to make 3 with only 2s)
console.log(coinChange([1], 0)); // Output: 0 (no coins needed to make 0)
