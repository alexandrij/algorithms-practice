export function maxProfit(prices) {
  let maxProfix = 0;
  let i = 0;
  while (i < prices.length) {
    let localMaxProfit = 0;
    let localMinProfit = prices[i];

    while (prices[i] <= localMinProfit) {
      localMinProfit = prices[i];
      i++;
    }
    while (prices[i] > localMaxProfit) {
      localMaxProfit = prices[i];
      i++;
    }
    if (localMinProfit < localMaxProfit) {
      maxProfix += localMaxProfit - localMinProfit;
    }
  }
  return maxProfix;
}
