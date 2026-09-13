// use dynamic programming aprroach, find maximum that robber can rob for each index
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const maxUpto = new Array(nums.length).fill(0);
  let previous2 = 0;
  let previous1 = 0;
  for (let i = 0; i < maxUpto.length; i++) {
    const current = Math.max(previous2 + nums[i], previous1);
    previous2 = previous1;
    previous1 = current;
  }
  return previous1;
};

console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([2, 7, 9, 3, 1])); // Output: 12
console.log(rob([2, 1, 1, 2])); // Output: 4
