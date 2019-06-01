/*
Simple State Machine Transition Demo

 TITLE -> MAIN -> END -> TITLE
*/

var microBit;
var score;

var titleGraphics;
var learnGraphics;
var winGraphics;
var loseGraphics;
var learnGraphics;

var blob;
var collectibles;
var obstacles;
var avoid;
var b;
var bad;
var block;
var good;

var oneBackground;
var twoBackground;
var threeBackground;
var fourBackground;
var fiveBackground;
var sixBackground;
var sevenBackground;
var eightBackground;



function searchDevice(){
	microBit.searchDevice();
}

//Define scenes
let scenes = {
  "learn":learnScene,
  "title":titleScene,
   "main":mainScene,
   "win":winScene,
   "lose":loseScene
}

//Set current scene to titleScene
let currentScene = "title";

function preload(){

winGraphics = loadAnimation("win1.png", "win2.png", "win3.png", "win4.png", "win5.png","win6.png","win7.png","win8.png");
titleGraphics = loadAnimation("title1.png","title2.png", "title3.png");
learnGraphics = loadAnimation("learn.png");
loseGraphics = loadAnimation("death1.png","death2.png","death3.png","death4.png","death5.png");  

bgmSound = loadSound("bgmusic.mp3");
eatSound = loadSound("EAT.mp3");
dieSound = loadSound("DIE.mp3");
winSound = loadSound("WIN.mp3");
  
}

function setup() {
  //call setup methods of each scenes
  scenes["learn"].setup();
  scenes["title"].setup();
  scenes["main"].setup();
  scenes["win"].setup();
  scenes["lose"].setup();
  
  
microBit=new uBit();

  button = createButton('connect microBit');
  button.mousePressed( searchDevice); // attach button listener
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
