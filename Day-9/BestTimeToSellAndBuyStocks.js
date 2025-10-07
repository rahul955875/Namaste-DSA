function bestTimeToBuyAndSellStocks(array) {
  let min = array[0];
  let maxProfit = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] - min > maxProfit) {
      maxProfit = array[i] - min;
    }
    if (min > array[i]) {
      min = array[i];
    }
  }
  return maxProfit;
}

console.log(bestTimeToBuyAndSellStocks([7, 1, 5, 3, 6, 4]));
