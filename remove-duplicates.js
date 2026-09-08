// use stack to store the characters and their counts
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const ans = [];
  for (let i = 0; i < s.length; i++) {
    let lastIndex = ans.length - 1;
    if (ans.length) {
      const [character] = ans[lastIndex];
      if (s[i] === character) {
        ans[lastIndex][1]++;
        if (ans[lastIndex][1] == k) {
          ans.pop();
        }
      } else {
        ans.push([s[i], 1]);
      }
    } else {
      ans.push([s[i], 1]);
    }
  }
  return ans.map((val) => val[0].repeat(val[1])).join("");
};

console.log(removeDuplicates("pbbcggttciiippooaais", 2)); // Output: "ps"
console.log(removeDuplicates("deeedbbcccbdaa", 3)); // Output: "aa"
