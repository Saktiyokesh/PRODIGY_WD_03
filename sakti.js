const boxs = document.querySelectorAll('.box');
const updatestatus = document.querySelector('.winlose');
const restartbtn = document.querySelector('.restart');
const X = "<img src='./img/x.png' width='100'>";
const O = "<img src='./img/o.png' width='100'>";
 
const winprob=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] 

let opt = ["","","","","","","","","",];
let firstplayer=X;
let optplayer='X';
let gamerun=false; 
start();

function start(){
   boxs.forEach(box=>box.addEventListener('click',boxclick));
   restartbtn.addEventListener("click",restart);
   updatestatus.textContent=`${optplayer} your turn`;
   gamerun=true;

}

function boxclick(){
   let index =this.dataset.index;
   if(opt[index]!=="" || !gamerun){
    return;
   }
   updateplayer(this,index);
   winner();
}

function updateplayer(box,index){
    box.innerHTML = firstplayer;
    opt[index]=optplayer;

}

function changeplayer(){
    optplayer=(optplayer=='X')? "O":"X";
    firstplayer=(firstplayer==X)? O : X;
    updatestatus.textContent=`${optplayer} your turn`;


}

function winner(){
    let isWon =false;
    for(let i=0 ;i<winprob.length;i++){
        let length = winprob[i];
        let box1 = opt[length[0]];
        let box2 = opt[length[1]];
        let box3 = opt[length[2]];
        if(box1=="" ||box2=="" ||box3==""){
            continue;
        }
        if(box1==box2 && box2==box3){
            isWon=true;
           
        }
    }
    if(isWon){
        updatestatus.textContent=`${optplayer} won`;
        gamerun=false;
    }
    else if(!opt.includes("")){
        updatestatus.textContent=`Game Draw`;
        gamerun=false;
    }
    else{
      changeplayer();
    }
}

function restart(){
    
   opt = ["","","","","","","","","",];
   firstplayer=X;
   optplayer='X';
   gamerun=false; 
   boxs.forEach(box=> box.innerHTML="");
   start();
   }