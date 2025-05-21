
 const RandomColor =  function(){
    let hex = "0123456789ABCDEF"; 
    let color = "#";  
    for (let i = 0; i <6; i++) {
        color += hex[Math.floor(Math.random()*16)];   
    }
    return color;
}
let ColorChange = function (){
    document.querySelector("body").style.backgroundColor = RandomColor()
}
let ColorInterval;
document.querySelector("#start").addEventListener('click',()=>{   
    if(!ColorInterval){
         ColorInterval =   setInterval(ColorChange , 2000);
    }   
})

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(ColorInterval);
    ColorInterval = null;
})
