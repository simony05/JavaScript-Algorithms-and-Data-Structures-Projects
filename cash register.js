function checkCashRegister(price, cash, cid) {
    const currency = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10], 
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
    const change = [
      ["PENNY", 0],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0], 
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ];
    let difference = cash - price;
    let available = round(cid.reduce((x, y) => x + y[1], 0));
    while (difference > 0) {
      for (let i = currency.length - 1; i >= 0; i--) {
        difference = round(difference)
        available = round(available)
        if (currency[i][1] <= difference && cid[i][1] > 0) {
          change[i][1] += currency[i][1];
          difference -= currency[i][1];
          cid[i][1] -= currency[i][1];
          available -= currency[i][1];
          console.log(currency[i][1], difference, available)
          break;
        }
        else if (i == 0) {
        // if nothing was able to pass, it means that no change available
          return {status: "INSUFFICIENT_FUNDS", change: []}
        }
      }
    }
    // 0 difference is hit at the if statement, skips else if
    return available > 0
    ? {status: "OPEN", change: change.filter(row => row[1] > 0).reverse()}
    : {status: "CLOSED", change: change.map(row => [row[0], round(row[1])])};
}
function round(val) {
  return Math.round(val * 100) / 100;
}