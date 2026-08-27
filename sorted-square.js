/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const temp = [];
  let i = 0;
  for (const n of nums) {
    temp.push(n ** 2);
    i++;
  }
  return temp.sort((a, b) => a - b);
};
