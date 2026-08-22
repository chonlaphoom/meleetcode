function wiggleMaxLength(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }
  if (nums.length == 2) {
    if (nums[0] == nums[1]) {
      return 1;
    } else {
      return 2;
    }
  }

  let mem = nums[1] - nums[0];
  const cp = [...nums];
  if (mem == 0) {
    cp[1] = null!;
  }
  for (let i = 2; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff == 0) {
      cp[i] = null!;
      continue;
    }
    if (mem == 0 && diff != 0) {
      mem = diff;
      continue;
    }

    if (mem > 0) {
      if (diff < 0) {
        mem = diff;
      } else {
        cp[i] = null!;
      }
    } else if (mem < 0) {
      if (diff > 0) {
        mem = diff;
      } else {
        cp[i] = null!;
      }
    }
  }
  return cp.filter((cp) => cp != null).length;
}

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5])); // Output: 6
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])); // Output: 7
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 2
console.log(wiggleMaxLength([0, 0])); // Output: 1
console.log(wiggleMaxLength([0, 0, 0])); // Output: 1
console.log(wiggleMaxLength([3, 3, 3, 2, 5])); // Output: 3
console.log(wiggleMaxLength([1, 1, 7, 4, 9, 2, 5])); // Output: 6
