/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let max = Math.max(...nums);
  const points = new Array(max + 1).fill(0); // max+1 because array start at index 0 but I want to know max upto index max
  for (const num of nums) {
    points[num] += num;
  }

  let previous2 = 0;
  let previous1 = 0;
  for (let i = 0; i <= max; i++) {
    let curr = Math.max(points[i] + previous2, previous1);
    previous2 = previous1;
    previous1 = curr;
  }

  return previous1;
};

console.log(deleteAndEarn([3, 4, 2])); // 6
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])); // 9
console.log(deleteAndEarn([1, 1, 1])); // 3
