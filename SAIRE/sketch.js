/*
State Machine Transition Demo

 FIRST -> TITLE -> MAIN (-> PAUSE ->) -> END -> TITLE
 
References:
Pause scene:
https://wallpapercave.com/halo-wallpapers-hd-1080p

Background:
http://getdrawings.com/space-background-vector

Title scene:
https://www.rosiesrewards.com/fresh-halo-wallpaper/halo-wallpaper-fresh-halo-4-wallpapers/

Death scene:
https://www.desktopbackground.org/wallpaper/halo-wallpapers-best-547593
*/

var microBit;

var arcadeFont;

var bulletSound;
var explodeSound;
var laserSound;
var backgroundSound;
var hallelujahSound;

var meteorImg;
var hostageImg;
var spaceshipImg;

var connect;
var press;
var pause;
var death;
var backgroundImg;

var hero;
var meteor;
var hostages;
var bullets;
var n;
var MARGIN = 40;

function searchDevice(){
	microBit.searchDevice();
}

//Define scenes
let scenes = {
  "first":firstScene,
  "title":titleScene,
   "main":mainScene,
   "pause":pauseScene,
   "end":endScene
}

//Set current scene to titleScene
let currentScene = "first";

function preload(){
connect = loadAnimation("connect1.png","connect1.png", "connect1.png","connect2.png","connect2.png","connect2.png");
  
press = loadAnimation("press1.png", "press1.png", "press1.png", "press2.png", "press2.png","press2.png");
  
death = loadAnimation("death1.png", "death1.png", "death1.png", "death2.png", "death2.png","death2.png");
  
pause = loadAnimation("pause1.png", "pause1.png", "pause1.png", "pause2.png", "pause2.png","pause2.png");
  
meteorImg = loadAnimation("meteor1.png", "meteor2.png");

hostageImg = loadImage("hostage.png");

spaceshipImg = loadImage("spaceship.png");
  
backgroundImg = loadImage("background.png");
  
arcadeFont = loadFont("ARCADE_N.TTF");
  
bulletSound = loadSound("bulletsound.mp3");

explodeSound = loadSound("explodesound.mp3");
  
laserSound = loadSound("lasersound.mp3");
  
backgroundSound = loadSound("backgroundsound.mp3");
  
hallelujahSound = loadSound("hallelujah.mp3"); 
  
}


function setup() {
  //call setup methods of each scenes
  scenes["first"].setup();
  scenes["title"].setup();
  scenes["main"].setup();
  scenes["pause"].setup();
  scenes["end"].setup();
  
  
microBit=new uBit();

  var col = color(0, 0, 0, 0);
  button = createButton('_________________________');
  button.style('background-color', col)
  button.position(width/2-235, height/2-35);
  button.mousePressed(searchDevice); // attach button listener
  
  microBit.onConnect(function(){
    console.log("connected");
  });

  microBit.onDisconnect(function(){
    console.log("disconnected");
  });  
  
}

function draw() {
  //call update method of the current scene
  scenes[currentScene].update();
  //call draw method of the current scene
  scenes[currentScene].draw();

}
