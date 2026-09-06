/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {string}
 */
var findSpecialNodes = function (n, edges) {
  // build graph
  const graph = buildGraph(edges);

  // find farthest
  const { farIndex: farIndexA } = bfs(0, graph);
  const { dist: distA, farIndex: farIndexB } = bfs(farIndexA, graph);
  const { dist: distB } = bfs(farIndexB, graph);
  const diameter = distA[farIndexB];
  let str = "";
  for (let i = 0; i < graph.length; i++) {
    const max = Math.max(distB[i], distA[i]);
    if (max == diameter) {
      str += "1";
    } else {
      str += "0";
    }
  }
  return str;
};

/**
 * @param {number[][]} edges
 * @return {number[][]}
 */
var buildGraph = function (edges) {
  const graph = Array.from(
    {
      length: edges.length + 1,
    },
    () => [],
  );

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

/**
 * @param {number} start start node
 * @param {{ dist: number[], farIndex: number }}
 */
var bfs = function (start, graph) {
  let dist = Array.from({ length: graph.length }, () => -1);
  let queue = [start];
  dist[start] = 0;
  let index = 0;
  let farIndex = start;
  while (index < queue.length) {
    const current = queue[index++];
    for (const v of graph[current]) {
      const notVisited = dist[v] === -1;
      if (notVisited) {
        dist[v] = dist[current] + 1;
        if (dist[v] > dist[farIndex]) farIndex = v;
        queue.push(v);
      }
    }
  }
  return { dist, farIndex };
};

// 1971. Find if Path Exists in Graph
// focus: building graph from edges, basic BFS/DFS
//
// 543. Diameter of Binary Tree
// focus: diameter idea, but on binary tree structure instead of adjacency list
//
// 1245. Tree Diameter
// focus: the exact “find farthest node, then BFS again” pattern
//
// 310. Minimum Height Trees
// focus: tree center intuition, which connects nicely to diameter thinking
//
// 834. Sum of Distances in Tree
// focus: deeper tree-distance reasoning
