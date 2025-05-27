class Username{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`hello ${this.username}`);
        
    }
}

class user extends Username{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    isLoptopAvailable(){
        console.log(`${this.username} Dell laptop is not available`);
        
    }
    
}

const userone = new user("ketan","ketan@gmail.com","12343")
userone.logme()

const usertwo = new user("Jack")
usertwo.isLoptopAvailable()
usertwo.logme()

// const userthree =new Username("Ryan")
// userthree.isLoptopAvailable()