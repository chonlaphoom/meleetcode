// use monotonic stack and store index because we need to calculate the difference between the current index and the index of the previous temperature that is less than the current temperature
// O(n) time complexity and O(n) space complexity
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }
  return result;
};

console.log(dailyTemperatures([30, 40, 50, 60])); // Output: [1, 1, 1, 0]
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
