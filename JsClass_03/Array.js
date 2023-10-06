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


Empyting an array:

let arr = [1 , 2 ,3 ,4];
let arr2 = arr;

// Not a proper soltuion
arr = [];
console.log(arr2.lenth);
console.log(arr.length);

1: splice(0 , arr.length);

2: arr.length = 0;

3:let size = arr.length;
for(let i = 0; i < size; i++){
    arr.shift();
}

Concat():

let arr = [1 , 2 ,3 ,4];
let arr2 = [5 ,6, 7, 8];

let finalArray = arr.concat(arr2);
console.log(finalArray);

with object:

let obj1 = {
    No_ : 1,
    Name_ : "Muneeb"
};

let obj2 = {
    No : 2,
    Name : "Rehman"
};


// let obj = Object.assign(obj1, obj2);
let obj = {...obj1 , ...obj2};
console.log(obj);

Slice(start , end); 

let arr = [1 , 2 ,3 ,4 ,6,7,8,9];


let extractPart = arr.slice(2 , 6);
console.log(extractPart);
let extractPart = arr.slice( 0 , -3);
console.log(extractPart)


Spread Operator

let array = [1 , 2];
let array2 = [...array];

array2[0] = "Muneeb";

console.log(array);
console.log(array2)


 let array = [1 , 2];
let array2 = [3,4,5,6,7,8,9];

const UnionArray = [...array , ...array2];
console.log(1 , 2 , ...array2)

Iterate on array

let arr = [3,4,5,6,7,8,9];

for(const index in arr){
    console.log(`${index} : ${arr[index]}`);
}

for(const value of arr){
    console.log(value);
}

arr.forEach(function(element , index , array){
console.log(`${index} : ${element} = ${array}`);
});

arr.forEach((element , index , array) => console.log(`${index} : ${element} = ${array}`);


Join method:

let arr = [3,4,5,6,7,8,9];

let joined = arr.join("+");

console.log(joined);
console.log(typeof(joined));

Split Method:

let Split = joined.split("+");
console.log(Split);


Sorted Method:

Asc Order:
let arr = [5,4, 3, 6, 8];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);


let prize = [100 , 20 , 400 , 500 , 410 , 100];
let size = prize.length;
for(let i = 0; i < size; i++){

    for(let j = i + 1; j < size; j++){
        let value = prize[i] - prize[j];
        console.log(i , j);
        if(value > 0){
          
            let temp = prize[i];
            prize[i]  = prize[j];
            prize[j] = temp;
        }
    }
}

console.log(prize.sort((a , b) => a - b)); 


* Descending Order:

let prize = [100 , 20 , 400 , 500 , 410 , 100];
let size = prize.length;
for(let i = 0; i < size; i++){

    for(let j = i + 1; j < size; j++){
        let value = prize[i] - prize[j];
        console.log(i , j);
        if(value < 0){
          
            let temp = prize[i];
            prize[i]  = prize[j];
            prize[j] = temp;
        }
    }
}


Filter Method:

const fruits = [100 , 200 , 400 , 500 , 410 , 100];

const newArray = fruits.filter(function (currElm) {
    return currElm <= 400;
    });       

// const newArray = fruits.filter(currElm => currElm <= 400);
console.log(newArray);

Map Method:

1: With array
const fruits = [100 , 200 , 400 , 500 , 410 , 100];

const newArray = fruits.map(function (currElm){
    return currElm * 400;
    });       

// const newArray = fruits.map(currElm => currElm <= 400);
console.log(newArray);

with object:

const prize = [100 , 200 , 400 , 500 , 410 , 100];

let ans = prize.filter(value => value >200).map(nums => ({value:nums}));

console.log(ans);



*/



const maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

const sortable = Object.fromEntries(
    Object.entries(maxSpeed).sort(([,a],[,b]) => a - b)
);

console.log(sortable);