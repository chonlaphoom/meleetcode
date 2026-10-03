/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};

console.info(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.info(maxArea([1, 1])); // 1
