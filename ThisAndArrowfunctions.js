//This is used for Global Execution Context Such as in case of object

const Obj ={
    Name: "Ketan",
    LastName: "Khadse",
    PrintName: function (){
           console.log(`My name is ${this.Name} and my last name is ${this.LastName}`);  
           console.log(this);
    }
}
//Obj.PrintName();
//Obj.Name = "Jack";
//Obj.LastName="Hammer";
//Obj.PrintName();
//console.log(this);

function CheckThis(...Args){
    console.log(Args);
}

const NewCheckThis = (...Args) =>(console.log(Args));
CheckThis(1,2,3,4,5);
NewCheckThis(1,2,3,4,5);