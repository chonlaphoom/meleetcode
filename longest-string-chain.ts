// another dynamic programming
function longestStrChain(words: string[]): number {
  if (words.length == 1) {
    return 1;
  }
  if (words.length == 2) {
    if (isPredecessor(words[0], words[1])) {
      return 2;
    }
    return 1;
  }
  words.sort((a, b) => a.length - b.length);
  const dp = new Array(words.length).fill(1);
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isPredecessor(words[j], words[i])) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// use two-pointer approach
function isPredecessor(word: string, against: string) {
  if (word.length + 1 != against.length) return false;
  let i = 0;
  let j = 0;
  let skip = false;
  while (i < word.length && j < against.length) {
    if (word[i] == against[j]) {
      (i++, j++);
    } else {
      if (skip) return false;
      j++;
      skip = true;
    }
  }
  return true;
}

// console.log(isPredecessor("xbc", "cxbc"));
console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"])); // Output: ["a","ba","bda","bdca"] therefore 4
console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"])); // Output: ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"] therefore 5
console.log(longestStrChain(["abcd", "dbqca"])); // Output: 1
