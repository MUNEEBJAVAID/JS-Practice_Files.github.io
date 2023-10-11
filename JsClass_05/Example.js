/*

  const myDiv = document.createElement('div');
  
  for(let i = 1; i <= 100; i++){
    const para = document.createElement('p');
    para.textContent = "I'am Para tag " + i;
    
    para.addEventListener('click' , function(){
      console.log("i'am a para");
    });
  
    myDiv.appendChild(para);
  }

  document.body.appendChild(myDiv);


// issue 1:  sab p tag ke lia alag sy addEventListener() func apply kia ha 
//  solution:  alag sy function likh kar osi fucntion ko sab ke lia refer kar sakty hain.

  const myDiv = document.createElement('div');
  
    function Listener(){
      console.log("i'am a para");
    }

  for(let i = 1; i <= 100; i++){
    const para = document.createElement('p');
    para.textContent = "I'am Para tag " + i;
    
    para.addEventListener('click' , Listener);
  
    myDiv.appendChild(para);
  }

  document.body.appendChild(myDiv);

  // p tag ke jaga ma div par addEventListener laga sakta hun

  const myDiv = document.createElement('div');
  
    function Listener(event){
      // target property returns the element where the event fired/occured.
      console.log(event.target);
      // currentTarget woh element hai jis par event listener laga hua hai 
      console.log(event.currentTarget);
      
    }

    myDiv.addEventListener('click' , Listener);
  

  for(let i = 1; i <= 100; i++){
    const para = document.createElement('p');
    para.textContent = "I'am Para tag " + i;
  
    myDiv.appendChild(para);
  }

  document.body.appendChild(myDiv);


   // sirf Para tags par event fire ho div par click karny sy kch na hu.

   const myDiv = document.createElement('div');
  
  function Listener(event){
    // Ye tag name case-sensitive hota hai, matlab "DIV" aur "div" ko alag taur par consider kiya jayega
    if(event.target.nodeName == 'P'){
      console.log(event.target.textContent);
    }
  }

  myDiv.addEventListener('click' , Listener);


for(let i = 1; i <= 100; i++){
  const para = document.createElement('p');
  para.textContent = "I'am Para tag " + i;

  myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

                                            */