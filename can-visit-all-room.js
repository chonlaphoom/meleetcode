// init first queue and use BSF to checked all visit node
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const queue = [];
  const visitedNodes = new Map();
  rooms[0].forEach((room) => {
    queue.push(room);
  });
  visitedNodes.set(0, true);

  while (queue.length > 0) {
    const room = queue.pop();
    if (visitedNodes.has(room)) {
      continue;
    }

    visitedNodes.set(room, true);
    rooms[room].forEach((room) => {
      queue.push(room);
    });
  }

  return visitedNodes.size === rooms.length;
};

const tests = [
  {
    test: "canVisitAllRooms([[1], [2], [3], []])",
    pass: canVisitAllRooms([[1], [2], [3], []]) === true,
  },
  {
    test: "canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])",
    pass: canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]) === false,
  },
  {
    test: "canVisitAllRooms([[1, 2], [2, 3], [3], []])",
    pass: canVisitAllRooms([[1, 2], [2, 3], [3], []]) === true,
  },
];
console.debug(tests);
