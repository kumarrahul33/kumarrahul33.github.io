window.addEventListener('DOMContentLoaded', () => {
    console.log("hello");
const tiles= Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const reset_button =document.querySelector('.reset_button')
let game_i=0;
let gamestats=['','','','','','','','',''];


function which_player(){

    if(game_i%2==0){
        
        return "x";
        
    }
    else{
       
        return "o";
    }
    
}
const isValid=(index)=>{
    if(tiles[index].innerText=="o" || tiles[index].innerText=="x"){
        return false;
    }
    return true;

}
const updatePlayer=()=>{
    if(game_i%2==0){
        playerDisplay.innerText="x";
        return;
    }
    else{
        playerDisplay.innerText="o";
        return;
    }
}
const endGame=(a)=>{
    
    if(a=="x") alert('playerX won!!!!!');
    else if (a=="o")alert('playerO won!!!!!');
    tiles.forEach( (tile, index) => {
        tile.innerText='';
    });
    gamestats=['','','','','','','','',''];
    return;
}
/*
0 1 2
3 4 5
6 7 8
*/
let possibleConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]


    
]

function updateGameplay(tile,index){
    if(isValid(index)){
        tile.innerText=which_player();
        if(tile.innerText==which_player()){
            
            gamestats[index]=which_player();
           
            console.log(gamestats);
            game_i++;
            
        }

    }
    else{
        alert("invalid move");
    }

   
}

const checkTrio=(a,b,c)=>{
    if(gamestats[a]==gamestats[b] && gamestats[b]==gamestats[c] && gamestats[a]!=' ' ){
        return gamestats[a];
    }
    return 0;
}

function checkWinner(){
    
  possibleConditions.forEach((wincase,index)=>{
      if(checkTrio(wincase[0],wincase[1],wincase[2])!=0){
          //setTimeout(endGame(checkTrio(wincase[0],wincase[1],wincase[2])),5000)
          endGame(checkTrio(wincase[0],wincase[1],wincase[2]));
          return;
      }
      return;
      
  });

  return;
}

function checkGameEnd(){
    for(let i=0; i<9; i++){
        if(gamestats[i]=='') return;
    }
    alert("it's a draw");
    endGame();
    return;
}



function userAction(tile, index){
    updateGameplay(tile,index);
    setTimeout(checkWinner,100);
    setTimeout(checkGameEnd,200);
    updatePlayer();
}



tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});

reset_button.addEventListener('click',()=>endGame());





});

