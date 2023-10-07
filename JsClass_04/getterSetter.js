getter / setter

Getter --> Access properties
Setter --> set & mutate properties

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
 let nameArray =  Name.split(' ');
this.fName = nameArray[0];
this.lName = nameArray[1];
}
};

console.log(obj.func = "Muneeb Javaid");

console.log(obj.func);
