/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      const midVersion = isBadVersion(mid);
      const previousVersion = isBadVersion(mid - 1);
      if (!previousVersion && midVersion) {
        return mid;
      }
      if (midVersion) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  };
};
