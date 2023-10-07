
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
        if(Name !== String){
            throw new Error("Please! Enter a string type data");
        }
     let nameArray =  Name.split(' ');
    this.fName = nameArray[0];
    this.lName = nameArray[1];
    }
    };
    
    try {
        obj.func = "Muneeb Javaid";
    } catch (error) {
        throw error;
    }finally{
        console.log("Finally");
    }
    