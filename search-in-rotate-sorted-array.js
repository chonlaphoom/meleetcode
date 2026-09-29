/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    const mid = min + Math.floor((max - min) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[min] <= nums[mid]) {
      // left sorted
      if (nums[min] <= target && target < nums[mid]) {
        // target is in the left half
        max = mid - 1;
      } else {
        // target is in the right half
        min = mid + 1;
      }
    } else {
      // right sorted
      if (nums[mid] < target && target <= nums[max]) {
        // target is in the right half
        min = mid + 1;
      } else {
        // target is in the left half
        max = mid - 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1
console.log(search([1, 3], 3)); // Output: 1
console.log(search([3, 1], 1)); // Output: 1
console.log(search([5, 1, 3], 5)); // Output: 0
console.log(search([5, 1, 3], 3)); // Output: 2
