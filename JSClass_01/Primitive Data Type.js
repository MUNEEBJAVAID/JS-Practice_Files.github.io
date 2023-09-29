
/*
Primitive data type  

   1: Undefined
   2: Numbers(int , float)
   3: string (char , string) sequence of character
   4: boolean (true(1) , flase(0))
   5: bigInt(stores large numeric value 
             Represent the value is 2 ke power 53 -1
             Not represent a decimal & float value)
   6:Null      
*/



let char = 'a';
let strings = "Muneeb";

console.log(char);
console.log(typeof(char));
console.log(strings);
console.log(typeof(strings));

let  isCheck = true;
let  isNumber = false;

console.log(isNumber);
console.log(typeof(isNumber));
console.log(isCheck);
console.log(typeof(isCheck));

let decalare;
console.log(decalare);
// Data type of undefined is undefined
console.log(typeof(decalare));

let Empty = null;
console.log(Empty);
// Data type of null object 
console.log(typeof(Empty)); 

/*
BigInt

let x = 999999999999999;
let y = 9999999999999999;

console.log(typeof(x));
console.log(y);
console.log(typeof(y));

 So, store a large integer value we use a bigInt variable
To create a BigInt, append n to the end of an integer or call BigInt()

....Two Ways

let firstWay = 9999999999999999n;
console.log(firstWay);
console.log(typeof(firstWay));

let secondWay = BigInt(9999999999999999);
console.log(secondWay);
console.log(typeof(secondWay));

...floating value ko respresnt nai karta

let floatValue = BigInt(999999999999.9999);
console.log(floatValue);
console.log(typeof(floatValue));

... Arithmetic operation like (+ , -  , /) between a BigInt and a Number is not allowed

let BigIntValue = BigInt(9999999999);
let intValue = 1342;
console.log(BigIntValue / intValue); error 

Soltuon: Explicit conversion 
1: form BIGINT to Number
console.log(Number(BigIntValue) / intValue);

2: form  Number to BIGINT
console.log(BigIntValue / BIGINT(intValue));
.
*/




