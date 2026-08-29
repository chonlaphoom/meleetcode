/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    if (i < 3) {
      ans.push(i.toString());
      continue;
    }
    if (i >= 5 && i % 3 == 0 && i % 5 == 0) {
      ans.push("FizzBuzz");
      continue;
    }
    if (i % 3 == 0) {
      ans.push("Fizz");
      continue;
    }
    if (i % 5 == 0) {
      ans.push("Buzz");
      continue;
    }
    ans.push(i.toString());
  }

  return ans;
};

console.log(fizzBuzz(3)); // Output: ["1","2","Fizz"]
console.log(fizzBuzz(5)); // Output: ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
