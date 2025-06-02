function solution(n) {
  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return lcm(6, n) / 6;
}
