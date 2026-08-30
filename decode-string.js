// I use stack and state
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  const timeStack = [];
  let str = "";
  let timeStr = "";
  for (let _s of s) {
    if (!isNaN(_s)) {
      timeStr += _s;
      continue;
    }
    if (_s == "[") {
      timeStack.push(Number(timeStr));
      stack.push(str); // I keep what we have sofar
      str = "";
      timeStr = "";
    } else if (_s == "]") {
      let time = timeStack.pop();
      let ss = stack.pop();
      ss += str.repeat(Number(time));
      str = ss;
    } else {
      str += _s;
    }
  }
  return str;
};

console.log(decodeString("3[a]"));
console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"
