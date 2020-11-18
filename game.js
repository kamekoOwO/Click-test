var gameStart=false;
var Click=0;
var time;
var ClickFunction=function(){
  var DisplayClick=document.getElementById("Click")
  if (gameStart) {
    Click=Click+1;
    DisplayClick.innerHTML="點擊次數："+Click;
  }else{
    Click=0;
    DisplayClick.innerHTML="點擊次數："+Click;
  };
};
var Start=function(max,smal){
  var DisplayClick=document.getElementById("Click")
  var btn=document.getElementById("btn");
  var DisplayTime=document.getElementById("time");
  time=max;
  var resultFunction=function(){
    var displayresult=document.getElementById("result");
    Click=Click/max;
    result=Click;
    Math.round(result*100)/100;
    displayresult.innerHTML="結果："+result+"下/秒數"
  };
  if (gameStart) {//結束
    time=smal-1;
    gameStart=false;
    DisplayTime.innerHTML="時間："+time;
    btn.innerHTML="點我立即開始"
    resultFunction();
  }else{//開始
    gameStart=true;
    time=max;
    Click=0;
    btn.innerHTML="點我立即結束"
    DisplayClick.innerHTML="點擊次數："+Click;
    var Timing=window.setInterval(function(){
      if (time<smal) {//結束
        window.clearInterval(Timing)
        time=max;
        DisplayTime.innerHTML="時間:"+time;
        gameStart=false;
        btn.innerHTML="點我立即開始"
        resultFunction();
      }else{//開始
        time=time-1;
        DisplayTime.innerHTML="時間:"+time;
      };
    },1000);
  };
};
