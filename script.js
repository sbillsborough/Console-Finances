console.log("Financial Analysis \n----------------------------");

// Total months
var totalMonths = finances.length;
console.log("Total Months: ", totalMonths);

// Net Total Amount profit/losses

var netTotalProfitLoss = 0;
for (var index = 0; index < finances.length; index++) {
  netTotalProfitLoss += finances[index][1];
}

console.log(`Total: ${netTotalProfitLoss}`);

// Average Change

var averageChange = Math.ceil((netTotalProfitLoss / totalMonths) * 100) / 100;

console.log(`Average Change: ${averageChange}`);
