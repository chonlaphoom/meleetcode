/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0;
  let m = new Map();
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    let sofar = 0;
    m.set(s[i], true);
    sofar++;
    for (let j = i + 1; j < s.length; j++) {
      if (!m.get(s[j])) {
        m.set(s[j], true);
        sofar++;
      } else {
        max = Math.max(max, sofar);
        break;
      }
      max = Math.max(max, sofar);
    }
    m.clear();
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("mq")); // Output: 2
