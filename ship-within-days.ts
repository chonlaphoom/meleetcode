// // binary search with saperation of concerns
function shipWithinDays(weights: number[], days: number): number {
  const lowerBound = Math.max(...weights);
  const highest = weights.reduce((c, v) => {
    c = c + v;
    return c;
  }, 0);
  let left = lowerBound;
  let right = highest;
  while (left < right) {
    const mid = Math.floor((highest - lowerBound) / 2);
    if (canShip(weights, days, mid)) {
      right = mid;
    } else {
      left = left + 1;
    }
  }
  return left;
}

function canShip(weights: number[], days: number, cap: number): boolean {
  let daysneed = 1;
  let currentLoad = 0;
  for (const w of weights) {
    if (currentLoad + w > cap) {
      daysneed++;
      currentLoad = w;
    } else {
      currentLoad += w;
    }
  }
  return daysneed <= days;
}
