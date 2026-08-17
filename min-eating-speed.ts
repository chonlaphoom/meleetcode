// binary search with saperation of concerns
function minEatingSpeed(piles: number[], h: number): number {
  let lowerBound = 1;
  let upperBound = Math.max(...piles);

  while (lowerBound < upperBound) {
    const mid = lowerBound + Math.floor((upperBound - lowerBound) / 2);
    if (canEat(piles, h, mid)) {
      upperBound = mid;
    } else {
      lowerBound = mid + 1;
    }
  }

  return lowerBound;
}

// saperation of concern
function canEat(p: number[], h: number, c: number) {
  let startHour = 0;
  for (const pi of p) {
    startHour += Math.ceil(pi / c);
  }
  return startHour <= h;
}

function test() {
  console.log(minEatingSpeed([3, 6, 7, 11], 8));
  console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
  console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
}

test();
/*
Input: piles = [3,6,7,11], h = 8
Output: 4

Input: piles = [30,11,23,4,20], h = 5
Output: 30

Input: piles = [30,11,23,4,20], h = 6
Output: 23
*/
