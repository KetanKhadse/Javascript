class user{
    constructor(username,Phone){
          this.username = username
          this.Phone = Phone
    }

    static hasPhone(){
        console.log(`${this.username} has an ${this.Phone} phone`);
        
    }
        logme(){
        console.log(`hello ${this.username}`);
    }
}

const ketan = new user("Ketan","samsung")
//ketan.hasPhone()

class Ketan extends user{
    constructor(username,phone){
        super(username,phone)
    }
}

const ketan1 = new Ketan("Ketan","Iphone")
//ketan1.hasPhone()

const ketan2 = new user("Ketan","Iphone")
ketan2.logme()