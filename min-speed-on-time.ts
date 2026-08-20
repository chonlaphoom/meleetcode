// binary search + greedy
function minSpeedOnTime(dist: number[], hour: number): number {
  const n = dist.length;
  if (n - 1 >= hour) return -1;

  let min = 1;
  let max = Math.ceil(dist[n - 1] / (hour - (n - 1)));

  while (min < max) {
    const mid = min + Math.floor((max - min) / 2);
    if (isOnTime(dist, hour, mid)) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }
  return max;
}

function isOnTime(dist: number[], hour: number, spd: number): boolean {
  let total = 0;
  const last = dist.length - 1;
  for (let i = 0; i < last; i++) {
    // interger ceiling division formula, its equal to
    // total += Math.ceil(dist[i] / spd);
    total += Math.floor((dist[i] + spd - 1) / spd);
  }
  total += dist[last] / spd;
  return total <= hour;
}

console.log(minSpeedOnTime([1, 3, 2], 6)); // Output: 1
console.log(minSpeedOnTime([1, 3, 2], 2.7)); // Output: 3
console.log(minSpeedOnTime([1, 3, 2], 1.9)); // Output: -1
console.log(minSpeedOnTime([1, 1, 100000], 2.01)); // Output: 10000000
