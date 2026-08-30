// proudly use dynamic programming
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] == 1) return 0;
  let dp = Array.from({ length: obstacleGrid.length }, () =>
    Array(obstacleGrid[0].length).fill(0),
  );
  dp[0][0] = 1;
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (obstacleGrid[i][j] == 1) continue;
      if (i == 0 && j == 0) continue;
      if (i == 0) {
        dp[i][j] = dp[i][j] + dp[0][j - 1];
      } else if (j == 0) {
        dp[i][j] = dp[i][j] + dp[i - 1][0];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
); // Output: 2
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ]),
); // Output: 1
console.log(uniquePathsWithObstacles([[1, 0]])); // Output: 0
