//basucally conditional rendering ef if else switch case statment 
//examples
if(true){
    console.log("True");
}
if(!false){
    console.log("This Is through !false condition");
    
}
//Conditional <,>,<=,>=,==,=== ("This === checks the type of for the comparison for strict checking"),!==

const Day = 2;
const Score = 100;
// if(Day == 1){
//     console.log("Monday");
// }else if(Day==2){
//     console.log("Tuesday");
// }else if(Day==3){
//     console.log("Wednesday");
// }

//in such cares where output is determined bsed on predetermined value we can use switch case statements

// switch(Day){
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 :
//         console.log("Tuesday");
//         break;
//     case 3 :
//         console.log("Wednesday");
//         break;
//     case 4 :
//         console.log("Thursday");
//         break;
//     case 5 :
//         console.log("Friday");
//         break;
//     case 6 :
//         console.log("Saturday");
//         break;
//     default:
//         console.log("This is weekend");
//         break;
// }

//falsey value
//false,0,-0,Bigint 0n,"",undefined,null,NaN
//truthy value
//"0",'false'," ",[],{},function(){}
const EmptyObj = {}
if(Object.keys(EmptyObj).length==0){
    console.log("The Object is empty");
}

//Nullish colascing operator
let val ;
//val = 5 ?? 10
val = null??10;
val = undefined ?? 10;
val = null ?? 10 ?? 12;


//Condition ? True : false
//Ternary operator

Score <=200? console.log("The Score is less than 200"):("The score is higher than 200");

