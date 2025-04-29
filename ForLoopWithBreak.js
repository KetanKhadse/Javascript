//For Loop
// for (let i = 0; i <= 10; i++) {
//     const element = [i];   
    
//     if(element == 5){
//         console.log("Five is the best number");      
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer Loop Value : ${i}`);
//     for(j=0;j<=10;j++){
//         console.log(`Ineer Loop Value ${j}`);       
//     }
// }

//Multiplication Table
// for(i=0;i<=10;i++){
//     console.log(`${i}'s Table`);
    
//     for(j=0;j<=10;j++){
//         console.log(`${i} "*" ${j} is `,i*j);
//     }
// }


//Break and Continue
for(i=0;i<=10;i++){
    if (i == 5) {
        console.log(`Detected ${i}`);
        break;
    }
 console.log(`The value of i is ${i}`);
 
}
for(i=0;i<=10;i++){
    if (i == 5) {
        console.log(`Detected ${i}`);
        continue;
    }
 console.log(`The value of i is ${i}`);
 
}