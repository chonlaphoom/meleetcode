/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let result = [];

  /**
   * @param {number} curr
   * @param {string} str
   */
  function backtracking(curr, str) {
    if (curr == str.length) {
      result.push(str);
      return;
    }

    const c = str[curr];
    const isNumber = c.toLowerCase() == c.toUpperCase();
    if (isNumber) {
      backtracking(curr + 1, str);
    } else {
      backtracking(curr + 1, uppercaseAt(curr, str));
      backtracking(curr + 1, lowercaseAt(curr, str));
    }
  }
  backtracking(0, s);
  return result;
};
function uppercaseAt(index, str) {
  if (index < 0 || index >= str.length) return str;
  return str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1);
}
function lowercaseAt(index, str) {
  if (index < 0 || index >= str.length) return str;
  return str.slice(0, index) + str[index].toLowerCase() + str.slice(index + 1);
}

console.log(letterCasePermutation("a1b2")); // Output: ["a1b2","a1B2","A1b2","A1B2"]
console.log(letterCasePermutation("3z4")); // Output: ["3z4","3Z4"]
console.log(letterCasePermutation("12345")); // Output: ["12345"]
console.log(letterCasePermutation("0")); // Output: ["0"]
