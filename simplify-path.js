/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const paths = path.split("/");
  const sim_path = [];
  for (let i = 0; i < paths.length; i++) {
    let current = paths[i];

    if (current === "." || current === "") continue;

    if (current === "..") {
      if (sim_path.length > 0) {
        sim_path.pop();
      }
    } else {
      sim_path.push(current);
    }
  }

  return sim_path.join("/").length ? "/" + sim_path.join("/") : "/";
};

console.log(simplifyPath("/.../a/../b/c/../d/./")); // /.../b/d
console.log(simplifyPath("/../")); // /
console.log(simplifyPath("/home/user/Documents/../Pictures"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/home/"));
