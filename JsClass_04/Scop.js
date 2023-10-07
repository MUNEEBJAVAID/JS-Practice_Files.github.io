/* 
var --> functional & global scop

{
    var name = "Muneeb";
}

console.log(name);

function func(){
    var name = "javaid";
}

console.log(name);


if(true){
    var name = "javaid";
    console.log(name);
}
console.log(name);
if(true){
    console.log(name);
}

for(var i = 0; i <  10; i++){

}

console.log(i);


let & const: local scope


if(true){
    let name = "javaid";
    console.log(name);
}
console.log(name);

let name = "javaid";
if(true){
    console.log(name);
}

function func(){
    console.log(name);
}
func();
console.log(name);

for(let i = 0; i <  10; i++){

}

console.log(i);
*/

for(var i = 0; i <  10; i++){

}

console.log(i);