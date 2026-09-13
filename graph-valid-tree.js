// classic, create graph then traverse to each node but keep parent so we can check if node is circular
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  if (edges.length != n - 1) {
    return false;
  }
  const graph = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const stack = [[0, -1]];
  const visited = new Set();
  while (stack.length > 0) {
    const [curr, from] = stack.pop();
    if (visited.has(curr)) {
      continue;
    }
    visited.add(curr);
    for (const neighbor of graph[curr]) {
      if (!visited.has(neighbor)) {
        stack.push([neighbor, curr]);
      } else {
        if (neighbor != from) {
          return false;
        }
      }
    }
  }

  return visited.size === n;
};

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ]),
); // true
console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ]),
); // false
console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ]),
); // false
