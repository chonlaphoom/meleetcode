// Time complexity: O(n^2)
// space complexity: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let parlindorm = "";
  if (s.length === 1) return s;

  for (let center = 0; center < s.length - 1; center++) {
    // try odd
    let _par = "";
    let left = center - 1;
    let right = center + 1;
    _par = s[center];
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) break;
      _par = s[left] + _par + s[right];
      left--;
      right++;
    }
    if (parlindorm.length < _par.length) parlindorm = _par;

    // try even
    _par = "";
    left = center;
    right = center + 1;
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) break;
      _par = s[left] + _par + s[right];
      left--;
      right++;
    }
    if (parlindorm.length < _par.length) parlindorm = _par;
  }

  return parlindorm;
};

console.log(longestPalindrome("babad")); // bab
console.log(longestPalindrome("cbbd")); // bb
console.log(longestPalindrome("abb")); // bb
