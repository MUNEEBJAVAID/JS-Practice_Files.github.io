/*
Three refrence types
1: object
2: array
3: function

1: object
         Har wo cheez jis ke kuch charactersitics hen aur har object ke kuch properties aur behaviour hota ha
         for example:
                     mera name Muneeb ha Meri age 22 ha ya meri properties hen aur ma khata hun gussa karta hun 
                     ya behaviour ha.

                     let person = {
                                 name : "Muneeb",
                                 age  : 22
                          };
                     
// person object ke properties ko access kar skta  

//  using dot notation
  console.log(person.name);

2: array
        aek Data structure ha jis ke andar ma different type ke multiple items ko store kr skta hun.

        let arr =[1,"Munneb" , true , undefined , null];
        console.log(arr[0]);
        console.log(arr[8]);


3: Function
          Aek block of code ha jis ma ham well-defined task perform karty hen.
          aur block of code ko execute karny ke lia isy call karty hen.
                    
 function sum (num1 , num2){
  console.log(num1 + num2);
}

sum(3 , 5);
   

*/



function sum (num1 , num2){
  console.log(num1 + num2);
}

sum(3 , 5);