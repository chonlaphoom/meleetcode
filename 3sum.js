/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left + 1 < n && nums[left] === nums[left + 1]) {
          left++;
        }
        while (right - 1 > 0 && nums[right] === nums[right - 1]) right--;
        right--;
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
