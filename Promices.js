// const Promcefour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const error = true;
//         if(!error){
//                   resolve({name:"Ketan",isLoggedIn: true})
//         }else{
//            reject("Error : Something Went Wrong")
//         }
//     },1000)
// })

// async function ConsumePromiceFiv() {
//     try{
//        const result = await Promcefour;
//        console.log(result);
       
//     }catch(error){
//         console.log(error);       
//     }
    
// }
// ConsumePromiceFiv();
//using frtch in the async function

// async function Getallusers(){
//     try {
//         const responce =await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await responce.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("Error: ",error);
        
//     }
// }
// Getallusers()

//doing the same with then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
   console.log(data);
})
.catch((error)=>{
    console.log(error);
    
})