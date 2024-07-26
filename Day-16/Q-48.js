//Question-48
var price1 = [500, 200, 5000, 100, 600];
var price2 = [1000, 567, 900, 140, 400];
var sortedArray1 = price1.concat(price2).sort(function (a, b) { return a - b; }); //Ascending order
var sortedArray2 = price1.concat(price2).sort(function (a, b) { return b - a; }); //Descending order
console.log(sortedArray1);
console.log(sortedArray2);
