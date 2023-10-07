/*
// function declaration
function funcName(){
     console.log("Body of function");
}

// function call or invoke
funcName();

// function Assignment
let invoke = function assign(){
    console.log("Body of function");
}

console.log(invoke);
invoke();

// Anonymous Function 

// function (){

// }

// Anonymous Function Assignemnt

let func = function (){
    console.log("Body of function");
}

func();

// hoisting : function declaration move to the top of the file.

func();

function func(){
    console.log("yes");
}

func();

function getSum(a , b){
   console.log(arguments);
    return a + b;

}

// console.log(getSum(1 , 2));
// console.log(getSum(1));
// console.log(getSum());
console.log(getSum(1,2,3,4,5));

Arguments: special object in which we see arguments value.
function getSum(a , b){
  let sum = 0;
  for(let value of arguments){
   sum  += value;
  }

  return sum;
}

console.log(getSum(1,2,3));

Default parameter

function getSum(a , b = 9 , c = 9){
  return a + b + c;
}

console.log(getSum(2 , 3));

Rest Operator:
function getSum(a , b, ...args){
   console.log(a);
   console.log(b);
   console.log(args);
  }
  
  console.log(getSum(1,2,3 ,6,7,8,9));

*/

// getter / setter

// Getter --> Access properties
// Setter --> set & mutate properties

const obj = {
fName : "Muneeb" , 
lName : "Javaid",

get func(){
console.log(
`first Name: ${this.fName} 
Second Name: ${this.lName}`);
}
,
set func(Name){
    if(Name !== String){
        throw new Error("Please! Enter a string type data");
    }
 let nameArray =  Name.split(' ');
this.fName = nameArray[0];
this.lName = nameArray[1];
}
};

try {
    obj.func = "Muneeb";
} catch (error) {
    throw error;
}

console.log(obj.func);

