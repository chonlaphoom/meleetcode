// basic math. O(n) time complexity, O(1) space complexity
function numberOfChild(n: number, k: number): number {
  let n_idx = 0;
  let direction = +1;
  while (k > 0) {
    if (n_idx == n - 1) {
      direction = -1;
    } else if (n_idx == 0) {
      direction = +1;
    }
    n_idx += 1 * direction;
    k--;
  }

  return n_idx;
}

console.log(numberOfChild(3, 5)); // Output: 1
console.log(numberOfChild(5, 6)); // Output: 2
console.log(numberOfChild(4, 2)); // Output: 2
