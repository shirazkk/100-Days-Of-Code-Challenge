let countries = ["turkey", "saudiaArabia", "england", "america", "pakistan"];

console.log("Original Array:", countries); //Original array

console.log("Alphabetical Order:", [...countries].sort()); //alphabetical order without changing original array.

console.log("Original Array", countries); //not change in original array.
console.log("Reverse Alphabetical Order", [...countries].sort().reverse()); //reverse alphabetical order without changing original array.
console.log("Original Array", countries); //original Array.

console.log("Reversed Array", countries.reverse()); //reverse the original array
console.log("Original Array Restored:", countries.reverse()); //reverse it again so it restored in original array

console.log("Sorted Array", countries.sort()); //use sort to modified  original array in Alphabetical order
console.log("Reverse Sorted Array", countries.sort().reverse()); //make original array in reverse alphabetical order
