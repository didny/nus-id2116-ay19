var microBit;
var code;
var target;
var gif_createImg;
var game;
var LedSprite;
var input;
var sprite;
var basic;
var forever;
var move;
var pause;
var ifOnEdgeBounce;
var direction = 90;
var target;
var bluebutton;
var success;
var miss;
var greenbutton;
var win1;
var win2;
var lose1;
var lose2;
var girl;
var girldead;
var prof;
var profdead;
var score = 0;
var gameOver;
let gameScreen = [0];
var winHeight = 500;
var winWidth = 800;
var vid;

let img; 
let song; 
let song1; 

function searchDevice(){
  microBit.searchDevice();
  
  var student;
  var microbit;
}

function setup() {
  createCanvas(800, 500);
   img = loadImage('background 5.jpg');
  background(0);

fill(255);
textSize(30);
  textStyle(BOLD); 
text('BATTLE OF THE CODES', 120, 40);

  fill(255, 153, 153);
textSize(15);
  textStyle(BOLD); 
text('Aim for the centre code!', 500, 40);
  
  fill(255, 153, 153);
textSize(15);
  textStyle(BOLD); 
text('Press A', 100, 480);
  
  fill(255, 153, 153);
textSize(15);
  textStyle(BOLD); 
text('Press B', 650, 480);

  
  code = createSprite(400, 250);
  //compact way to add an image
  code.addImage(loadImage('Asset 4.png'));
  
  target = createSprite(400, 225)
  target.addImage(loadImage('Asset 6.png'));
  
  girl = createSprite(400, 225);
  girl.addAnimation('normal', 'Student basic 1.png', 'Student basic 2.png');
  
  prof = createSprite(400, 250);
  prof.addAnimation('normal', 'Yuta basic 1.png', 'Yuta basic 2.png');
 
  
  microBit=new uBit();

  button = createButton('connect microBit');
  button.mousePressed( searchDevice); // attach button listener
  
  microBit.setButtonACallback(
  function(){
    console.log("buttonA pressed");
    if(code.overlap(target)){
       
        profdead = createSprite(400,250);
  profdead.addAnimation('round', 'student fire 1.png', 'student fire 2.png');
    fill(255);
      noStroke();
textSize(30);
text('STUDENT WINS', 300, 480);}
    else
      
    {
      girldead = createSprite(400, 250);
  girldead.addAnimation('round', 'yuta fire 1.png', 'yuta fire 2.png');
    fill(255);
     noStroke();
textSize(30);
text('PROF WINS', 320, 480); }
      

  });
    

  microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
    if(code.overlap(target))
      
    {
      girldead = createSprite(400, 250);
  girldead.addAnimation('round', 'yuta fire 1.png', 'yuta fire 2.png');
    fill(255);
     noStroke();
textSize(30);
text('PROF WINS', 320, 480);}
    else
      
    {
      profdead = createSprite(400,250);
  profdead.addAnimation('round', 'student fire 1.png', 'student fire 2.png');
    fill(255);
     noStroke();
textSize(30);
text('STUDENT WINS', 300, 480);}

  });

  microBit.onConnect(function(){
    console.log("connected");
  });

  microBit.onDisconnect(function(){
    console.log("disconnected");
  });

}


function draw() {
   image(img, 0, 50);
 
  
  direction += 15;
  //speed, angle
  code.setSpeed(35, direction);

  if(mouseIsPressed){
          code.rotation += 1;
  }else{
          code.rotation = 0;
  }

  //check if LEFT or RIGHT arrow keys are down. 
  if(keyIsDown(LEFT_ARROW)){
          code.velocity.x = -1; // add movement velocity towards -1(left) direction.
  }else if(keyIsDown(RIGHT_ARROW)){
          code.velocity.x = 1;  // add movement velocity towards  1(right) direction
  }else{
          code.velocity.x = 0;
  }
  

  
  drawSprites();
}

function keyPressed(){



}