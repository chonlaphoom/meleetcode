// use hasmap to store visited number and guard clause
// optimize: use Floyd's cycle to find loop
function isHappy(n: number): boolean {
  let slow = getSum(n);
  let fast = getSum(getSum(n));
  while (slow != fast) {
    slow = getSum(slow);
    fast = getSum(getSum(fast));
  }
  return slow == 1;
}

function getSum(num: number): number {
  let sum = 0;
  let newnum = num;
  while (newnum > 0) {
    const digit = newnum % 10; // get last digit
    sum = sum + digit * digit;
    newnum = Math.floor(newnum / 10); // remove last digit
  }
  return sum;
}

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
