var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d')

var rover_w = 70;
var rover_h = 100;

var rover_x = 10;
var rover_y = 10;

var images = ["M1.jpg","m2.jpg","m3.jpg","mars.jpg","m5.jpg"];
var random_number= Math.floor(Math.random()*4);

var backgroundImage=images[random_number];
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
    ctx.drawImage(roverImageTag,rover_x,rover_y,rover_w,rover_h);
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
function left(){
    if(rover_x>=0){
       rover_x=rover_x-10;
       uploadbg();
       uploadRover(); 
    }
    
}

function right(){
    if(rover_x<= 930) {
        rover_x=rover_x+10;
        uploadbg()
        uploadRover()
    }
}

function up(){
    if(rover_y>=0){
       rover_y=rover_y-10;
       uploadbg();
       uploadRover(); 
    }
    
}

function down(){
    if(rover_y<= 300) {
        rover_y=rover_y+10;
        uploadbg()
        uploadRover()
    }
}
