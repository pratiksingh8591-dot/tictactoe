let boxes=document.querySelectorAll("#box");
let resetbtn=document.querySelector("#reset-btn");
let winmssg=document.querySelector(".winmssg.hide");
let winpara=document.querySelector("p");
let newgame=document.querySelector("#new-game");


let winningpattern=[[0,1,2] ,[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];

let turn0=true;
let winner="none";
let count=0;


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked")
        if(turn0){
            box.innerText="0"
            turn0=false;
            count++;
        }
        else{
            box.innerText="X"
            turn0=true;
            count++;
        }
        box.disabled=true;
        if(count!=9){ checkwinner();}
        else{ checkdraw();}
       
    })

});



 let checkwinner=() =>{
    for (let pattern of winningpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            winner=pos1val;
            win();
            stop();
        }
        }

    }
    }
 let checkdraw =()=>{
    draw();
    stop();
 }

let win=()=>{
  winpara.innerText=`the winner is ${winner}`;
  winmssg.classList.remove("hide");
  }
  let stop=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
  }
  let anewgame=()=>{
     for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        turn0=true;
        winmssg.classList.add("hide");
    }
  }
  newgame.addEventListener("click",()=>{
    anewgame();
  })
  let draw=()=>{
     winpara.innerText=`the Game is draw`;
  winmssg.classList.remove("hide");
  }