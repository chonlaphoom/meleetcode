/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;
  let reverse = 0;
  const sign = Math.sign(x); // either +,-
  x = Math.abs(x);
  while (x > 0) {
    const lastDigit = x % 10; // get last digit
    reverse = reverse * 10 + lastDigit;
    x = Math.floor(x / 10); // remove last digit
  }

  const final = sign * reverse;
  // 100000000 00000000 00000000 00000000 equal to -2^31 since bitwise operation in 
  // javascript use convert number to 32-bit signed so leftist digit also represent sign
  if (final < 1 << 31 || final > 2 ** 31 - 1) return 0;
  return final;
};

console.log(reverse(123));
console.log(reverse(-123));
