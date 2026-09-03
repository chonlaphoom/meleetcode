// use binary search to find the smallest divisor such that the sum of the division of each element in the array by the divisor is less than or equal to the threshold
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  if (threshold == nums.length) {
    return Math.max(...nums);
  }
  let min = 1;
  let max = Math.max(...nums);

  // use binary search
  while (min < max) {
    let dev = 0;
    let mid = min + Math.floor((max - min) / 2);

    for (let i = 0; i < nums.length; i++) {
      dev += Math.ceil(nums[i] / mid);
    }

    if (dev <= threshold) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return max;
};

console.log(smallestDivisor([1, 2, 5, 9], 6)); // Output: 5
console.log(smallestDivisor([2, 3, 5, 7, 11], 11)); // Output: 3
console.log(smallestDivisor([19], 5)); // Output: 4
console.log(smallestDivisor([91, 41, 78, 86, 8], 114)); // Output: 3
console.log(smallestDivisor([2, 3, 5, 7, 11], 11)); // Output : 3
