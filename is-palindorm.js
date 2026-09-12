// use 2 pointers and a little bit of regular expression knowledge, you can also check by using unicode
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // clean up
  s = s
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("12")); // Output: false
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
