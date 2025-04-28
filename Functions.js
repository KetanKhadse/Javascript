//Functions OF Javascript
function AddTwoNumbers(number1,number2,number3){
    console.log(number1+number2+number3) ;
}
//AddTwoNumbers(1,3,5);
//AddTwoNumbers("1",3,2);
//AddTwoNumbers(3,3,"1");
//functions with obj and javascript

function CalculateCartPrise(...num1){
    return num1;
}
//console.log(CalculateCartPrise(100,200,300,400,500));
 const user = {
    name: "Ketan",
    price : 1000
 }

function GetObject(userobj){
    console.log(`USername ${userobj.name} Price ${userobj.price}`);

} 
//GetObject(user);
//in this you can write the object directly as a argument;

function GetArray(Arr){
console.log(Arr);
}
let myArr = [1,2,3,4,5];
//GetArray(myArr);

//there are two types of scope local or block scope and global scope variables such as const and let work in local scope but 
//variables such as var does not work in a local scope this can cause confusion 
var a = 100;
let b= 200;
const c = 300;
if(true){
    var a = 1;
    let b = 2;
    const c = 3;
    console.log("Inner",a);
console.log("Inner",b);
console.log("Inner",c);
    
}

console.log(a);
console.log(b);
console.log(c);
//
