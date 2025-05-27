const arr =[1,1,2,4,5,6,8]
function Mulby5 (num){
 return num*5
}

Mulby5.power = 2;
// console.log(Mulby5(5));
// console.log(Mulby5.power);
// console.log(Mulby5.prototype);

 function createUser(UserName,Age,Password){
   this.UserName = UserName
   this.Age = Age
   this.Password = Password
 }

createUser.prototype.incAge = function (){
    this.Age++;
}

createUser.prototype.printPerson = function(){
    console.log(`Hello ${this.UserName} your age is ${this.Age} and your password is 
    ${this.Password}`);
    
}

const User1 = new createUser("Ketan",26,"abcdef")
// User1.printPerson()
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


let Heroes = ["IronMan","Spiderman"]
let HeroPower = {
  thor:"Hammer",
  spiderman:"Sling",
  getSpideyPower:function(){
        console.log(`Spiderman's power is ${this.spiderman}`);     
  }
}
//console.log(HeroPower.getSpideyPower());

Object.prototype.Ketan = function(){
   console.log("Ketan IS LEarning JS");
   
}

Array.prototype.heyKetan = function(){
  console.log("Ketan says hello");
}
// let greet = Heroes.Ketan();
// console.log(greet);
//console.log(HeroPower.Ketan());
const user = {
  name:"Ketan",
  email:"ketankhadse14@gmail.com"
}

const learning = {
  isLearningJS: true
}
const isLaptopAvailable = {
 isDellAvailable: false
}
const learningObj = {
  getJob: true,
  FixLaptop: true,
  __proto__:learning
}

learning.__proto__=user;
Object.setPrototypeOf(learning,isLaptopAvailable)

let newname = "Jack    "
String.prototype.trueLength = function(){
  console.log(this);
  return this.trim().length
}
 let MyName = "ketan    ";
 let MyLanguage = "Js   ";
