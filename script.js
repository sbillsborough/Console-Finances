// Total months
var totalMonths = finances.length;
console.log("Total Months: ", totalMonths);

// Net Total Amount profit/losses

// var initialValue = 0;
// var sumWithInitial = finances.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

var netTotalProfitLoss = 0;
for (var index = 0; index < finances.length; index++) {
  // console.log(finances[index][1]);
  netTotalProfitLoss += finances[index][1];
}

console.log(`Total: ${netTotalProfitLoss}`);
