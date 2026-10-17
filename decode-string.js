/*
 * time complexity: O(n)
 * space complexity: O(n)
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const timeStack = [];
  const strStack = [];

  let timeStr = "";
  let strSofar = "";
  for (_s of s) {
    if (_s >= "0" && _s <= "9") {
      timeStr += _s;
      continue;
    }

    if (_s === "[") {
      timeStack.push(+timeStr);
      strStack.push(strSofar);
      timeStr = "";
      strSofar = "";
    } else if (_s === "]") {
      let time = timeStack.pop();
      let str = strStack.pop();
      str += strSofar.repeat(time);
      strSofar = str;
    } else {
      strSofar += _s;
    }
  }

  return strSofar;
};

console.log(decodeString("3[a]")); // Output: "aaa"
console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"
console.log(decodeString("3[a2[c]b]")); // Output: "accbaccbaccb"
