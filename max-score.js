/*
 * @param {number[]} cardPoints
 * @param {number}
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += cardPoints[i];
  }
  let max = sum;
  const lastIndex = cardPoints.length - 1;
  for (let round = 1; round <= k; round++) {
    sum = sum - cardPoints[k - round] + cardPoints[lastIndex - round + 1];
    max = Math.max(sum, max);
  }
  return max;
};

(() => {
  console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
})();

(() => {
  console.log(maxScore([2, 2, 2], 2));
})();

(() => {
  console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
})();
