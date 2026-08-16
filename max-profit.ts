// greedy algorithm
function maxProfit(prices: number[]): number {
  const days = prices.length;
  if (days == 1) return 0;
  let maxProf = 0;
  let minPrice = Number.MAX_VALUE;
  for (let i = 0; i < days; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    const profit = prices[i] - minPrice;
    if (maxProf < profit) maxProf = profit;
  }
  if (maxProf < 0) {
    return 0;
  }

  return maxProf;
}

function test() {
  console.log(maxProfit([7, 1, 5, 3, 6, 4]));
  console.log(maxProfit([7, 6, 4, 3, 1]));
  console.log(maxProfit([1, 2]));
}

test();
