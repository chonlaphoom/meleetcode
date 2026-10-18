/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [-1];
  let maxLength = 0;
  if (s.length === 0) return s.length;

  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (c === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
      }
    }
  }

  return maxLength;
};

console.log(longestValidParentheses("(()")); // Output: 2
console.log(longestValidParentheses(")()())")); // Output: 4
console.log(longestValidParentheses("")); // Output: 0
console.log(longestValidParentheses("()(()")); // Output: 2
console.log(longestValidParentheses("()()")); // Output: 4
console.log(longestValidParentheses("((()))")); // Output: 6
