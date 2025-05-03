let Randomnum = parseInt((Math.random()*100)+1);
let userguess = document.querySelector('.guessField');
let form = document.querySelector('.form');
let submit = document.querySelector('#subt');
let preguess = document.querySelector('.guesses');
let remainingguess = document.querySelector('.lastResult');
let message = document.querySelector('.lowOrHi');
let startover = document.querySelector('.resultParas');
let p = document.createElement('p');
let guesses = [];
let Playgame = true;
let guesscount = 1;
if(Playgame){
    submit.addEventListener('click',(e)=>{
     e.preventDefault();
     let guess = parseInt(userguess.value);
     Validateguess(guess);
    });    
}
function Validateguess(guess){
    if(isNaN(guess)){
      alert(`${guess} is not a number please insert a number`);
    }else if(guess<1){
        alert('Enter a number greater than 1');
    }else if (guess>100) {
        alert('Entwe a number smaller than 100')
    }else{
        guesses.push(guess);
        if(guesscount===11){
            DisplayGuess(guess);
            message.innerHTML="GAME OVER restart the game"
            GameEnd();
        }else{
            DisplayGuess(guess);
            CheckGuess(guess);
        }
    }
    
}

function CheckGuess(guess){
  if(guess === Randomnum){
     message.innerHTML=`!!!CONGRATULATION!!!!`
     GameEnd();
  }else if(guess > Randomnum){
   message.innerHTML=`Your Number is high try again`
  }else if(guess< Randomnum){
    `your number is low try again`
  }
}

function DisplayGuess(guess){
    userguess.value = '';
    preguess.innerHTML +=`${guess},`
    remainingguess.innerHTML =`${10 - guesscount}`;
    guesscount++;

}

function GameEnd(){    
userguess.value='';
userguess.setAttribute('disabled','');
p.classList.add('button')
p.innerHTML = `<h3 id="newGame">Restart</h3>`
startover.appendChild(p);
Playgame=false;
GameRestart();

}

function GameRestart(){
    let newgamebtn= document.querySelector("#newGame");
    newgamebtn.addEventListener('click',(e)=>{     
        Randomnum = parseInt((Math.random()*100)+1)
        userguess.value='';
        preguess=[];
        guesscount=1;
        userguess.removeAttribute('disabled');
        startover.removeChild(p);
        Playgame=true;
    });
   
}