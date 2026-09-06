/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  bubbleSort(nums);
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var quickSort = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const pivot_index = Math.ceil(nums.length / 2);
  const pivot = nums[pivot_index];
  const left = [];
  const right = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === pivot_index) continue;
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), nums[pivot_index], ...quickSort(right)];
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var bubbleSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        let temp2 = nums[j];
        nums[i] = temp2;
        nums[j] = temp;
      }
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); // Output: [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // Output: [0,1,2]
console.log(sortColors([0])); // Output: [0]
