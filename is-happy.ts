// use hasmap to store visited number and guard clause
function isHappy(n: number): boolean {
  const hashmap = new Map<number, boolean>();

  let str = n.toString();
  if (str == "1") {
    return false;
  }

  let num = 0;
  while (1) {
    num = getSum(str);
    console.log(num);
    if (num == 1) return true;
    const circle = hashmap.get(num);
    if (circle == true) return false;
    hashmap.set(num, true);
    str = num.toString();
  }

  return false;
}

function getSum(str: string): number {
  return str
    .split("")
    .map((char) => {
      return Number(char) * Number(char);
    })
    .reduce((prev, curr) => {
      curr += prev;
      return curr;
    }, 0);
}

// console.log(getSum("12"));
console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));
