console.log("Financial Analysis \n----------------------------");

// Total months
var totalMonths = finances.length;
console.log("Total Months: ", totalMonths);

// Net Total Amount profit/losses

var netTotalProfitLoss = 0;
for (var index = 0; index < finances.length; index++) {
  netTotalProfitLoss += finances[index][1];
}

console.log("Total: ", netTotalProfitLoss);

// Average Change

var averageChange = Math.ceil((netTotalProfitLoss / totalMonths) * 100) / 100;

console.log("Average Change: ", averageChange);

// Greatest Increase / Decrease

for (var main_index = 0; main_index < finances.length; main_index++) {
  for (
    var nested_index = 0;
    nested_index < finances[main_index].length;
    nested_index++
  ) {}
  var sorted = finances.sort((a, b) => a[1] - b[1]);
}

highest = sorted.at(-1);
lowest = sorted[0];

console.log("Greatest Increase in Profits: ", highest[0], highest[1]);
console.log("Greatest Decrese in Profits: ", lowest[0], lowest[1]);
