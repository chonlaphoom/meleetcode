// use backtracking TC:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  let path = [];

  /**
   * @param {number} start
   */
  function backtrack(start) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  }
  backtrack(0);
  return result;
};

console.log(subsets([1, 2, 3])); // Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
// console.log(subsets([0])); // Output: [[], [0]]
// console.log(subsets([1, 2])); // Output: [[], [1], [2], [1, 2]]
// console.log(subsets([])); // Output: [[]]
// console.log(subsets([1, 2, 3, 4])); // Output: [[], [1], [2], [3], [4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]
