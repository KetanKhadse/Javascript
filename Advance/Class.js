//This Was introduced after ES6
// JavaScript Classes vs Constructor Functions
// ✅ 1. Introduction to ES6 Classes
// Introduced in ECMAScript 2015 (ES6).
// A syntactic sugar over JavaScript's existing prototype-based inheritance.
// Makes object-oriented programming (OOP) in JavaScript cleaner and more familiar to developers from other OOP languages like Java or C++.Z
class User {

    constructor(username,email,password){
     this.username = username
     this.email = email
     this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    ChangeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("ketan","K@gmail.com","1234")

// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.ChangeUsername());

// 📌 Key Points:
// constructor() is a special method for creating and initializing objects.
// Methods like encryptPassword and ChangeUsername are automatically added to the class's prototype.
// Use new to create instances.


//🔙 2. Behind the Scenes: Constructor Functions and Prototypes (Pre-ES6)
function user(username,email,password) {
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.ChangeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const user2 = new user("jack","j@gmail.com","2356")
console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.ChangeUsername());

// 📌 Key Points:
// A function used with the new keyword acts as a constructor function.
// Methods are added to the prototype of the function, so all instances share the same method definitions (efficient memory usage).
// Mimics class-based OOP behavior before classes were formally introduced.

// 🔄 Comparison:                     ES6 Class              vs                    Constructor Function
// Feature	                          ES6 Class 	                               Constructor Function
// Syntax Style	                      Cleaner and modern	                       Older, more verbose
// Method Attachment	              Automatically added to prototype	           Must be manually attached to prototype
// Instantiation	                  new User(...)	                               new user(...)
// Constructor Definition	          constructor() method	                       Function body
// Inheritance	                      extends keyword	                           call() or Object.create() needed
// Readability                        High	                                       Moderate

// 🧠 Concepts Reinforced
// 1. Prototype Inheritance
// Both ES6 classes and constructor functions use prototype-based inheritance under the hood.
// This means:
// All instance methods are shared.
// Saves memory by not creating new copies of functions for each instance.
// 2. Encapsulation
// Both patterns encapsulate data and behavior related to the user (username, email, password and associated methods).