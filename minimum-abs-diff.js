// use nested loops to solve, but I can optimize it to O(nlogn) by sorting the array and only checking adjacent pairs for minimum difference
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let minimum = Number.MAX_SAFE_INTEGER;
  ans = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let n = Math.abs(arr[j] - arr[i]);
      if (n > minimum) {
        break;
      }
      if (n < minimum) {
        ans = [];
      }
      minimum = Math.min(n, minimum);
      ans.push([arr[i], arr[j]]);
    }
  }
  return ans;
};

console.log(minimumAbsDifference([4, 2, 1, 3])); // [[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1, 3, 6, 10, 15])); // [[1,3]]
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); // [[-14,-10],[19,23],[23,27]]
console.log(minimumAbsDifference([-20, 11, 26, 27, 40])); // [[26,27]]
