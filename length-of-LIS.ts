function lengthOfLIS(nums: number[]): number {
  let streak = 1;

  // for (let i = 0; i < nums.length; i++) {
  //   let currStreak = 1;
  //   let currentval = nums[i];
  //   console.log("curr", currentval);
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (currentval < nums[j]) {
  //       console.log("cout", nums[j]);
  //       currentval = nums[j];
  //       currStreak++;
  //     }
  //   }
  //   if (currStreak > streak) {
  //     streak = currStreak;
  //   }
  // }
  //
  return streak;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7]));
