// Use the “last move” mental model
// This is bottom-up (iteration)
// dynamic programing
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

// console.log(coinChange([1, 2, 5], 11)); // Output: 3 (11 = 5 + 5 + 1)
// console.log(coinChange([2], 3)); // Output: -1 (not possible to make 3 with only 2s)
// console.log(coinChange([1], 0)); // Output: 0 (no coins needed to make 0)

// start from top down recursion

function coinChangeAgain(coins: number[], amount: number): number {
  if (amount == 0) return 0;
  let memo = new Map();

  function minCoinToMakeAmount(amount: number): number {
    if (memo.has(amount)) return memo.get(amount);

    if (amount == 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }

    let use = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      let m = minCoinToMakeAmount(amount - coin);
      if (m != -1) {
        use = Math.min(m + 1, use);
      }
    }
    let a = use != Number.MAX_SAFE_INTEGER ? use : -1;
    memo.set(amount, a);

    return a;
  }
  let use = minCoinToMakeAmount(amount);

  return use != Number.MAX_SAFE_INTEGER ? use : -1;
}

console.log(coinChangeAgain([1, 2, 5], 11)); // Output: 3 (11 = 5 + 5 + 1)
console.log(coinChangeAgain([2], 3)); // Output: -1 (not possible to make 3 with only 2s)
console.log(coinChangeAgain([1], 0)); // Output: 0 (no coins needed to make 0)
