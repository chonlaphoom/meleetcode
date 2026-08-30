// use basic iteration with findIndex and nested loop to find the next greater element
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.findIndex((val) => val == nums1[i]);
    if (index == -1 || index == nums2.length - 1) {
      ans.push(-1);
      continue;
    }
    let found = false;
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums2[index]) {
        found = true;
        ans.push(nums2[j]);
        break;
      }
    }
    if (!found) ans.push(-1);
  }
  return ans;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // Output: [-1,3,-1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // Output: [3,-1]
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])); // Output: [7,7,7,7,7]
