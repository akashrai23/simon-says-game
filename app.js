let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","purple","green"]; 
let started= false; //abhi game start nahi hua 
let level=0; 
let h2= document.querySelector("h2"); 

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started"); 
        started=true;
        levelUp(); 
    }

}); 

function gameflash(btn){
  btn.classList.add("flash"); 
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);

}

function userflash(btn){
    btn.classList.add("userflash"); 
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
  
  }

function levelUp(){
    userSeq=[];//jaise hi level up hua humne userseq vaale array ko empty kar diya jisse shuruat se saare color daalne pade
    level++; 
    h2.innerText=`Level ${level}`;
    //random button choose;
    let randIdx= Math.floor(Math.random()*3); 
    let randColor= btns[randIdx];   
    let randbtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor); 
    gameflash(randbtn);
    console.log(gameSeq); 

    // console.log(randbtn);
    // console.log(randIdx);
}
function checkAns(idx){
    // console.log('curr level :',level);
    // let idx= level-1; 
    if(userSeq[idx]===gameSeq[idx]){
    //   console.log("same value"); 
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1200); 
       
    }
    }
    else{
         h2.innerHTML= `Game over!your score was <b>${level}</b> <br> press any key to start`; 
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
         },150);
         reset(); 
    }
}
function btnPress(){
    let btn=this;
    userflash(btn);  
    userColor= btn.getAttribute("id"); 
    console.log(userColor);
    userSeq.push(userColor);  
    checkAns(userSeq.length-1); 
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress); 
}

function reset(){
    started= false; 
    gameSeq=[];
    userSeq=[];
    level=0;
}