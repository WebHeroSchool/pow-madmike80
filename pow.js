function pow(x, n) {
  if (n % 1 !== 0 || n <= 0) {
    return false;
  }
  let result = x ** n;
  return result;
}

module.exports = pow;
