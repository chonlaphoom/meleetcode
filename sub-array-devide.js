/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let count = 0;
  let sum = 0;
  let freq = { 0: 1 };
  for (const num of nums) {
    sum += num;
    const remember = ((sum % k) + k) % k;
    count += freq[remember] || 0;
    freq[remember] = (freq[remember] || 0) + 1;
  }
  return count;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)); // Output: 7
