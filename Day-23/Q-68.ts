//Define function which multiple two decimal number
function Decimal(num1: number, num2: number): number {
  const product = num1 * num2; 
  return Number(product.toFixed(2)); // Rounds to two decimal places and converts back to number
}

console.log(Decimal(3.33, 4.67)); // Output: 15.56
