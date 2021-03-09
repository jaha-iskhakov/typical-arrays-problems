exports.min = function min(array) {
  return array === undefined
      ? 0
      : array.reduce((min, el) => (el < min ? el : min), 0);
};

exports.max = function max(array) {
  return array === undefined
      ? 0
      : array.reduce((max, el) => (el > max ? el : max), 0);
};

exports.avg = function avg(array) {
  return array === undefined || array.length === 0
      ? 0
      : array.reduce((sum, el) => sum + el) / array.length;
};