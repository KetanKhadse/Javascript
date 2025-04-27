//singleton happens when you declare an object with constructor method meaning it has only one object in it
//object literals are a way of declaring an object so that it can have more than one object

const Sym = Symbol("Key");
const Obj = {
    Name:"Ketan",
    LastName : "Khadse",
    "full name" : "ketan khadse",
    Age : 26,
    [Sym] : "SymbolValue",
    Email : "ketankhadse@gmail.com",
    isLoggedIn : false,
    lastLoginDay:["Monday"]
}
//console.log(Obj.Email);
//console.log(Obj["Email"]);
//console.log(Obj["full name"]);
//console.log(typeof Obj[Sym]);
//object.freeze(obj);
//console.log(Obj);
Obj.greeting = function(){
    console.log("Hello World");
}
//console.log(Obj.greeting());

//Singleton or constructor methods
const tinderUser = new Object();
//const newtinderUser = {};
tinderUser.id = "123abs";
tinderUser.name = "jack";
//console.log(tinderUser);
//console.log(newtinderUser);

const Obja = {
    fullName :{
        UserFullName : {
            Name: "Ketan",
            LastName: "Khadse"
        }
    }
}

//console.log(Obja.fullName.UserFullName.Name);
const a = {
    a:1,b:2
}
const b = {c:3,d:4}
//const c = Object.assign({},a,b)
const c = {...a,...b}
console.log(c);

