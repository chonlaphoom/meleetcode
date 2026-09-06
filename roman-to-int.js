const m = new Map();
m.set("I", 1);
m.set("V", 5);
m.set("X", 10);
m.set("L", 50);
m.set("C", 100);
m.set("D", 500);
m.set("M", 1000);
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ans = 0;
  let prev = -1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (prev > m.get(s[i])) {
      ans -= m.get(s[i]);
    } else {
      ans += m.get(s[i]);
    }

    prev = m.get(s[i]);
  }
  return ans
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("MMMCMXCIX")); // 3999
