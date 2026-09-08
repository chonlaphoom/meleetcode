// monotonic stack, store index instead of value
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const ans = [];

  let indices = [];
  let front = 0;
  for (let i = 0; i < nums.length; i++) {
    // if index <= i - k  it means it goes out of bound
    while (front < indices.length && indices[front] <= i - k) {
      front++;
    }

    while (front < indices.length && nums[indices[indices.length - 1]] <= nums[i]) {
      indices.pop();
    }
    indices.push(i);

    if (i >= k - 1) {
      ans.push(nums[indices[front]])
    }
  }
  return ans;
};

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3,3,5,5,6,7]
// console.log(maxSlidingWindow([1], 1)); // Output: [1]
//
// console.log(maxSlidingWindow([1, -1], 1)); // Output: [1,-1]
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)); // Output: [3,3,2,5]
