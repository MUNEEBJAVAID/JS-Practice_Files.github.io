/*Math

console.log(Math.PI);

console.log(Math.round(1.5));
console.log(Math.round(1.4));
console.log(Math.round(-1.7));
console.log(Math.round(-1.4));

console.log(Math.ceil(1.0));
console.log(Math.ceil(1));
console.log(Math.ceil(-1));
console.log(Math.ceil(-1.4));

console.log(Math.floor(1.5));
console.log(Math.floor(1.4));
console.log(Math.floor(-1.5));
console.log(Math.floor(-1.4));

console.log(Math.trunc(2.7));
console.log(Math.trunc(-2.7));


console.log(Math.pow(2 , 5));

console.log(Math.sqrt(21));

console.log(Math.min(2 ,4, 5,7,-3));

console.log(Math.max(2 ,4, 5,7,-3));

console.log(Math.abs(2));
console.log(Math.abs(-3));


console.log(Math.trunc(Math.random()*100));*/
/*
// string

// Two type of string in js
 1: Primitive type
let names= "Muneeb";
console.log(typeof(names));

 jab ma Primitive wali string ke sath . notation ka use karon ga tu javascript isko as a string object 
   treat karny lag jata ha

 2:  string object create using String constructor fucntion
let strObj = new String("Munee");
console.log(typeof(strObj));

Escape charcter \ Convert the special character into string 
let result = "Muneeb \"j\" \@ 'a' vaid";
                         console.log(result);


* Searching method:

 1: indexOf() start search from start
let result = "Munveeb vaid";
 console.log(result.indexOf("v"));

 2: LastIndexOf() start search from end
let result = "Munveeb vaid";
 console.log(result.lastIndexOf("v"));

 3: search()
let result = "Munveeb vaid";
 console.log(result.search("v"));

** String Extract method

1:slice(start , end)  durig extracting start include but end not include
let result = "Muneeb javaid";

console.log(result.slice(7 , result.length - 1));
 console.log(result.slice(0));
 console.log(result.slice(2 , -1));
 console.log(result.slice( -7 , -2));

2: substring()
let result = "Muneeb javaid";

console.log(result.substring(2 , 8));
console.log(result.substring(5 , -1));
console.log(result.substring(2));
console.log(result.substring(-2));

3: substr(start , length)
let result = "Muneeb javaid";

console.log(result.substr(2 , 3));
console.log(result.substr(5 , 3));
console.log(result.substr(2));
console.log(result.substr(-2));

*** Extracting method for char:

1:charAt(index) return a character
let result = "Muneeb javaid";
console.log(result.charAt(3));

2: charCodeAt(index) return a unicode number of character
let result = "Muneeb javaid";
console.log(result.charCodeAt(8));

3: Property access[index]

let result = "Muneeb javaid";
console.log(result[8]);

**useFull Method

let result = "  Muneeb javaid   ";
console.log(result.toLowerCase());
console.log(result.toUpperCase());
console.log(result.trimStart());
console.log(result.trimEnd());
console.log(result.trim());

// convert string into array
const arr = "a b c d";
const arr1 = arr.split(' ');
console.log(arr1);

// concat(join two or more string)
let s1 = "Muneeb";
let s2 = " javaid";
console.log(s1.concat(s2));
console.log(s2.concat(s1));..
console.log(s2+s1);

// alse use for concat we use template literal
console.log(`${s1} ${s2}`);
*/


/*
Date method

1: let date = new Date();
console.log(Date.now());
console.log(date.toLocaleString());
console.log(date.toString());

2: new date(  year , month , day, hour , minute , second , millisecond) 

// Takes 7 arguments
const res = new Date(2023, 0 , 30 , 5 , 15 , 38 , 0);
console.log(res.toLocaleString());
// minimum 2 arguments
const res2 = new Date(2022, 1);  
console.log(res2.toLocaleString());

3: new date(milliSecond): 

 const milliSecond = Date.now();
const res = new Date(milliSecond); 
console.log(res.toLocaleString());

************************* getDate Method ******************

const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.toLocaleDateString());

************************* setDate Method ******************

const date = new Date();
// return a millisecond numbers 
console.log(date.setFullYear("2001"));
console.log(date.setMonth("3"));
console.log(date.setDate("25"));
console.log(date.toLocaleDateString());
console.log(date.setFullYear(2001 , 2, 28));
************************* getTime Method ******************

const time = new Date();

console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());
console.log(time.toLocaleTimeString());

************************* setTime Method ******************

const time = new Date();
console.log(time.setHours(3)); 
console.log(time.setMinutes(49)); 
console.log(time.setSeconds(58));
console.log(time.setMilliseconds(123));
console.log(time.toLocaleTimeString()); 
*/

console.log(time.getMilliseconds());
console.log(time.toLocaleTimeString());


console.log(time.getMilliseconds());
console.log(time.toLocaleTimeString());
