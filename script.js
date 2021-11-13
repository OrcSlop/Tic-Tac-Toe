var turnCounter=1;
let playOn=true;

const xList=[];
const oList=[];


function place(buttonThing){
  if(playOn){
    if(buttonThing.classList[0]!=null){
      turnCounter++;
      if(turnCounter%2==0){
        document.getElementById(buttonThing.id).innerHTML="X";
        xList.push(buttonThing.value);
        document.getElementById("instructions").innerHTML="O's turn";
      }
      if(turnCounter%2==1){
        document.getElementById(buttonThing.id).innerHTML="O";
        oList.push(buttonThing.value);
        document.getElementById("instructions").innerHTML="X's turn";
      }
      buttonThing.classList.remove(buttonThing.classList[0]);
    }
    checkWinner();
  }
  if (turnCounter>=10){
  playOn=false;
  }
  
}


var xSum=0;
var oSum=0;
var xWinNums=[];
var oWinNums=[];

var altXList=[];

function checkWinner(){
  xSum=0;
  for(let i=0;i<xList.length; i++){
    xSum=xSum+parseInt(xList[i]);
  }
  for(let i=0; i<xList.length;i++){
    altXList[i]=xList[i];
  }
  if(xList.length==3){
    if(xSum==15){
      for (let i=0; i<xList.length;i++){
        xWinNums[i]=xList[i];
      }
      xWins();
    }
  } 
  else if(xList.length==4){
    for (let i=0;i<xList.length;i++){
      if(xSum-xList[i]==15){
        for (let u=0; u<xList.length;u++){
          xWinNums[u]=xList[u];
        }
        xWinNums.splice(i, 1);
        xWins();
      }
    }
  }
  else if(xList.length==5){
    for(let i=0; i<xList.length; i++){
      for(let a=0; a< xList.length; a++){
        altXList[a]=xList[a];
      }
      altXList.splice(i,1);
      for(let u=0; u<altXList.length;u++){
        if(xSum-xList[i]-altXList[u]==15){
          console.log(u);
          xWinNums=altXList;
          xWinNums.splice(u, 1);
          xWins();
        }
        if(i==4&&u==3&&playOn==true){
          //console.log("tie");
          draw();
        }
      }
    }
  }
  oSum=0;
  for(let i=0;i<oList.length; i++){
    oSum=oSum+parseInt(oList[i]);
  }
  if(oList.length==3){
    if(oSum==15){
      for (let i=0; i<oList.length;i++){
        oWinNums[i]=oList[i];
      }
      oWins();
    }
  } 
  else if(oList.length==4){
    for (let i=0;i<oList.length;i++){
      if(oSum-oList[i]==15){
        for (let u=0; u<oList.length;u++){
          oWinNums[u]=oList[u];
        }
        oWinNums.splice(i, 1);
        oWins();
      }
    }
  }
}

function xWins(){
  playOn=false;
  document.getElementById("instructions").innerHTML="X Wins!";
  for(let i=0; i<xWinNums.length; i++){
  document.getElementById("box-"+xWinNums[i].toString()).setAttribute("style", "background-color: #f44336;");
  }
}

function oWins(){
  playOn=false;
  document.getElementById("instructions").innerHTML="O Wins!";
  for(let i=0; i<oWinNums.length; i++){
  document.getElementById("box-"+oWinNums[i].toString()).setAttribute("style", "background-color: #f44336;");
  }
}

function draw(){
  playOn=false;
  document.getElementById("instructions").innerHTML="Draw!";
}
