
/*
// create object

let human = {
    // Properties of object
    name : "Muneeb",
   noOfHands : 2,
   noOfEyes : 2,

    // Method(behaviour) of object
    eat : function(){
     console.log("eating");
    }
};

// . operator sy ma apny object ke properties aur method ko access ak skta hun. 
console.log(human.noOfEyes);
console.log(human.eat());

 Best practices for Object creation 

1: factory Function
2: Constructor Function

1: factory Function
                   aesa function jis ke anadar object create hoty hen.aur return kardety hen os object ko.


function factoryFucntion(){
    let human = {
        // Properties of object
       name : "Muneeb",
       noOfHands : 2,
       noOfEyes : 2,
    
        // Method(behaviour) of object
        eat : function(){
         console.log("eating");
        }
    };
    return human;
}

let Muneeb = factoryFucntion();
console.log(Muneeb);

agar function calling ke doran properties ke value change b karni ho tu..

function factoryFucntion(name){
    let human = {
        // Properties of object
    //    name : name,
            name,
       noOfHands : 2,
       noOfEyes : 2,
    
        // Method(behaviour) of object
        eat : function(){
         console.log("eating");
        }
    };
    return human;
}

let javaid = factoryFucntion("javaid");
let asim = factoryFucntion("asim");

2: Constructor Function
                     1:  Aesa function ha jisma object ke prop/method ko this keyword ka use kar ke
                         intialize/define kia jata ha.
                                                       but return nai kia jata.

                     2: pascal notation ko follow katy hen --> first letter of every word is capital --> MuneebJavaid 
What is this:
             this object can have a different value on where it is placed. 
             this cann't be used in arrow function refer to the global window object.
             this ke andar  current object ka address store hota ha so we can refer this as an object.
    function ConstructorFucntion(name){

      this.name  = name;
       this.noOfHands =  2;
       this.noOfEyes = 2;

      this.eat = function(){
         console.log("eating");
        }
   
}

// Object creation using constructor function
// new keyword refer to an empty object'

let Muneeb = new ConstructorFucntion("Muneeb");
console.log(Muneeb);


Dynamic Nature of object:
                         object ma properties add kar sakta hun remove kar sakta hun.
let Muneeb = new ConstructorFucntion("Muneeb");
// add new property
Muneeb.skinColour = "White";
console.log(Muneeb);
// delete property
delete Muneeb.skinColour;
console.log(Muneeb);


Constructor Property:
 object ke poperity hoti ha jis sy dekh skty hen ke object bana kesy ha kyu ke return karti ha constructor
 function ke refrence ko.

 function human(name){
    this.name  = name;
     this.noOfHands =  2;
}

let Muneeb = new human("Muneeb");

// Muneeb object  ka constructor human ha.
console.log(Muneeb.constructor);
// lkn human ka contructor aek in-built deafult Function ha
console.log(human.constructor);

// ab wo in-built Function kesy create houa ho gaa?

let human = new Function('name' , `   this.name  = name;
this.noOfHands =  2;`);

::: function is also an object.

function human(){
   Name = "Muneeb"; 
   return 8;
}
// human function ke kuch properties b hen aur method b jb kesi entity ke kuch properties hun gain method 
 hun gain tu wo object hu ga.
console.log(human.name);
console.log(human.call());

Types in js:


let b = 10;

// primitive type are copied by their value. c variable intialize ho jay ga b ke value sy. 
let c = b;
b++;
console.log(b);
console.log(c);

let a = {
    value : 10
};

// Reference type are copied by their address/refrences.Same address par point karty hen. 
let b = a;
a.value++;

console.log(a.value);
console.log(b.value);

// for in Loop 
               
let human = {
name:"Muneeb",
age:22
};

for(let key in human){
    console.log(key , human[key]);
}

// Check key exist in object or not

if("name" in human){
    console.log("present");
}else{
    console.log("Absent");
}

::for of loop (used in iterable object like array and map)



let human = {
name:"Muneeb",
age:22
};
// array return karta ha jisma object ke keys hoti hen
console.log(Object.keys(human));
// array return karta ha jisma object ke key : value pair hun.
console.log(Object.entries(human));

for(let key of Object.keys(human)){
    console.log(key , human[key]);
}


Object cloning:

1:iteration
2:Assign
3:Spread

1:iteration

let human = {
name:"Muneeb",
age:22
};

let duplicate = {};

for(let key in human){
    duplicate[key] = human[key];
}

human.age++;
console.log(duplicate);


2:Assign
 
let duplicate = Object.assign({} , human);

3:Spread 

let duplicate = {...human};

Garbage collection
 1:aesy varaible jo use ma nai ha onko automatically de-allocate kardeta ha.
 2:Run in background
 3:ham aesy control ne karskty ke kab start karna ha kab stop karna ha..
*/


let human = {
name:"Muneeb",
age:22
};

let duplicate = {...human};

human.age++;
console.log(duplicate);