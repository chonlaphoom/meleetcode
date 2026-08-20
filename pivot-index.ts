// a little bit of greedy algorithm
function pivotIndex(nums: number[]): number {
  let left = 0;
  let baseRight = sumArray(nums);
  let right = baseRight;
  for (let i = 0; i < nums.length; i++) {
    if (i - 1 >= 0) {
      left += nums[i - 1];
    }
    right = baseRight - left - nums[i];
    if (left == right) {
      return i;
    }
  }

  return -1;
}

function sumArray(nums: number[]) {
  return nums.reduce((prev, curr) => {
    return (prev += curr);
  }, 0);
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex([1, 2, 3])); // Output: -1
console.log(pivotIndex([2, 1, -1])); // Output: 0
