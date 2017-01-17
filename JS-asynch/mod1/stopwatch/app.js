var time = 0;
var interval;
var notStarted = true;
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var timer = document.getElementById("timer");
var recorder = document.getElementById('recorder');
var list = document.getElementById('list');
var totalMs = 0;
var timerVar;

var ms = 0;
//Set up
setUp(); 

function doTimer(){
            if(!timerVar){
            timerVar = setInterval(myTimer, 10);
            btn1.innerHTML = "Stop";
    }
    else{
        clearInterval(timerVar);
        timerVar = null;
        btn1.innerHTML = "Start";
    }

 }
 function reset() {
            clearInterval(timerVar);
            timer.innerHTML="";
            list.innerHTML = "";
            btn1.innerHTML = "Start";
            timerVar = null;
     }

function myTimer() {
   ++totalMs;
    var hour = Math.floor(totalMs /360000);
    var minute = Math.floor((totalMs - hour*360000) /6000);
    var seconds = Math.floor((totalMs - hour*360000 - minute*6000) / 100);
    var ms = totalMs - hour*360000 - minute * 6000 - seconds * 100;
    timer.innerHTML = hour+":"+minute+":"+seconds+":"+ms;
       
}
function recordTime(){
    var li = document.createElement("li");
    if(timer.innerHTML){
        li.innerHTML = timer.innerHTML;
        list.appendChild(li);
    }
}

function setUp() {
    window.onkeydown = function (e) {
        if (e.keyCode ==83){
        doTimer();
        }
        if(e.keyCode == 82){
            reset();
        }
        if(e.keyCode== 84){
            recordTime();
        }
    };
}
