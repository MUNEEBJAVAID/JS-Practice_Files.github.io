/*
ARRAY: 
1: Store Multiple items of different type.

let arr = [3, 5 ,5, 6];

Add Elements:
arr.push(7);
arr.unshift(2);
arr.splice(1,0,9,9);

Remove elements:
arr.pop();
arr.shift();
console.log(arr.splice(1,0,9));

Search on primitive type:
1:indexOf(element , startingIndex):
if Element present return index otherwise return -1
console.log(arr.indexOf(5));
console.log(arr.indexOf(5 , 2));

2:LastIndexOf(element , startingIndex):
if Element present return index otherwise return -1

console.log(arr.lastIndexOf(5));
console.log(arr.lastIndexOf(5 , 1));

3:includes(element , startingIndex):
if Element present return true otherwise return false

console.log(arr.includes(3,1));

we want to check if element exist in array or not

let num = 5;
if(arr.includes(num)){
console.log("Present");
}else{
    console.log("Not Present");
}

find(callbackfn()) if present return element else return undefined
let res = arr.find(value =>value == 5);


Search on Reference type:
let arr = [
    {name:1 , age:20},
    {name:2 , age:22},
];

// array aek refrence type ha islia is object ka refrence different ho ga aur array ma majood object ka
// refrence differnt ho ga islia -1 return kary ga
console.log(arr.indexOf({name:1 , age:20}));

Solution:

1:find(callbackfn()) if conditon match return object else return undefined

// A callback is a function passed as an argument to another function.

let res = arr.find(function(value){
    return value.name === 1;
});

using arrow function 
let res = arr.find(value => value.name === 1);

2: findIndex(callbackfn()) if conditon match return index else return -1
let res = arr.findIndex(value => value.name === 2);


*/

let arr = [
    {name:1 , age:20},
    {name:2 , age:22},
];

let res = arr.findIndex(value => value.name === 2);
console.log(res);
