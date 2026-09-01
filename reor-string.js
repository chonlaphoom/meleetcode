// use schedule filling method to fill the result array
/**
 * @param {string} str
 * @return {string}
 */
var reorganizeString = function (str) {
  if (str.length == 1) return str;
  str = Array.from(str).sort((a, b) => a.localeCompare(b));
  // find max duplicate
  let max = 0;
  let count = 1;
  let m = new Map();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      m.set(str[i - 1], count);
      max = Math.max(max, count);
      count = 1;
    }
  }
  m.set(str[str.length - 1], count);
  max = Math.max(max, count);

  if (max > Math.ceil(str.length / 2)) {
    return "";
  }

  const freqArr = [...m.entries()].sort((a, b) => b[1] - a[1]);
  let res = new Array(str.length);
  let idx = 0;
  for (const [ch, freq] of freqArr) {
    let times = freq;
    while (times > 0) {
      res[idx] = ch;
      idx += 2;

      if (idx >= str.length) {
        idx = 1;
      }

      times--;
    }
  }
  return res.join("");
};

console.log(reorganizeString("aab")); // Output: "aba"
console.log(reorganizeString("aaab")); // Output: ""
