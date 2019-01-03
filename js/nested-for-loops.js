/**
 * Returns a string representation of a 2-dimensional data structure
 * @param {number} depth
 * @param {number} [width=depth]
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  let result = "\n";
  for (let y = 0; y < depth; y++) {
    for (let x = 0; x < width; x++) {
      result += `{x:${x}, y:${y}}`;
      if (x < width - 1) {
        result += ", ";
      }
    }
    result += "\n";
  }
  return result;
}

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));
