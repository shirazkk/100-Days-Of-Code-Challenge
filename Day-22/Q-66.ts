






//Define a function which take two parameter with type boolean
function checkBothTrue(val1: boolean, val2: boolean): boolean {
  //use AND opeator to check condition between two boolean value it return either true or false
  return val1 && val2; //In AND operator if both operand true it return true if one operand is false it never check next value it instantly return false.
}

console.log(checkBothTrue(true, false)); //output: false
console.log(checkBothTrue(true, true)); //output: true  both operand are true
console.log(checkBothTrue(false, false)); //output: false
