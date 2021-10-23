var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d')

var rover_w = 70;
var rover_h = 100;

var backgroundImage="mars.jpg";
var roverImage = "rover.png";

function add(){
 backgroundImageTag= new Image();
 backgroundImageTag.onload=uploadbg;
 backgroundImageTag.src= backgroundImage;

 roverImageTag= new Image();
 roverImageTag.onload=uploadRover;
 roverImageTag.src=roverImage;
}

function uploadbg(){
ctx.drawImage(backgroundImageTag,0,0,1000,1000);
}

function uploadRover(){
    ctx.drawImage(roverImageTag,10,10,rover_w,rover_h);
}
window.addEventListener("keydown",myKeydown );
function myKeydown(e){
code=e.keyCode;
if(code=="37"){
    left()
}
if(code=="38"){
    up()
}
if(code=="39"){
    right()
}
if(code=="40"){
    down()
}

}