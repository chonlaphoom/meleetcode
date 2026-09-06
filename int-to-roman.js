// use HashMap to store the roman numerals and their corresponding values
// O(n) time complexity, O(1) space complexity
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let m = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let ans = "";
  while (num > 0) {
    let divider = 1;
    if (num >= 1000) {
      divider = 1000;
    } else if (num >= 900) {
      divider = 900;
    } else if (num >= 500) {
      divider = 500;
    } else if (num >= 400) {
      divider = 400;
    } else if (num >= 100) {
      divider = 100;
    } else if (num >= 90) {
      divider = 90;
    } else if (num >= 50) {
      divider = 50;
    } else if (num >= 40) {
      divider = 40;
    } else if (num >= 10) {
      divider = 10;
    } else if (num >= 9) {
      divider = 9;
    } else if (num >= 5) {
      divider = 5;
    } else if (num >= 4) {
      divider = 4;
    }

    let temp = Math.floor(num / divider);
    ans += m[divider].repeat(temp);
    num -= divider * temp;
  }
  return ans;
};

console.log(intToRoman(3)); // "III"
console.log(intToRoman(58)); // "LVIII"
console.log(intToRoman(3749)); // "MMMDCCXLIX"
console.log(intToRoman(1994)); // "MCMXCIV"
