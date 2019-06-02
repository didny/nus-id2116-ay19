var microBit;
var bg;
var heart;
var yum;
var beep;
var waste;
var zzz;
var swoosh;
var napping;
var dance;
var shit;
var plunge;
var info1;
var info2;
var donut;
var donut_eat;
var corndog;
var corndog_eat;
var mango;
var mango_eat; 

var game_play;
let appleSprite;
let melonSprite;
let howBig;
let score=0;
let hits=0;
var appleVar;
var melonVar;
let counter = 0;

var egg;
var shake;
var baby;
var hatch;
var hatchIsVisible;
var adult;
var spirit;
let timerID;
var poop;
var tamaVisible;

//Set current scene as "health"
let currentScene = "health"

class Apple {
  constructor() {
    this.x = windowWidth / 2 + random(-50, 50) * (windowHeight/570);
    this.y = windowHeight / 2 + random(-30, 30) * (windowHeight/570);
    this.howBig = random(30, 50);
    this.isVisible = false;
  }
  
  spawn() {
    this.x = windowWidth / 2 + random(-50, 50) * (windowHeight/570);
    this.y = windowHeight / 2 + random(-30, 30) * (windowHeight/570);
    this.howBig = random(30, 50);
    appleSprite.resize(this.howBig, 0);
    this.isVisible = true;
  }
  
  nospawn() {
    this.isVisible = false;
  }
  
  display() {
    if(this.isVisible)
    {
     
     image(appleSprite, this.x, this.y);
    }
  }
}

class Melon {
  constructor() {
    this.x = windowWidth / 2 + random(-50, 50) * (windowHeight/570);
    this.y = windowHeight / 2 + random(-30, 30) * (windowHeight/570);
    this.howBig = random(30, 50);
    this.isVisible = false;
  }
  
  spawn() {
    this.x = windowWidth / 2 + random(-50, 50) * (windowHeight/570);
    this.y = windowHeight / 2 + random(-30, 30) * (windowHeight/570);
    this.howBig = random(30, 50);
    melonSprite.resize(this.howBig, 0);
    this.isVisible = true;
  }
  
  nospawn() {
    this.isVisible = false;
  }
  
  display() {
    if(this.isVisible)
    {
      
      image(melonSprite, this.x, this.y);
    }
  }
}

let healthScene = {

  draw:function(){  //draw scene to the canvas 
   image(heart, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    if(baby.visible || adult.visible)
    {
      tamaVisible = false;
      currentScene = "info1";
    }
  },
  
  buttonBPressed:function(){
    if(baby.visible || adult.visible)
    {
      currentScene = "food";
    }
  },
}

let info1Scene = {

  draw:function(){  //draw scene to the canvas 
   image(info2, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    tamaVisible = true;
    currentScene = "health";
  },
  
  buttonBPressed:function(){
    currentScene = "info2";
  },
}

let info2Scene = {

  draw:function(){  //draw scene to the canvas 
   image(info1, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    tamaVisible = true;
    currentScene = "health";
  },
  
  buttonBPressed:function(){
    currentScene = "info1";
  },
}

let foodScene = {

 draw:function(){  //draw scene to the canvas 
   image(yum, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    tamaVisible = false;
    currentScene = "donut";
  },
  
  buttonBPressed:function(){
    tamaVisible = true;
    currentScene = "game";
  },
}

let donutScene = {

 draw:function(){  //draw scene to the canvas 
   image(yum, windowWidth/2, windowHeight/2);
   image(donut, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    currentScene = "donut_eat";
  },
  
  buttonBPressed:function(){
    currentScene = "corndog";
  },
}

let donut_eatScene = {

 draw:function(){  //draw scene to the canvas 
   image(yum, windowWidth/2, windowHeight/2);
   animation(donut_eat, windowWidth/2, windowHeight/2); 
   if(donut_eat.getFrame() == donut_eat.getLastFrame())
   {
     var foodTimer = setTimeout(
      () => {
        tamaVisible = true;
        currentScene = "food";
      },
      0.5 * 1000);
   }
   //donut_eat.stop();
  },
  
  buttonAPressed:function(){
    tamaVisible = true;
    currentScene = "food";
  },
  
  buttonBPressed:function(){
    currentScene = "donut";
  },
}

let corndogScene = {

 draw:function(){  //draw scene to the canvas 
   image(yum, windowWidth/2, windowHeight/2);
   image(corndog, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    currentScene = "corndog_eat";
  },
  
  buttonBPressed:function(){
    currentScene = "mango";
  },
}

let corndog_eatScene = {

 draw:function(){  //draw scene to the canvas 
   image(yum, windowWidth/2, windowHeight/2);
   animation(corndog_eat, windowWidth/2, windowHeight/2);
   if(corndog_eat.getFrame() == corndog_eat.getLastFrame())
   {
     var foodTimer = setTimeout(
      () => {
        tamaVisible = true;
        currentScene = "food";
      },
      0.5 * 1000);
   }
  },
  
  buttonAPressed:function(){
    tamaVisible = true;
    currentScene = "food";
  },
  
  buttonBPressed:function(){
    currentScene = "corndog";
  },
}

let mangoScene = {

 draw:function(){  //draw scene to the canvas 
   image(yum, windowWidth/2, windowHeight/2);
   image(mango, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    currentScene = "mango_eat";
  },
  
  buttonBPressed:function(){
    currentScene = "donut";
  },
}

let mango_eatScene = {

 draw:function(){  //draw scene to the canvas 
   image(yum, windowWidth/2, windowHeight/2);
   animation(mango_eat, windowWidth/2, windowHeight/2); 
   if(mango_eat.getFrame() == mango_eat.getLastFrame())
   {
     var foodTimer = setTimeout(
      () => {
        tamaVisible = true;
        currentScene = "food";
      },
      0.5 * 1000);
   }
  },
  
  buttonAPressed:function(){
    tamaVisible = true;
    currentScene = "food";
  },
  
  buttonBPressed:function(){
    currentScene = "mango";
  },
}

function StartGame(){
  counter = 0;
  score = 0;
   const intervalId = setInterval(() => {  
  if(counter < 10)
  {
    var luck = Math.floor(Math.random() * 11) //generate random integers up to 10
    if (luck % 2 == 0) { //if even no, display apple at a random position and size
      appleVar.spawn();
      melonVar.nospawn();
    }else{ //if odd no, display melon at a random position and size
      melonVar.spawn();
      appleVar.nospawn();
    }
  }
  counter += 1;
  if (counter == 11) {
    console.log('End of Game');
    clearInterval(intervalId);}
  }, 1000); //every 1 second 
}

let gameScene = {

 draw:function(){  //draw scene to the canvas 
   image(beep, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    tamaVisible = false;
    currentScene = "game_playScene";
    StartGame();
  },
  
  buttonBPressed:function(){
    currentScene = "toilet";
  },
}

let game_playScene = {

 draw:function(){  //draw scene to the canvas 
 image(beep, windowWidth/2, windowHeight/2); 
  textSize(30);
  text('WIN: ' + score, windowWidth/2-121*(windowHeight/570), windowHeight/2-50*(windowHeight/570));
  
   if(counter < 10)
   {
      appleVar.display();
      melonVar.display();
     textSize(8);
  text('How to play: Press A for apple',windowWidth/2-120*(windowHeight/570),windowHeight/2-40*(windowHeight/570));
  text('How to play: Press B for melon',windowWidth/2-120*(windowHeight/570),windowHeight/2-30*(windowHeight/570)); 
   }
   else
   {
     textSize(15);
     text('Press A to go back',windowWidth/2-100,windowHeight/2);
     text('Press B to play again',windowWidth/2-100,windowHeight/2+20); 
   }
  },
  
  buttonAPressed:function(){
    if(counter < 10)
    {
      if(appleVar.isVisible && !microBit.buttonBPressed)
      {
        score++;
        appleVar.nospawn();
      }
    }
    else if(counter == 11)
    {
      tamaVisible = true;
      currentScene = "game";
    }
  },
  
  buttonBPressed:function(){
    if(counter < 10)
    {
      if(melonVar.isVisible && !microBit.buttonAPressed)
      {
        score++;
        melonVar.nospawn();
      }
    }
    else if (counter == 11)
    {
      StartGame();
    }
  },
}

let toiletScene = {

 draw:function(){  //draw scene to the canvas 
   image(waste, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    tamaVisible = false;
    currentScene = "plunge";
  },
  
  buttonBPressed:function(){
    currentScene = "sleep";
  },
}

let plungeScene = {

 draw:function(){  //draw scene to the canvas 
  image(waste, windowWidth/2, windowHeight/2);
  animation(plunge, windowWidth/2, windowHeight/2);
 },
  
  buttonAPressed:function(){
    poop.visible = false;
    tamaVisible = true;
    currentScene = "toilet";
  },
}

let sleepScene = {

 draw:function(){  //draw scene to the canvas 
   image(zzz, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    tamaVisible = false;
    currentScene = "nap";
  },
  
  buttonBPressed:function(){
    currentScene = "music";
  },
}

let napScene = {

 draw:function(){  //draw scene to the canvas 
  animation(napping, windowWidth/2, windowHeight/2);
 },
  
  buttonAPressed:function(){
    tamaVisible = true;
    currentScene = "sleep";
  },
}

let musicScene = {

 draw:function(){  //draw scene to the canvas 
   image(swoosh, windowWidth/2, windowHeight/2);
  },
  
  buttonAPressed:function(){
    tamaVisible = false;
    currentScene = "dance";
  },
  
  buttonBPressed:function(){
    currentScene = "health";
  },
}

let danceScene = {

 draw:function(){  //draw scene to the canvas 
  image(swoosh, windowWidth/2, windowHeight/2);
  animation(dance, windowWidth/2, windowHeight/2);
  if(!mySound.isPlaying())
  {
    mySound.jump(3.0);
  }
 },
  
  buttonAPressed:function(){
    mySound.stop();
    tamaVisible = true;
    currentScene = "music";
  },
}


//Define scenes
let scenes = {
  "health":healthScene,
  "food":foodScene,
  "game":gameScene,
  "toilet":toiletScene,
  "sleep":sleepScene,
  "music":musicScene,
  "nap":napScene,
  "dance":danceScene,
  "plunge":plungeScene,
  "info1":info1Scene,
  "info2":info2Scene,
  "donut":donutScene,
  "donut_eat":donut_eatScene,
  "corndog":corndogScene,
  "corndog_eat":corndog_eatScene,
  "mango":mangoScene,
  "mango_eat":mango_eatScene,
  "game_playScene":game_playScene
}


//Microbit 
function searchDevice(){
	microBit.searchDevice();
}

windowWidth = 1500;
windowHeight = 1000;

//The triggering of the code
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  microBit=new uBit();

  button = createButton('connect microBit');
  button.position(0, 0);
  button.mousePressed(searchDevice); // attach button listener

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
    timerID = setTimeout(
      () => {
        egg.visible = false;
        shake.visible = true;
      },
      3 * 1000);
  
  timerID = setTimeout(
      () => {
        shake.visible = false;
        hatchIsVisible = true;
      },
      6 * 1000);
  
  timerID = setTimeout(
      () => {
        hatchIsVisible = false;
        baby.visible = true;
        const intervalId = setInterval(() => {
          poop.visible = true;
          //clearInterval(intervalId);
        }, 80 * 1000);
      },
      8 * 1000);
  
  timerID = setTimeout(
      () => {
        baby.visible = false;
        evo.visible = true;
        scenes[currentScene].buttonAPressed();
        currentScene = "health";
        tamaVisible = true;
      },
      78 * 1000);
  
  timerID = setTimeout(
      () => {
        evo.visible = false;
        adult.visible = true;
      },
      82 * 1000);
  
  timerID = setTimeout(
      () => {
        adult.visible = false;
        spirit.visible = true;
        scenes[currentScene].buttonAPressed();
        currentScene = "health";
        tamaVisible = true;
      }, 212 * 1000);
  
  tamaVisible = true;
    
   });

  microBit.onDisconnect(function(){
    console.log("disconnected");
   });
  
  //resize
  bg.resize(windowHeight, 0);
  heart.resize(windowHeight, 0);
  yum.resize(windowHeight, 0);
  beep.resize(windowHeight, 0);
  waste.resize(windowHeight, 0);
  zzz.resize(windowHeight, 0);
  swoosh.resize(windowHeight, 0);
  info1.resize(windowHeight, 0);
  info2.resize(windowHeight, 0);
  donut.resize(windowHeight, 0);
  corndog.resize(windowHeight, 0);
  mango.resize(windowHeight, 0);
  appleSprite.resize(windowHeight, 0);
  melonSprite.resize(windowHeight, 0);
  
  for (let i = 0; i < 2; ++i) {
     napping.images[i].resize(windowHeight,0);
     dance.images[i].resize(windowHeight,0);
   }

  for (let i = 0; i < 3; ++i) {
  plunge.images[i].resize(windowHeight,0);
  }
  
  for (let i = 0; i < 5; ++i) {
  donut_eat.images[i].resize(windowHeight,0);
  corndog_eat.images[i].resize(windowHeight,0);
  mango_eat.images[i].resize(windowHeight,0);
  }
  
  
  napping.frameDelay = 55;
  
  dance.frameDelay = 25;
  mySound.setVolume(0.5);
  
  plunge.frameDelay = 12;
  donut_eat.frameDelay = 50;
  corndog_eat.frameDelay = 50;
  mango_eat.frameDelay = 50;
  
  appleVar = new Apple();
  melonVar = new Melon();
  textFont(pixelFont);
  fill(0);
  
  for (let i = 0; i < 4; ++i) {
    egg.images[i].resize(windowHeight, 0);
    shake.images[i].resize(windowHeight, 0);
    baby.images[i].resize(windowHeight, 0);
    adult.images[i].resize(windowHeight, 0);
  }

  for (let i = 0; i < 2; ++i) {
    evo.images[i].resize(windowHeight, 0);
    spirit.images[i].resize(windowHeight, 0);
    poop.images[i].resize(windowHeight, 0);
  }
  
  hatch.resize(windowHeight, 0); 

  egg.frameDelay = 20;
  baby.frameDelay = 100;
  adult.frameDelay = 150;
  evo.frameDelay = 15;
  spirit.frameDelay = 15;
  poop.frameDelay = 8;
  
  hatchIsVisible = false;

  shake.visible = false;
  baby.visible = false;
  adult.visible = false;
  evo.visible = false;
  spirit.visible = false;
  poop.visible = false;
  
  tamaVisible = false;
  
  imageMode(CENTER);
}

function preload() {
  bg = loadImage('background.png');
  heart = loadImage('heart-01.png');
  yum = loadImage('food-01.png');
  beep = loadImage('game-01.png');
  waste = loadImage('toilet-01.png');
  zzz = loadImage('sleep-01.png');
  swoosh = loadImage('music-01.png');
  napping = loadAnimation('nap-01.png', 'nap-02.png');
  dance = loadAnimation('music-01-1.png', 'music-02.png');
  soundFormats('mp3', 'ogg');
  mySound = loadSound('Caramelldansen Swedish Original.mp3');
  plunge = loadAnimation('flush-08.png', 'flush-09.png', 'flush-10.png');
  info1 = loadImage('info-01.png');
  info2 = loadImage('info-02.png');
  donut = loadImage('donut.png');
  donut_eat = loadAnimation('donut-02.png', 'donut-03.png', 'donut-04.png', 'donut-05.png', 'donut-06.png');
  corndog = loadImage('corndog.png');
  corndog_eat = loadAnimation('corndog-02.png', 'corndog-03.png', 'corndog-04.png', 'corndog-05.png', 'corndog-06.png');
  mango = loadImage('mango.png');
  mango_eat = loadAnimation('mango-02.png', 'mango-03.png', 'mango-04.png', 'mango-05.png', 'mango-06.png');
  pixelFont = loadFont('slkscr.ttf');
  appleSprite = loadImage('apple.png');
  melonSprite = loadImage('melon.png');
  egg = loadAnimation('egg-01.png', 'egg-02.png', 'egg-03.png', 'egg-02.png');
  shake = loadAnimation('egg-08.png', 'egg-02.png', 'egg-09.png', 'egg-02.png');
  baby = loadAnimation('baby-01.png', 'baby-02.png', 'baby-03.png', 'baby-04.png');
  evo = loadAnimation('baby-01.png', 'adult-01.png');
  adult = loadAnimation('adult-01.png', 'adult-02.png', 'adult-03.png', 'adult-04.png');
  spirit = loadAnimation('dying-01.png', 'dying-02.png');
  poop = loadAnimation('poop-01.png', 'poop-02.png');
  hatch = loadImage('hatch.png');
}

function DrawTama()
{
  animation(egg, windowWidth / 2, windowHeight / 2);
  animation(shake, windowWidth / 2, windowHeight / 2);
  if(hatchIsVisible)
  {
   image(hatch, windowWidth / 2, windowHeight / 2);
  }
  animation(baby, windowWidth / 2, windowHeight / 2);
  animation(evo, windowWidth / 2, windowHeight / 2);
  animation(adult, windowWidth / 2, windowHeight / 2);
  animation(spirit, windowWidth / 2, windowHeight / 2);
  animation(poop, windowWidth / 2, windowHeight / 2);
}

function draw() {
  image(bg, windowWidth/2, windowHeight/2);
  scenes[currentScene].draw();
  if(tamaVisible)
  {
   DrawTama(); 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}