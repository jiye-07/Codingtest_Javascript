function solution(n, k) {
  const freeDrinks = Math.floor(n / 10);
  const paidDrinks = k - freeDrinks;
  return n * 12000 + paidDrinks * 2000;
}