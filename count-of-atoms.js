// use recursion when found "("
/**
 * @param { Map } m
 * @param { string } s
 * @param { number} num
 */
function increaseAtom(m, s, num) {
  if (m.has(s)) {
    let v = m.get(s);
    m.set(s, v + num);
  } else {
    m.set(s, num);
  }
}

function increaseEntireMap(m, num) {
  for (const [k, v] of m) {
    m.set(k, v * num);
  }
}

function isNumber(str) {
  return /^[0-9]+$/.test(str);
}

function isLower(str) {
  return /^[a-z]+/.test(str);
}

var countOfAtoms = function (formula) {
  let head = 0;

  function readAtomName() {
    let atom = formula[head++];
    while (head < formula.length && isLower(formula[head])) {
      atom += formula[head++];
    }
    return atom;
  }

  function readCountValue() {
    if (head >= formula.length || !isNumber(formula[head])) {
      return 1;
    }

    let num = 0;
    while (head < formula.length && isNumber(formula[head])) {
      num = num * 10 + (formula.charCodeAt(head) - 48); // convert character number to number
      head++;
    }
    return num;
  }

  function doCount() {
    let nMap = new Map();

    while (head < formula.length && formula[head] !== ")") {
      if (formula[head] === "(") {
        head++;
        const innerMap = doCount();
        head++;
        const count = readCountValue();

        for (const [atom, num] of innerMap) {
          increaseAtom(nMap, atom, num * count);
        }
        continue;
      }

      const atom = readAtomName();
      const count = readCountValue();
      increaseAtom(nMap, atom, count);
    }

    return nMap;
  }

  const nMap = doCount();

  return [...nMap.keys()]
    .sort()
    .map((atom) => atom + (nMap.get(atom) > 1 ? nMap.get(atom) : ""))
    .join("");
};

console.log(countOfAtoms("H2O")); // Output: "H2O"
console.log(countOfAtoms("Mg(OH)2")); // Output: "H2MgO2"
console.log(countOfAtoms("K4(ON(SO3)2)2")); // Output: "K4N2O14S4"
