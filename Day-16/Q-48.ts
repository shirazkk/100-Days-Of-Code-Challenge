//Question-48

let price1:number[]=[500,200,5000,100,600]
let price2:number[]=[1000,567,900,140,400]

let sortedArray1=price1.concat(price2).sort((a,b)=>a-b) //Ascending order
let sortedArray2=price1.concat(price2).sort((a,b)=>b-a) //Descending order
console.log(sortedArray1);
console.log(sortedArray2);