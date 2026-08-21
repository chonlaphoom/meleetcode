let m = new Map<number, number>();
function climbStairs(n: number): number {
  if (n == 1) return 1;
  if (n == 2) return 2;
  return fibonucci(n);
}

function fibonucci(n: number): number {
  if (n == 1) {
    m.set(1, 1);
    return 1;
  }
  if (n == 2) {
    m.set(2, 2);
    return 2;
  }
  if (m.has(n)) return m.get(n)!;
  m.set(n, fibonucci(n - 1) + fibonucci(n - 2));

  return fibonucci(n - 1) + fibonucci(n - 2);
}

console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
