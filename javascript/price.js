const prices = [100, 250, 0, -50, 400, 150, 0, 300];

const sum = prices
  .filter(p => p > 0)
  .map(p => p * 0.9)
  .reduce((acc, p) => acc + p, 0);

console.log(sum);