// use map, math
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let ans = new Array(tasks.length * n).fill("idle");
  if (n === 0) return tasks.length;
  tasks = tasks.sort((a, b) => (a > b ? 1 : -1));
  let count = 1;
  let m = new Map();
  for (let i = 1; i < tasks.length; i++) {
    if (tasks[i - 1] == tasks[i]) {
      count++;
    } else {
      m.set(tasks[i - 1], count);
      count = 1;
    }
  }
  m.set(tasks[tasks.length - 1], count);

  let maxFreq = 0;
  for (const [v, i] of m) {
    maxFreq = Math.max(i, maxFreq);
  }
  let numMax = 0;
  for (const [v, i] of m) {
    if (i == maxFreq) {
      numMax++;
    }
  }

  return Math.max((maxFreq - 1) * (n + 1) + numMax, tasks.length);
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // Output: 8
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 0)); // Output: 6
console.log(leastInterval(["A", "C", "A", "B", "D", "B"], 1)); // Output: 6
console.log(
  leastInterval(
    ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"],
    2,
  ),
); // Output: 13
