/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map2 = new Map().set(")", "(").set("}", "{").set("]", "[");
  const stack = [];
  for (const _s of s) {
    if (map2.has(_s)) {
      if (map2.get(_s) != stack.pop()) {
        return false;
      }
    } else {
      stack.push(_s);
    }
  }

  return stack.length === 0;
};
