
/* 
Variable:
         is like a container in which we stored data.
 
Variable naming Rules:

1: Reserved keyword ka use nai karksty like(if , else , let , var , const etc)
2: number sy start nai karskty like( 12abs )
3: space aur '-' ka use nai kar saktay. like(my Name aur my-Name but we use underScore like my_Name) 
4: camelCase ka use karna chayia like(myName , muneebJavaid)       
          


Three types:
1: Var
2: Let
3: const


var:

1: function scop or global scop hota ha.

function varFunctionScop(){
var outerVar = "outer";
if(true){
    var innerVar  = "Inner";
console.log(outerVar);
}
console.log(innerVar);
}
varFunctionScop();

2: ham ny jaha var keyword sy variable ko declare kia hota ha ossy phly ham inhy access kr skty hen
kyu ke hoisting ke waja sy wo memory ma intialized hoty hen undefined sy .

console.log(access);
var access = "yup";
console.log(access);

3: Variable ko same name sy aek e block ma dobara declare kar sakty hen 
 
if(true){
var name = "Muneeb";
var name = "Muneeb";
var name = "Muneeb";
}

Let:

1: block scop hoty hen sirf osi block ma access kr skty hen jisma inhy declare kiya hu.

if(true){
    let Scop = "yes";
    console.log(Scop); Access
}
console.log(Scop);  Scop is not defined 

2:  aur ham ny jaha inhy declare kia hota ha ossy phly ham inhy access nai kr skty hen (Refrence error)
    hoisting inke b hoti ha lkn ya memory ma unintialized hoty hen isle initialization sy phly ham inhy acess
    nai karskty.

console.log(access);
let access = "Yup";
console.log(access);

3: Aek e block ma same name ke variable ko declare nai kar skty


if(true){
    let name = "Yahoo";
    let name = "Nai na";

    console.log(name); 'name' has already been declared
}

Const: 
      same as Let but  const variable ko intialize karna must ha. aur intialize ke bad ham dobara value assign
      nai kar sakty inhy.

      const value = 8;
      console.log(value);
      value = 10; Error

*/

