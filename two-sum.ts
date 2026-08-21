// use map to achive O(n)
function twoSum(nums: number[], target: number): number[] {
  const _map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let check = target - nums[i];
    let found = _map.get(check);
    if (found != undefined && found != i) {
      return [i, found];
    }
    _map.set(nums[i], i);
  }
  throw new Error();
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
