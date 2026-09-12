/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  let i = 0; // pointer for word
  let j = 0; // pointer for abbr

  function readNumber(_abbr) {
    let numStr = "";
    while (j < abbr.length) {
      if (isNumber(_abbr[j])) {
        numStr += _abbr[j];
        j++;
      } else {
        break;
      }
    }
    return Number(numStr);
  }

  while (i < word.length && j < abbr.length) {
    if (abbr[j] === "0") {
      return false;
    }

    if (isNumber(abbr[j])) {
      let num = readNumber(abbr);
      i += num;
      continue;
    }

    if (abbr[j] !== word[i]) {
      return false;
    }
    i++;
    j++;
  }

  return i === word.length && j === abbr.length;
};

function isNumber(str) {
  return str >= "0" && str <= "9";
}

// I am not quite understand problem or what, but it seems to me that there are many edge cases so I
// put many test cases here
console.log(
  [
    [validWordAbbreviation("internationalization", "i12iz4n"), true],
    [validWordAbbreviation("internationalization", "i5a11o1"), true],
    [validWordAbbreviation("apple", "a2e"), false],
    [validWordAbbreviation("substitution", "s10n"), true],
    [validWordAbbreviation("a", "2"), false],
    [validWordAbbreviation("a", "1"), true],
    [validWordAbbreviation("hi", "h2"), false],
    [validWordAbbreviation("hi", "1"), false],
    [validWordAbbreviation("hi", "hi1"), false],
    [validWordAbbreviation("cccc", "c2ca"), false],
    [validWordAbbreviation("word", "3e"), false],
  ].every((v) => v[0] === v[1]),
);
