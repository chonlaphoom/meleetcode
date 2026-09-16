/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const rows = new Array(numRows).fill("");

  let row = 0;
  let step = 1;
  for (let ch of s) {
    rows[row] += ch;
    if (row === numRows - 1) {
      step = -1;
    } else if (row === 0) {
      step = 1;
    }
    row += step;
  }
  return rows.join("");
};

console.log(convert("PAYPALISHIRING", 3)); // Output: PAHNAPLSIIGYIR
