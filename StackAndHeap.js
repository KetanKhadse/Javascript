//Stack and Heap are memory types
//stack is used for premitive  Datatypes
//Heap is non-premitive Datatypes
//stack user value type
//Heap uses Referance type

let MyName = "Ketan Khadse";
let AnotherName = MyName;
AnotherName = "Learning";
console.log("Premitive: "+AnotherName);
console.log("Premitive: "+MyName);
let user ={
    "Name": "Ketan",
    "LastName":"Khadse"
}

let NewUser = user;
user.Name = "Ketki";
console.log("Non-Premitive User: "+user.Name);
console.log("Non-Premitive NewUser: "+NewUser.Name);


