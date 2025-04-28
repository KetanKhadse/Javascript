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
console.log(CalculateCartPrise(100,200,300,400,500));
 const user = {
    name: "Ketan",
    price : 1000
 }

function GetObject(userobj){
    console.log(`USername ${userobj.name} Price ${userobj.price}`);

} 
GetObject(user);
//in this you can write the object directly as a argument;

function GetArray(Arr){
console.log(Arr);
}
let myArr = [1,2,3,4,5];
GetArray(myArr);