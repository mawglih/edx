
window.onload= function init(){
    var game = new GF();
    game.start();
};
var GF = function(){    
    // Vars relative to the canvas
    var canvas, ctx, w, h; 
    //Handling inputs
    var inputStates={};
    // vars for counting frames/s, used by the measureFPS function
    var frameCount = 0;
    var lastTime;
    var fpsContainer;
    var fps; 
  
    var measureFPS = function(newTime){
      
         // test for the very first invocation
         if(lastTime === undefined) {
           lastTime = newTime; 
           return;
         }
      
        //calculate the difference between last & current frame
        var diffTime = newTime - lastTime; 

        if (diffTime >= 1000) {
            fps = frameCount;    
            frameCount = 0;
            lastTime = newTime;
        }

        //and display it in an element we appended to the 
        // document in the start() function
       fpsContainer.innerHTML = 'FPS: ' + fps; 
       frameCount++;
    };


function clearCanvas(){
    ctx.clearRect(0,0,w,h);
}

function drawMyMonster(x, y){
    ctx.save();
    ctx.translate(x, y);
    //HEAD
    ctx.strokeRect(0,0,100,100);
    //Eys
    ctx.fillRect(20,20,10,10);
    ctx.fillRect(65,20,10,10);
    //NOse
    ctx.strokeRect(45,40,10,40);
    //Mouth
    ctx.strokeRect(35,84,30,10);
    //Teeth
    ctx.fillRect(38,84,10,10);
    ctx.fillRect(50,84,10,10);

    ctx.restore();
}
var mainLoop = function(time){
    measureFPS(time);
    clearCanvas();
    drawMyMonster(10+Math.random()*10,10+Math.random()*10);
    //Check states
    if(inputStates.left){
        ctx.fillText("left", 150, 20);
    }
    if(inputStates.up){
        ctx.fillText("up", 150, 50);
    }
    if(inputStates.right){
        ctx.fillText("right", 150, 80);
    }
    if(inputStates.down){
        ctx.fillText("down", 150, 120);
    }
    if(inputStates.space){
        ctx.fillText("space bar", 140, 150);
    }
    if (inputStates.mousePos){
        ctx.fillText("x = "+inputStates.mousePos.x +
        " y = " +inputStates.mousePos.y,5 , 150);
    }
    if (inputStates.mouseDown){
        ctx.fillText("mousedown b" +inputStates.mouseButton, 5, 180)
    }
    //Call animation loop
    requestAnimationFrame(mainLoop);

};
var start = function(){
    fpsContainer = document.createElement('div');
    document.body.appendChild(fpsContainer);
    canvas = document.querySelector('#myCanvas');
    w = canvas.width;
    h = canvas.height;
    ctx = canvas.getContext('2d'); 
    ctx.font="20px Arial";

    //event listeners
    window.addEventListener('keydown', function(event){
        if (event.keyCode===37) {
            inputStates.left = true;
        }else if(event.keyCode===38){
            inputStates.up = true;
        }else if (event.keyCode===39){
            inputStates.right = true;
        }else if (event.keyCode===40){
            inputStates.down = true;
        }else if (event.keyCode===32){
            inputStates.space = true;
        }
    }, false);

    window.addEventListener('keyup', function(event){
        if (event.keyCode===37) {
            inputStates.left = false;
        }else if(event.keyCode===38){
            inputStates.up = false;
        }else if (event.keyCode===39){
            inputStates.right = false;
        }else if (event.keyCode===40){
            inputStates.down = false;
        }else if (event.keyCode===32){
            inputStates.space = false;
        }
    }, false);
    function getMousePos(canvas, evt){
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    //mouse events
    canvas.addEventListener('mousemove', function(evt){
        inputStates.mousePos = getMousePos(evt);
    }, false);
    canvas.addEventListener('mousedown', function(evt){
        inputStates.mouseDown = true;
        inputStates.mouseButton = evt.button;
    }, false);
    canvas.addEventListener('mouseup', function(evt){
        inputStates.mouseDown = false;
    }, false);
    //starts animation
    requestAnimationFrame(mainLoop);     
};
return {
    start: start
};
};