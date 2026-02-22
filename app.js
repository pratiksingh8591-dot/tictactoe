let boxes = document.querySelectorAll(".box");
let winmssg = document.querySelector(".winmssg");
let winpara = document.querySelector("p");
let newgame = document.querySelector("#new-game");

let winningpattern = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

let turnO = true;
let winner = "none";
let count = 0;


// CLICK EVENT
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{

    if(turnO){
      box.innerText = "O";
      turnO = false;
    }else{
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    count++;

    checkGame(); // check winner or draw
  });
});


// CHECK GAME STATUS
let checkGame = () => {
  if(checkwinner()) return;

  if(count === 9){
    checkdraw();
  }
};


// CHECK WINNER
let checkwinner = () => {
  for(let pattern of winningpattern){

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 !== "" && pos1 === pos2 && pos2 === pos3){
      winner = pos1;
      showWinner();
      stopGame();
      return true; // stop checking further
    }
  }
  return false;
};


// SHOW WINNER
let showWinner = () => {
  winpara.innerText = `Congratulations!! Winner is ${winner}`;
  winmssg.classList.remove("hide");
};


// DRAW
let checkdraw = () => {
  winpara.innerText = "It's a DRAW";
  winmssg.classList.remove("hide");
  stopGame();
};


// STOP GAME
let stopGame = () => {
  boxes.forEach(box => box.disabled = true);
};


// NEW GAME / RESET
let resetGame = () => {
  count = 0;
  winner = "none";
  turnO = true;

  boxes.forEach(box=>{
    box.innerText = "";
    box.disabled = false;
  });

  winmssg.classList.add("hide");
};

newgame.addEventListener("click", resetGame);