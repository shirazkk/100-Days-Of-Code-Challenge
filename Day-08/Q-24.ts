let Fruit1 = "Apple";
let Fruit2 = "Apple";

console.log("Fruit1==Fruit2 is:", Fruit1 == Fruit2); //true

let Fruit3 = "Apple";
let Fruit4 = "Mango";
console.log("Fruit3==Fruit4 is:", Fruit3 == Fruit4); //false

let product1 = "WATCH".toLowerCase();
let product2 = "WATCH".toLowerCase();

console.log("Product1==Product2 is:", product1 == product2); //true

let product3 = "WATCH".toLowerCase();
let product4 = "watch".toUpperCase();

console.log("Product3==Product4 is:", product3 == product4); //false

let number1=1;
let number2=10;

console.log("1==10 is:", number1==number2);
console.log("1!=10 is:", number1!=number2);

console.log("1<10 is:",number1<number2);
console.log("1>10 is:", number1>number2);

console.log("1<=10 is:", number1<=number2);
console.log("1>=10 is:", number1>=number2);

//AND operator
let num12=2
let num22=5;
console.log("2>0 && 5<6 is:", num12>0&&num22<6); //true
console.log("2>0 && 5<6 is:", num12>3&&num22<6); //false

//OR operator

let num3=5;
let num4=10;
console.log("5>0 || 10<5 is:" ,num3>0||num4<5);
console.log("5>6 || 10<11 is:" ,num3>6||num4<11);
console.log("5>6 || 10<9 is:" ,num3>6||num4<9);


let arrayTest=["shiraz","Ali","Ahmed"]

console.log(arrayTest[0]=="shiraz")
console.log(arrayTest[3]=="Ali")








