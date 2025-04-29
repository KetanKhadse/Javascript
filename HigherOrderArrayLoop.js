//Higher Order Array Loop Such as Foreach, for of,for in

//for of - it prints every element in the [],{} or a string
const Arr = [1,2,3,4,5]
for (const element of Arr) {
    //console.log(element);   
}

const greeting = "Hello World";
for (const greet  of greeting) {
    // if(greet === " "){
    //     continue;
    // }
    // console.log(greet);
    
}

//Map

const map = new Map();

map.set("IN","India");
map.set("US", "united states of america");
map.set("CN","Canada");
map.set("FR","France");

for (const [key,Value] of map) {
    //console.log(key,":",Value);   
}

const obj = {
    name: "Ketan",
    lastname : "Khadse"
}
//as object is not iterable you have to use another loop for it
// for (const [key,Value] of obj) {
//     console.log(key,":",Value); 
// }

//For in loop
const Myobj = {

    js:"Javascript",
    Cpp:"C++",
    c:"c",
    Py : "Python"
}
for (const key in Myobj) {
//console.log(key,"is for",Myobj[key]);

}

//For Arrays
for (const key in Arr) {
 // console.log(Arr[key]);
  
}

//For Map()

for (const key in map) {
   // console.log(key);
    
}
//this won't work as map is not iterable

//Foreach Loop

Arr.forEach((value) => {
   // console.log(value);
    
});

//this does not work on obj 
// Myobj.forEach((value)=>{
//     console.log(value);
    
// });

const coding =[
    {
        Language:"Javascript",
        Filename : "Js"
    },
    {
        Language:"Java",
        Filename : "Jv"
    },
    {
        Language:"Python",
        Filename : "py"
    }
]
//use call back functions for foreach

coding.forEach((item,index,code)=>{
    console.log(item.Filename);
});