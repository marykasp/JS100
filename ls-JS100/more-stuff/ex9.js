/* function isNegativeZero(value) {
  return 1 / value === -Infinity;
} */

// 1 / 0 returns Infinity and 1 / -0 returns -Infinity, can make the distinction between 0 and -0

function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}
