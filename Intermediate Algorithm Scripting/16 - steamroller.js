// Steamroller

/* Flatten a nested array. You must account for varying levels of nesting. */

/* steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods. */

function steamrollArray(arr) {
  let retArr = [];
  function solve(a) {
    for (let i = 0; i < a.length; i++) {
      if (!Array.isArray(a[i])) {
        retArr.push(a[i]);
      } else {
        solve(a[i]);
      }
    }
  }
  solve(arr);
  return retArr;
}