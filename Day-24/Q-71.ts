// Declare a variable with let and reassign it
let name1 = "Shiraz";
name1 = "Ali"; // Reassignment is allowed with let

// Declare a variable with const
const name2 = "Ahmed";

// Attempt to reassign a const variable, which will throw an error
try {
  // Reassignment will fail, caught by the catch block
  (name2 as any) = "Waheed";
} catch (error) {
  // Error message for reassignment attempt
  console.log(`Cannot assign to 'name2' because it is a constant`);
}
