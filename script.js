let step,gameComplete;
let X=0,O=0;

const boxes=document.querySelectorAll('.box');

function startGame(){
  step=1;
  gameComplete=false;
  document.getElementById('button').innerHTML='<h4><b>Reset Game</b></h4>';
  document.getElementById('turn').innerHTML=`<h4><b>Turn of Player <img class="button-img" src="close.png"></b></h4>`;
  pos=[0,1,2,3,4,5,6,7,8];
  for(let i=0;i<boxes.length;i++){
    boxes[i].innerHTML='';
    boxes[i].addEventListener('click',handler,{once:true});
  }
}

function handler(event){
  
  if(step%2!==0){
    
    document.getElementById(event.target.id).innerHTML='<img class="cross" src="close.png">';
      document.getElementById('turn').innerHTML =`<h4><b>Turn of Player <img class="button-img"  src="circle.png"></b></h4>`;
    step++;
    pos[event.target.id]='x';
    gameEnd('cross');
   
  }
  else{
    
  document.getElementById(event.target.id).innerHTML='<img class="nought" src="circle.png">';
      document.getElementById('turn').innerHTML =`<h4><b>Turn of Player <img class="button-img" src="close.png"></b><h4>`;
  step++;
  pos[event.target.id]='o';
  gameEnd('no');
  }

}

function gameEnd(val){
  if(step===10){
      document.getElementById('turn').innerHTML ="<h4><b>Game Completed! Tap to Play Again :)</b><h4>";
    gameComplete=true;   
  }
}

startGame();

document.getElementById('turn').onclick=()=>{
  if(gameComplete){
  startGame();
  }
}
document.getElementById('button').onclick=()=>{
  reset();
}

function reset(){
  X=0;
  O=0;
  startGame();
}
