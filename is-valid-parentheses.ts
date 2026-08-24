function isValid(s: string): boolean {
  const stack: string[] = [];
  if (s.length == 1) return false;
  for (const _s of s) {
    if (_s == "(" || _s == "[" || _s == "{") {
      stack.push(_s);
      continue;
    }
    if (_s == ")" || _s == "}" || _s == "]") {
      if (stack.length == 0) return false;
      let pop = stack.pop();
      if (pop == "(" && _s != ")") {
        return false;
      }
      if (pop == "{" && _s != "}") {
        return false;
      }
      if (pop == "[" && _s != "]") {
        return false;
      }
    }
  }
  return stack.length == 0;
}

console.log(isValid(")(){}")); // false
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
