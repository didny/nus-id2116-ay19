var microBit;
let currentScene = "Title";

let width = 920;
let height = 580;
var Titlevid;
var TitleBG, GudeBG, ResultBG;
var Gude1, Gude2, Gude3, Gude4;
var Ob1, Ob2, Ob3;
var Fv1, Fv2;
var ChopS;
var draggedSprite;
var bowl;
var walls;
var score = 0;
var GameSound, pickupsound, putdownsound, StartSound, ResultSound;
let mySound;

//Define scenes
let scenes = {
  "Title": TitleScene,
  "Gude": GudeScene,
  "Result": ResultScene,
}
 
function preload(){
   Titlevid = createVideo('titlevideo.mov');
  soundFormats('mp3','ogg');
  GameSound = loadSound('Game.mp3');
  pickupsound = loadSound('Puccchu-1.mp3');
  putdownsound = loadSound ('Puccchuv2.mp3');
  StartSound = loadSound ('starting.mp3')
  ResultSound = loadSound ('gudetama.mp3')
}

function searchDevice() {
  microBit.searchDevice();
}

function setup() {
  createCanvas(width, height);
     
    
   walls = new Group();
   wallTop = createSprite(width/2, -580, width, 1000);
   wallRight = createSprite(width+580, height/2, 1000, height);
   wallLeft = createSprite(-580, height/2, 1000, height);
   wallBottom = createSprite(width/2, height+580, width, 1000);
    
   walls.add(wallTop);
   walls.add(wallRight);
   walls.add(wallLeft);
   walls.add(wallBottom);
  
   // StartSound.play();
   // StartSound.loop();


  //load background image into the project
  //load all the gudetama and ingredients into the project

  microBit = new uBit();

  button = createButton('connect microBit');
  button.mousePressed(searchDevice); // attach button listener

//   microBit.setButtonACallback(function() {
//     console.log("buttonA pressed");
//     scenes[currentScene].buttonAPressed();
//   });
  
  microBit.setButtonACallback(function() {
    console.log("buttonA pressed");
    scenes[currentScene].buttonAPressed();
  });


  microBit.setButtonBCallback(function() {
    console.log("buttonB pressed");
    scenes['Title'].buttonBPressed();
    ResultSound.stop();
    GameSound.stop();
    StartSound.stop();
    
    StartSound.play();
    StartSound.loop();
  });
  
  microBit.onConnect(function() {
    console.log("connected");
  });

  microBit.onDisconnect(function() {
    console.log("disconnected");
  });


  for (scene in scenes) {
    scenes[scene].setup();   
  }
  

}

function draw() {
  scenes[currentScene].update();
  scenes[currentScene].draw();
}

