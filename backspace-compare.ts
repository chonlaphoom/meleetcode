function backspaceCompare(s: string, t: string): boolean {
  return twoPointers(s, t);
}

function twoPointers(s: string, t: string) {
  let i = s.length - 1;
  let j = t.length - 1;
  let sskip = 0;
  let tskip = 0;
  while (i >= 0 || j >= 0) {
    let isSValid = true;
    let isTValid = true;

    if (s[i] === "#") {
      sskip += 1;
      i--;
      isSValid = false;
    } else if (sskip) {
      sskip -= 1;
      i--;
      isSValid = false;
    }

    if (t[j] === "#") {
      tskip += 1;
      j--;
      isTValid = false;
    } else if (tskip) {
      tskip -= 1;
      j--;
      isTValid = false;
    }

    if (isTValid && isSValid) {
      if (i < 0 || j < 0) {
        return false;
      }
      if (s[i] !== t[j]) {
        return false;
      }
      i--;
      j--;
    }
  }
  return true;
}

function stack(s: string, t: string) {
  return false;
}
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a##c", "#a#c")); // true
console.log(backspaceCompare("a#c", "b")); // false
