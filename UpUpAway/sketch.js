var microBit;
var gameOver;
let song;
let angle = 0;
var house1;
var buttons, bird, cloud, lightning;
let siz = 30;
let birdNum = 5;
let totalBirdNum = birdNum*2;
let cloudNum = 3;
let lightningNum = 6;
let totalCloudNum = cloudNum*3;

let myFont;
let houseScale = 0.3;
let buttonScale = 0.05;
let startX1 = 400;
let startY1 = 83;
let startX = 50;
let startY = 200;
let threshold = 30;
let currentScene = "start";

function preload() {
  startScene = loadImage('image/startAdventure.png');
  instructionScene = loadImage('image/vintage.png');
  clearScene = loadImage('image/clear.png');
  cloudScene = loadImage('image/stormy.png');
  stormScene = loadImage('image/stormy.png');
  congratsScene = loadImage('image/congrats.png');
  gameoverScene = loadImage('image/gameover.png');
  myFont = loadFont('Underdog-Regular.ttf');
  cloudbackground = loadImage('image/cloudbackground.png');
    aButton =loadImage('image/A.png');
    bButton =loadImage('image/B.png');
    song = loadSound('playlist.mp3');
}
  
//Define scenes
let scenes = {
  "start":startScene,
  "instruction":instructionScene,
  "clear":clearScene,
  "cloudy":cloudScene,
  "storm":stormScene,
  "congrats":congratsScene,
  "gameover":gameoverScene,

}

function searchDevice(){
	microBit.searchDevice();
}

function setup() {
  createCanvas(800, 400);

  w3 = createSprite(width/2,height,width,siz); //bottom wall
  
  walls = new Group();
  walls.add(w3);
  
  buttons = new Group();
  birds = new Group();
  cloud = new Group();
  lightning = new Group();
  trialHouse = new Group();
  gameHouse = new Group();
  
  color1= color ('#6FC2E0');
  color2= color ('#C7E9EA');
  color3= color ('#7C7A7B');
  bgColor= color ('#6FC2E0');
  
  house1 = createSprite(startX1,startY1);
  house1.addImage(loadImage('image/house2.png'));
  house1.scale = houseScale;
  house1.addToGroup(trialHouse);

  microBit=new uBit();
  
  scenes[currentScene].setup();
  
  button = createButton('connect microBit');
  button.mousePressed( searchDevice); // attach button listener

  microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
    scenes[currentScene].buttonAPressed();
  });

  microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
    scenes[currentScene].buttonBPressed();
  });

  microBit.onConnect(function(){
    console.log("connected");
  });

  microBit.onDisconnect(function(){
    console.log("disconnected");
  });
  
    angleMode(DEGREES);
}

let angleX = 0;
let angleY = 0;

function draw() {  
  
function die() {
updateSprite(false);
gameOver = true;
}
    trialHouse.collide(walls);
  gameHouse.collide(walls);
    drawSprites(walls);

  scenes[currentScene].update();
  scenes[currentScene].draw();

  //drawSprites();    
}

function mousePressed() {
}