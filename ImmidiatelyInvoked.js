//immidiately invoked function expression iife 
//you use it so that it will not pollute the function with global execution context variables
//Function that will get executes immidiately after defining

(function One(){
    console.log("Hello");
    
})();
((name)=>{
    console.log("World",name);
    
})("Ketan")
