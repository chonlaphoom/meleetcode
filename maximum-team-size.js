// find upperbound and lowerboud using binary search to achive Time
// omplexity O(nlog)
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maximumTeamSize = function (startTime, endTime) {
  let start = [...startTime].sort((a, b) => a - b),
    end = [...endTime].sort((a, b) => a - b);

  /**
   * @param {number[]} arr
   * @param {number} target
   * @return {number}
   */
  const upperBound = (arr, target) => {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };

  /**
   * @param {number[]} arr
   * @param {number} target
   * @return {number}
   */
  const lowerBound = (arr, target) => {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };

  let max = 1;
  for (let i = 0; i < startTime.length; i++) {
    max = Math.max(max, upperBound(start, endTime[i]) - lowerBound(end, startTime[i]));
    if (max === startTime.length) return max;
  }
  return max;
};

console.log(maximumTeamSize([1, 2, 3], [4, 5, 6])); // Output: 3
console.log(maximumTeamSize([2, 5, 8], [3, 7, 9])); // Output: 1
console.log(maximumTeamSize([3, 4, 6], [8, 5, 7])); // Output: 3
console.log(maximumTeamSize([13, 22, 24], [14, 24, 24])); // Output: 2
console.log(maximumTeamSize([27, 14, 25, 16], [28, 18, 28, 21])); // Output: 2
