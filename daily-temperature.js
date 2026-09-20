/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  if (temperatures.length === 1) return [0];
  const answer = Array.from({ length: temperatures.length }, () => 0);
  const stack = [[temperatures[0], 0]];

  for (let i = 1; i < temperatures.length; i++) {
    let temp = temperatures[i];
    if (stack.length === 0) {
      stack.push([temp, i]);
      continue;
    }

    while (stack.length > 0 && temp > stack[stack.length - 1][0]) {
      const [_, index] = stack.pop();
      answer[index] = i - index;
    }
    stack.push([temp, i]);
  }

  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // Output: [1, 1, 1, 0]
