/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length == 1) {
    return 0;
  }
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) max += prices[i] - prices[i - 1];
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 7
console.log(maxProfit([1, 2, 3, 4, 5])); // Output:4
console.log(maxProfit([6, 1, 3, 2, 4, 7])); // Output: 7
