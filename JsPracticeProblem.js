
let Arr=[];
for (let i = 1; i <=5; i++){
    let row=[]
    for (let j = 1; j <= 5; j++) {
        let element = [i,j]; 
        row.push(element)
    }
  //console.log(row); 
}
let string = "Racecar"; 
let newstring = string.toLowerCase();
let reversedString="";
//let reversedString = newstring.split("").reverse().join("");
// if(reversedString === newstring){
//     console.log(`${string} is a palindrome`);
// }
// else{
//     console.log(`${string} is not a palindrome`);
    
// }

for (let i = newstring.length - 1; i >= 0; i--) {
    reversedString += newstring[i];   
}
 if(reversedString === newstring){
        console.log(`${string} is a palindrome`);
    }
    else{
        console.log(`${string} is not a palindrome`);
        
    }
    
