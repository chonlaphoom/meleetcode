// need to know that, optimal way is to skip 1 stone
function maxJump(stones: number[]): number {
  if (stones.length < 2) {
    return 0;
  }
  if (stones.length === 2) {
    return stones[1] - stones[0];
  }

  let maxJumpDistance = 0;
  for (let i = 2; i < stones.length; i++) {
    maxJumpDistance = Math.max(maxJumpDistance, stones[i] - stones[i - 2]);
  }

  return maxJumpDistance;
}

console.log(maxJump([0, 2, 5, 6, 7])); // Output: 5
console.log(maxJump([0, 3, 9])); // Output: 9
