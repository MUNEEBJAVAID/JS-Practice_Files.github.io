
let arr = [ 2 ,4, 5, 6, 7];

// accumulator by defualt intialize with first value of arr
let totalSum = arr.reduce((accumulator , currValue) => accumulator + currValue);
console.log(totalSum);

// accumulator intialize with first 0
let totalSums = arr.reduce((accumulator , currValue) => accumulator + currValue , 0);
console.log(totalSums);

// flatten a array: convert 2d array to 1d  array

let ar = [
    ['1' , '2'] ,
    ['3' , '4'] ,
    ['5' , '6'] ,
    ['7' , '8' , [1,2]]
];

let ans = ar.reduce((accumulator , value) => accumulator.concat(value));

console.log(ans);