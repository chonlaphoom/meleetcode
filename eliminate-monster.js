// sort and Math
/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  let turns = dist
    .map((d, i) => {
      return Math.ceil(d / speed[i]);
    })
    .sort((a, b) => a - b);

  for (let i = 0; i < turns.length; i++) {
    if (turns[i] - i == 0) {
      return i;
    }
  }
  return turns.length;
};

console.log(eliminateMaximum([1, 3, 4], [1, 1, 1])); // 3
console.log(eliminateMaximum([1, 1, 2, 3], [1, 1, 1, 1])); // 1
console.log(eliminateMaximum([3, 2, 4], [5, 3, 2])); // 1
