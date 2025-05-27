const Username = function(username){
  this.username = username
}
// This is a constructor function that sets the username property on this.
// The return username; is redundant in this context because when used with new, c
// constructors implicitly return this unless you explicitly return an object.



const User = function(username,email,password){
    Username(username);// This line does NOT bind `username` to `this`
    Username.call(this,username)// This sets `this.username` correctly
    this.email = email;
    this.password = password;
}

// 📌 Key Concepts:
// Username(username) runs the function but doesn't bind this in the context of User. It's just a regular function call.
// Username.call(this, username) explicitly sets this inside Username to refer to the current instance of User, mimicking inheritance.
// The use of .call(this) allows property reuse from another constructor.

const userOne = new User("Ketan","A@gmail.com","1234")
console.log(userOne);
