
let goal;
let goal2;
let goal3;


var character;
var goalsred;
var goalsblue;
var goalsyellow;
var character2;
var goalsblues;
var goalsgreens;
var goalscharts;
var goalsinds;
var goalspurps;
var goalsoches;



let colorDict = { "red":(255,255,0),
                 "blue":[0,0,255],
                 "yellow":[255,255,0],
                 "purple":[255,0,255],
                 "green":[0,255,0],
                 "orange":[255,127.5,0],
                 "magenta":[255,0,127.5,0],
                 "violet":[127.5,0,255],
                 "teal":[0,255,255],
                 "chartreuse":[127.5,255,0],
                 "amber":[255,191.25,0],
                 "vermillion":[255, 63.75,0],
                 "black":[0,0,0]
                 


}

function preload(){
  soundFormats('mp3', 'm4a','wav');
  mySound = loadSound('Unknown_Mortal_Orchestra_-_Hunnybee_Official_Video[ListenVid.com].mp3');
  mySound2 = loadSound('correct sound.mp3')
  mySound3 = loadSound('DENIED2.mp3')
  mySound4 = loadSound('ding.mp3')
  mySound5 = loadSound('win.mp3')
  mySound6 = loadSound('refresh.mp3')
  mySound7 = loadSound('newlvl.mp3')
}

let bg0;
let y0 = 0;
let titleScene = {

  setup:function(){
    bg0 = loadImage('dd-19.png');
  createCanvas(1920, 1080);
  
     mySound.setVolume(0.5);
  mySound.play();
  
  },
  
  update:function(){
   //check key/sensor input etc.. 
  mySound5.audible = false;
    
  },
  
  draw:function(){
   background(bg0);

  y++;
  if (y0 > height) {
    y0 = 0;
  }
    
  },
  
  nextScene: function(){ 
    currentScene = "instructions"
  }
}


let bg5;
let y5 = 0;
let instructionsScene = {

  setup:function(){
  bg5 = loadImage('one.png');
  createCanvas(1920, 1080);
    
  
  },
  update:function(){

  },
  
  
  
  draw:function(){
background(bg5);

  y++;
  if (y5 > height) {
    y5 = 0;
  }
     
  },
  
  nextScene:function(){
    currentScene = "instructions2"
  }

}




let bg6;
let y6 = 0;
let instructions2Scene = {

  setup:function(){
  bg6 = loadImage('2.png');
  createCanvas(1920, 1080);
    
  
  },
  update:function(){

  },
  
  draw:function(){
background(bg6);

  y++;
  if (y6 > height) {
    y6 = 0;
  }
     
  },
  
  nextScene:function(){
    currentScene = "start"
  }

}


let bg7;
let y7 = 0;
let startScene = {

  setup:function(){
    bg7 = loadImage('stage-12.png');
  createCanvas(1920, 1080);
    
  
  
  },
  update:function(){
    
    background(bg7);

  y++;
  if (y7 > height) {
    y7 = 0;
  }

  },
  
  draw:function(){
  
  
    
    
  },
  
  nextScene:function(){
    currentScene = "main"
  }

}


let bg;
let y = 0;
let mainScene = {
  setup:function(){
    bg = loadImage('gamepage1.png');
  createCanvas(1920, 1080);
    
   red = color(234,25,47);
   blue = color(73,109,172);
   yellow = color(250,239,23);
   vermillion = color(239,100,55)
   magenta = color(199,50,141)
   indigo = color(86,75,152)
   
    
    
  character = createSprite(1227, 520);
   
                           
                          
  character.shapeColor = "white";
    
  character.addAnimation('normal','boinkboink-originalepng.png');
  character.addAnimation('reddy','boinkboink-red.png');
  character.addAnimation('purply','boinkboink-purple.png');
  character.addAnimation('vermy','boinkboink-vermillion.png');
  character.addAnimation('bluey','boinkboink-blue.png');
  character.addAnimation('magentey','boinkboink-magenta.png'); 
  character.addAnimation('indigoy','boinkboink-indigo.png'); 
  character.addAnimation('yelly','boinkboink-yellow.png'); 
    
    
    
  base = createSprite(1227, 520);
  //base.shapeColor = "white"; 
 base.addAnimation('bucket','FINAL/refresh-17.png');  
  
  goalsred = createSprite(1578, 362);
  //goals1.draw = function() { ellipse(0,0,88,88) }
  goalsred.shapeColor = red
    goalsred.scale = 0.80
  //character.addImage(loadImage('red.png'))
  
  goalsblue = createSprite(808, 830);
  goalsblue.shapeColor = blue
    goalsblue.scale = 0.80
  //character.addImage(loadImage('blue.png'))
  
  goalsyellow = createSprite(1630, 832);
  goalsyellow.shapeColor = yellow
    goalsyellow.scale = 0.80
    
  goalsverm = createSprite(1110, 194);
  goalsverm.shapeColor = vermillion
    goalsverm.scale = 0.80
    
     goalsmagenta = createSprite(1350, 726);
  goalsmagenta.shapeColor = magenta
    goalsmagenta.scale = 0.80
    
    goalsindigo = createSprite(900, 550);
  goalsindigo.shapeColor = indigo
    goalsindigo.scale = 0.80
  },
  update:function(){
  goalsblue.visible = true;
  goalsred.visible = true;
  goalsyellow.visible = true;
  goalsverm.visible = true;
  goalsindigo.visible = true;
  goalsmagenta.visible = true;
  goalscharts.visible = false;
  goalsblues.visible = false;
  goalsgreens.visible = false;
  goalsinds.visible = false;
  goalspurps.visible = false;
  goalsochs.visible = false;
  base.visible = true;
  base2.visible = false;
  character.visible = true;
  character2.visible = false;
  
  
  },
  draw:function(){
      background(bg);

  y++;
  if (y > height) {
    y = 0;
  }
    
    
     //check if LEFT or RIGHT arrow keys are down. 
  if(keyIsDown(LEFT_ARROW)){
    character.velocity.x = -5; // add movement velocity towards -1(left) direction.
  }else if(keyIsDown(RIGHT_ARROW)){
    character.velocity.x = 5;  // add movement velocity towards  1(right) direction
  }else{
    character.velocity.x = 0;
  }
  
  if(keyIsDown(UP_ARROW)){
      character.velocity.y = -5;
  }else if(keyIsDown(DOWN_ARROW)){
      character.velocity.y = 5;
  }else{
      character.velocity.y = 0;
  }
  
  character.overlap(base,baseEntered)
  character.collide(goalsred,goalsredEntered)
  character.collide(goalsblue,goalsblueEntered)
  character.collide(goalsyellow,goalsyellowEntered)
  character.collide(goalsverm,goalsvermEntered)
  character.collide(goalsmagenta,goalsmagentaEntered)
  character.collide(goalsindigo,goalsindigoEntered)
    
   drawSprites();
  },
  
  nextScene:function(){
    currentScene = "grats"
  
  }

}

let bg2;
let y2 = 0;

let gratsScene = {
  setup:function(){
  bg2 = loadImage('gamepage3.png');
  createCanvas(1920, 1080);
  
  },
  update:function(){
    

  },
  
  draw:function(){
    background(bg2);

  y++;
  if (y2 > height) {
    y2 = 0;
  }
  },
  
  nextScene:function(){
    currentScene = "wheel1"
  }

}

let bg9;
let y9 = 0;

let wheel1Scene = {
  setup:function(){
  bg9 = loadImage('fin-1.png');
  createCanvas(1920, 1080);
  
  },
  update:function(){
    

  },
  
  draw:function(){
    background(bg9);

  y++;
  if (y2 > height) {
    y2 = 0;
  }
  },
  
  nextScene:function(){
    currentScene = "lvl2"
  }

}

let bg8;
let y8 = 0;

let lvl2Scene = {
  setup:function(){
  bg8 = loadImage('stage-13.png');
  createCanvas(1920, 1080);
  
  },
  update:function(){
    

  },
  
  draw:function(){
    background(bg8);

  y++;
  if (y2 > height) {
    y2 = 0;
  }
  },
  
  nextScene:function(){
    currentScene = "main2"
  }

}




let bg3;
let y3 = 0;

let main2Scene = {
  setup:function(){
    
    bg3 = loadImage('gamepage2-1.png');
  createCanvas(1920, 1080);


chartreuse = color(208,214,68);
   blue = color(73,109,172);
   green = color(108,170,80);
   indigo = color(86,75,152); 
   purple = color(142,85,156);
   ochre = color(246,193,47);
    
    
  character2 = createSprite(1227, 520);
  character2.shapeColor = "white";
    
  character2.addAnimation('normals','boinkboink-originalepng.png');
  character2.addAnimation('greenys','boinkboink-green.png');
  character2.addAnimation('purplys','boinkboink-purple.png');
  character2.addAnimation('chartys','boinkboink-chartreuse.png');
  character2.addAnimation('blueys','boinkboink-blue.png');
  character2.addAnimation('turqys','boinkboink-turqoise.png'); 
  character2.addAnimation('indys','boinkboink-indigo.png'); 
  character2.addAnimation('ochreys','boinkboink-ochre.png'); 
    
  base2 = createSprite(1227, 520);
  //base.shapeColor = "white"; 
 base2.addAnimation('bucket','FINAL/refresh-17.png');  
  
  goalscharts = createSprite(1536, 320);
  //goals1.draw = function() { ellipse(0,0,100,100) }
  goalscharts.shapeColor = chartreuse
    goalscharts.scale = 0.80
  //character.addImage(loadImage('red.png'))
  
  goalsblues = createSprite(1290, 790);
  goalsblues.shapeColor = blue
    goalsblues.scale = 0.80
  //character.addImage(loadImage('blue.png'))
  
  goalsgreens = createSprite(1080, 243);
  goalsgreens.shapeColor = green
    goalsgreens.scale = 0.80
    
  goalsinds = createSprite(930, 480);
  goalsinds.shapeColor = indigo
    goalsinds.scale = 0.80
    
  goalspurps = createSprite(1657, 720);
  goalspurps.shapeColor = purple
    goalspurps.scale = 0.80
    
  goalsochs = createSprite(995, 860);
  goalsochs.shapeColor = ochre
    goalsochs.scale = 0.80
    
  },
  update:function(){
   goalsblue.visible = false;
  goalsred.visible = false;
  goalsyellow.visible = false;
  goalsverm.visible = false;
  goalsindigo.visible = false;
  goalsmagenta.visible = false;
  goalscharts.visible = true;
  goalsblues.visible = true;
  goalsgreens.visible = true;
  goalsinds.visible = true;
  goalspurps.visible = true;
  goalsochs.visible = true;
  base.visible = false;
  base2.visible = true;
  character.visible = false;
  character2.visible = true;
  
  },
  draw:function(){
    
 background(bg3);

  y++;
  if (y3 > height) {
    y3 = 0;
  }

  
    
     //check if LEFT or RIGHT arrow keys are down. 
  if(keyIsDown(LEFT_ARROW)){
    character2.velocity.x = -5; // add movement velocity towards -1(left) direction.
  }else if(keyIsDown(RIGHT_ARROW)){
    character2.velocity.x = 5;  // add movement velocity towards  1(right) direction
  }else{
    character2.velocity.x = 0;
  }
  
  if(keyIsDown(UP_ARROW)){
      character2.velocity.y = -5;
  }else if(keyIsDown(DOWN_ARROW)){
      character2.velocity.y = 5;
  }else{
      character2.velocity.y = 0;
  }
  
  character2.overlap(base2,base2Entered)
  character2.collide(goalsgreens,goalsgreensEntered)
  character2.collide(goalsblues,goalsbluesEntered)
  character2.collide(goalscharts,goalschartsEntered)
  character2.collide(goalsinds,goalsindsEntered)
  character2.collide(goalspurps,goalspurpsEntered)
  character2.collide(goalsochs,goalsochsEntered)
  
   drawSprites();
  },
  
  nextScene:function(){
    currentScene = "end"
  
  }

}




let bg4;
let y4 = 0;

let endScene = {

  setup:function(){
    bg4 = loadImage('gamepage4.png');
  createCanvas(1920, 1080);
        
  },
  update:function(){

  },
  
  draw:function(){
       background(bg4);

  y++;
  if (y4 > height) {
    y4 = 0;
  }
    
  },
  
  nextScene:function(){
    currentScene = "wheel2"
  }

}

let bg10;
let y10 = 0;

let wheel2Scene = {
  setup:function(){
  bg10 = loadImage('fin2.png');
  createCanvas(1920, 1080);
  
  },
  update:function(){
    

  },
  
  draw:function(){
    background(bg10);

  y++;
  if (y2 > height) {
    y2 = 0;
  }
  },
  
  nextScene:function(){
    currentScene = "trueend"
  }

}

let bg11;
let y11 = 0;

let trueendScene = {
  setup:function(){
  bg11 = loadImage('end.png');
  createCanvas(1920, 1080);
    

  
  },
  update:function(){


  },
  
  draw:function(){
    background(bg11);

  y++;
  if (y2 > height) {
    y2 = 0;
    
    
  }
  },
  
  nextScene:function(){
    currentScene = "title"
  }

}

//Define scenes
let scenes = {
   "title":titleScene,
  "instructions":instructionsScene,
  "instructions2":instructions2Scene,
  "start":startScene,
   "main":mainScene,
  "grats":gratsScene,
  "wheel1":wheel1Scene,
  "lvl2":lvl2Scene,
  "main2":main2Scene,
   "end":endScene,
  "wheel2":wheel2Scene,
  "trueend":trueendScene
}

//Set current scene to titleScene
let currentScene = "title";


function setup() {
  createCanvas(1920, 1080);
  //call setup methods of each scenes
  scenes["title"].setup();
  scenes["instructions"].setup();
  scenes["instructions2"].setup();
  scenes["start"].setup();
  scenes["main"].setup();
  scenes["grats"].setup();
  scenes["wheel1"].setup();
  scenes["lvl2"].setup();
  scenes["main2"].setup();
  scenes["end"].setup();
  scenes["wheel2"].setup();
  scenes["trueend"].setup();

    
    
  
}

function draw() {
  //call update method of the current scene
  scenes[currentScene].update();
  //call draw method of the current scene
  scenes[currentScene].draw();

}

function mousePressed(){
  //call nextScene method when mouse is pressed.
  scenes[currentScene].nextScene();
  
  if(currentScene === 'trueend'){
   mySound5.setVolume(1);
  mySound5.play();
    
    mySound.stop();
  }
  
    
  else if(currentScene === 'title'){
    mySound.play();
  mySound5.stop();}
  
    else if(currentScene === 'main'){
    mySound7.play();
      mySound7.setVolume(0.3);
  }
  
    else if(currentScene === 'grats'){
  mySound7.stop();}
  
    else if(currentScene === 'main2'){
    mySound7.play();
      mySound7.setVolume(0.3);
}
  
      else if(currentScene === 'end'){
  mySound7.stop();}
  
  

  



    
}

function baseEntered(){
  
   print("Home!!")
  
  if(character.getAnimationLabel () === 'reddy'){
     characterColor = "white";
     character.changeAnimation ('normal');
         mySound6.setVolume(0.2);
  mySound6.play();
   }
  
  else if(character.getAnimationLabel () === 'bluey'){
     characterColor = "white";
     character.changeAnimation ('normal');
             mySound6.setVolume(0.2);
  mySound6.play();
   }
  
  else if(character.getAnimationLabel () === 'yelly'){
     characterColor = "white";
     character.changeAnimation ('normal');
             mySound6.setVolume(0.2);
  mySound6.play();
   }
  
    else if(character.getAnimationLabel () === 'vermy'){
     characterColor = "white";
     character.changeAnimation ('normal');
      
                   mySound6.setVolume(0.2);
  mySound6.play();
   }
  
    else if(character.getAnimationLabel () === 'indigoy'){
     characterColor = "white";
     character.changeAnimation ('normal');
      
                   mySound6.setVolume(0.2);
  mySound6.play();
   }
  
    else if(character.getAnimationLabel () === 'magentey'){
     characterColor = "white";
     character.changeAnimation ('normal');
      
                   mySound6.setVolume(0.2);
  mySound6.play();
   }
}

function goalsredEntered(){
  
   print("goalred!!")
  
   if(character.getAnimationLabel () === 'normal'){
     characterColor = red;
     character.changeAnimation ('reddy');
       mySound2.setVolume(1.5);
  mySound2.play();
  
      }
  
  else if(character.getAnimationLabel () === 'bluey'){
     characterColor = red;
     character.changeAnimation ('purply');
      mySound4.setVolume(2);
  mySound4.play();
   }
  else if(character.getAnimationLabel () === 'yelly'){
     characterColor = red;
     character.changeAnimation ('yelly');
         mySound3.setVolume(0.5);
  mySound3.play();
  
   }
  
   else if(character.getAnimationLabel () === 'vermy'){
     characterColor = red;
     character.changeAnimation ('vermy');
              mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character.getAnimationLabel () === 'indigoy'){
     characterColor = red;
     character.changeAnimation ('indigoy');
                mySound3.setVolume(0.5);
  mySound3.play();
  }
  
   else if(character.getAnimationLabel () === 'magentey'){
     characterColor = red;
     character.changeAnimation ('magentey');
              mySound3.setVolume(0.5);
  mySound3.play();
  }
  
      if(character.getAnimationLabel () === 'purply'){
  scenes[currentScene].nextScene();}
}
  
function goalsblueEntered(){
  
   print("goalblue!!")
  
   if(character.getAnimationLabel () === 'normal'){
     characterColor = blue;
     character.changeAnimation ('bluey');
       mySound2.setVolume(1.5);
  mySound2.play();
      }
  
  else if(character.getAnimationLabel () === 'reddy'){
     characterColor = blue;
     character.changeAnimation ('purply');
      mySound4.setVolume(2);
  mySound4.play();
   }
    
  else if(character.getAnimationLabel () === 'yelly'){
     characterColor = blue;
     character.changeAnimation ('yelly');
         mySound3.setVolume(0.5);
  mySound3.play();
   }
    
 else if(character.getAnimationLabel () === 'vermy'){
     characterColor = blue;
     character.changeAnimation ('vermy');
         mySound3.setVolume(0.5);
  mySound3.play();
  }


else if(character.getAnimationLabel () === 'indigoy'){
     characterColor = blue;
     character.changeAnimation ('indigoy');
         mySound3.setVolume(0.5);
  mySound3.play();
  }
  
   else if(character.getAnimationLabel () === 'magentey'){
     characterColor = blue;
     character.changeAnimation ('magentey');
         mySound3.setVolume(0.5);
  mySound3.play();
  }
    
      if(character.getAnimationLabel () === 'purply'){
  scenes[currentScene].nextScene();
      }
    
    
    //else 
    //  (character.changeAnimation('normal'));

  }

function goalsyellowEntered(){
  
   print("goalyellow!!")
  
     
 if(character.getAnimationLabel () === 'normal'){
     characterColor = yellow;
     character.changeAnimation ('yelly');
     mySound2.setVolume(1.5);
  mySound2.play();
  }
     
 else if(character.getAnimationLabel () === 'reddy'){
     characterColor = yellow;
     character.changeAnimation ('reddy');
            mySound3.setVolume(0.5);
  mySound3.play();
  }
     
 else if(character.getAnimationLabel () === 'bluey'){
     characterColor = yellow;
     character.changeAnimation ('bluey');
            mySound3.setVolume(0.5);
  mySound3.play();
  }
  
 else if(character.getAnimationLabel () === 'vermy'){
     characterColor = yellow;
     character.changeAnimation ('vermy');
            mySound3.setVolume(0.5);
  mySound3.play();
  }

     else if(character.getAnimationLabel () === 'indigoy'){
     characterColor = yellow;
     character.changeAnimation ('indigoy');
                mySound3.setVolume(0.5);
  mySound3.play();
  }
  
   else if(character.getAnimationLabel () === 'magentey'){
     characterColor = yellow;
     character.changeAnimation ('magentey');
              mySound3.setVolume(0.5);
  mySound3.play();
  }
  
}

function goalsvermEntered(){
  
   print("goalverm!!")
  
     
 if(character.getAnimationLabel () === 'normal'){
     characterColor = vermillion;
     character.changeAnimation ('vermy');
     mySound2.setVolume(1.5);
  mySound2.play();
  }
     
 else if(character.getAnimationLabel () === 'reddy'){
     characterColor = vermillion;
     character.changeAnimation ('reddy');
            mySound3.setVolume(0.5);
  mySound3.play();
  }
     
 else if(character.getAnimationLabel () === 'bluey'){
     characterColor = vermillion;
     character.changeAnimation ('bluey');
            mySound3.setVolume(0.5);
  mySound3.play();
  }
  
 else if(character.getAnimationLabel () === 'yelly'){
     characterColor = vermillion;
     character.changeAnimation ('yelly');
            mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character.getAnimationLabel () === 'indigoy'){
     characterColor = vermillion;
     character.changeAnimation ('indigoy');
                mySound3.setVolume(0.5);
  mySound3.play();
  }
  
   else if(character.getAnimationLabel () === 'magentey'){
     characterColor = vermillion;
     character.changeAnimation ('magentey');
              mySound3.setVolume(0.5);
  mySound3.play();
  }
}
  
 
  function goalsmagentaEntered(){
  
   print("goalmerg!!")
  
     
 if(character.getAnimationLabel () === 'normal'){
     characterColor = magenta;
     character.changeAnimation ('magentey');
     mySound2.setVolume(1.5);
  mySound2.play();
  }
     
 else if(character.getAnimationLabel () === 'reddy'){
     characterColor = magenta;
     character.changeAnimation ('reddy');
            mySound3.setVolume(0.5);
  mySound3.play();
  }
     
 else if(character.getAnimationLabel () === 'bluey'){
     characterColor = magenta;
     character.changeAnimation ('bluey');
            mySound3.setVolume(0.5);
  mySound3.play();
  }
  
 else if(character.getAnimationLabel () === 'yelly'){
     characterColor = magenta;
     character.changeAnimation ('yelly');
          mySound3.setVolume(0.5);
  mySound3.play();
 }
  
   
   else if(character.getAnimationLabel () === 'vermy'){
     characterColor = magenta;
     character.changeAnimation ('vermy');
  }
  
   else if(character.getAnimationLabel () === 'indigoy'){
     characterColor = magenta;


character.changeAnimation ('indigoy');
              mySound3.setVolume(0.5);
  mySound3.play();
  }
 
}

  function goalsindigoEntered(){
  
   print("goalind!!")
  
     
 if(character.getAnimationLabel () === 'normal'){
     characterColor = indigo;
     character.changeAnimation ('indigoy');
     mySound2.setVolume(1.5);
  mySound2.play();
  }
     
 else if(character.getAnimationLabel () === 'reddy'){
     characterColor = indigo;
     character.changeAnimation ('reddy');
            mySound3.setVolume(0.5);
  mySound3.play();
  }
     
 else if(character.getAnimationLabel () === 'bluey'){
     characterColor = indigo;
     character.changeAnimation ('bluey');
            mySound3.setVolume(0.5);
  mySound3.play();
  }
  
 else if(character.getAnimationLabel () === 'yelly'){
     characterColor = indigo;
     character.changeAnimation ('yelly');
          mySound3.setVolume(0.5);
  mySound3.play();
 }
    
   
   else if(character.getAnimationLabel () === 'vermy'){
     characterColor = indigo;
     character.changeAnimation ('vermy');
              mySound3.setVolume(0.5);
  mySound3.play();
  }
  
   else if(character.getAnimationLabel () === 'magentey'){
     characterColor = indigo;
     character.changeAnimation ('magentey');
              mySound3.setVolume(0.5);
  mySound3.play();
  }
 
}

function base2Entered(){
  
   print("Home!!")
  
  if(character2.getAnimationLabel () === 'blueys'){
     character2Color = "white";
     character2.changeAnimation ('normals');
             mySound6.setVolume(0.2);
  mySound6.play();
   }
  
  else if(character2.getAnimationLabel () === 'greenys'){
     character2Color = "white";
     character2.changeAnimation ('normals');
    
                 mySound6.setVolume(0.2);
  mySound6.play();
   }
  
  else if(character2.getAnimationLabel () === 'chartys'){
     character2Color = "white";
     character2.changeAnimation ('normals');
                 mySound6.setVolume(0.2);
  mySound6.play();
   }
  
    else if(character2.getAnimationLabel () === 'indys'){
     character2Color = "white";
     character2.changeAnimation ('normals');
      
                   mySound6.setVolume(0.2);
  mySound6.play();
   }
  
  else if(character2.getAnimationLabel () === 'purplys'){
     character2Color = "white";
     character2.changeAnimation ('normals');
    
                 mySound6.setVolume(0.2);
  mySound6.play();
   }
  
  else if(character2.getAnimationLabel () === 'ochreys'){
     character2Color = "white";
     character2.changeAnimation ('normals');
    
                 mySound6.setVolume(0.2);
  mySound6.play();
   }
  
}

function goalsbluesEntered(){
  
   print("goalblues!!")
  
   if(character2.getAnimationLabel () === 'normals'){
     character2Color = blue;
     character2.changeAnimation ('blueys');
       mySound2.setVolume(1.5);
  mySound2.play();
      }
  
  else if(character2.getAnimationLabel () === 'greenys'){
     character2Color = blue;
     character2.changeAnimation ('turqys');
         mySound4.setVolume(2);
  mySound4.play();
   }
  else if(character2.getAnimationLabel () === 'chartys'){
     character2Color = blue;
     character2.changeAnimation ('chartys');
             mySound3.setVolume(0.5);
  mySound3.play();
   }
  
   else if(character2.getAnimationLabel () === 'indys'){
     character2Color = blue;
     character2.changeAnimation ('indys');
       mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'purplys'){
     character2Color = blue;
     character2.changeAnimation ('purplys');
         mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'ochreys'){
     character2Color = blue;
     character2.changeAnimation ('ochreys');
         mySound3.setVolume(0.5);
  mySound3.play();
  }
  
      if(character2.getAnimationLabel () === 'turqys'){
  scenes[currentScene].nextScene();}
}

function goalsgreensEntered(){
  
   print("goalgreens!!")
  
   if(character2.getAnimationLabel () === 'normals'){
     character2Color = green;
     character2.changeAnimation ('greenys');
       mySound2.setVolume(1.5);
  mySound2.play();
      }
  
  else if(character2.getAnimationLabel () === 'blueys'){
     character2Color = green;
     character2.changeAnimation ('turqys');
         mySound4.setVolume(2);
  mySound4.play();
   }
  else if(character2.getAnimationLabel () === 'chartys'){
     character2Color = green;
     character2.changeAnimation ('chartys');
      mySound3.setVolume(0.5);
  mySound3.play();
   }
  
   else if(character2.getAnimationLabel () === 'indys'){
     character2Color = green;
     character2.changeAnimation ('indys');
           mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'purplys'){
     character2Color = green;
     character2.changeAnimation ('purplys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'ochreys'){
     character2Color = green;
     character2.changeAnimation ('ochreys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }
  
      if(character2.getAnimationLabel () === 'turqys'){
  scenes[currentScene].nextScene();}
}

function goalschartsEntered(){
  
   print("goalcharts!!")
  
   if(character2.getAnimationLabel () === 'normals'){
     character2Color = chartreuse;
     character2.changeAnimation ('chartys');
       mySound2.setVolume(1.5);
  mySound2.play();
      }
  
  else if(character2.getAnimationLabel () === 'blueys'){
     character2Color = chartreuse;
     character2.changeAnimation ('blueys');
          mySound3.setVolume(0.5);
  mySound3.play();
   }
  else if(character2.getAnimationLabel () === 'greenys'){
     character2Color = chartreuse;
     character2.changeAnimation ('greenys');
          mySound3.setVolume(0.5);
  mySound3.play();
   }
  
   else if(character2.getAnimationLabel () === 'indys'){
     character2Color = chartreuse;
     character2.changeAnimation ('indys');
           mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'purplys'){
     character2Color = chartreuse;
     character2.changeAnimation ('purplys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'ochreys'){
     character2Color = chartreuse;
     character2.changeAnimation ('ochreys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }

}

function goalsindsEntered(){
  
   print("goalinds!!")
  
   if(character2.getAnimationLabel () === 'normals'){
     character2Color = indigo;
     character2.changeAnimation ('indys');
       mySound2.setVolume(1.5);
  mySound2.play();
      }
  
  else if(character2.getAnimationLabel () === 'blueys'){
     character2Color = indigo;
     character2.changeAnimation ('blueys');
          mySound3.setVolume(0.5);
  mySound3.play();
   }
  else if(character2.getAnimationLabel () === 'greenys'){
     character2Color = indigo;
     character2.changeAnimation ('greenys');
          mySound3.setVolume(0.5);
  mySound3.play();
   }
  
   else if(character2.getAnimationLabel () === 'chartys'){
     character2Color = indigo;
     character2.changeAnimation ('chartys');
           mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'purplys'){
     character2Color = indigo;
     character2.changeAnimation ('purplys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'ochreys'){
     character2Color = indigo;
     character2.changeAnimation ('ochreys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }

}


function goalspurpsEntered(){
  
   print("goalpurps!!")
  
   if(character2.getAnimationLabel () === 'normals'){
     character2Color = purple;
     character2.changeAnimation ('purplys');
       mySound2.setVolume(1.5);
  mySound2.play();
      }
  
  else if(character2.getAnimationLabel () === 'blueys'){
     character2Color = purple;
     character2.changeAnimation ('blueys');
          mySound3.setVolume(0.5);
  mySound3.play();
   }
  else if(character2.getAnimationLabel () === 'greenys'){
     character2Color = purple;
     character2.changeAnimation ('greenys');
          mySound3.setVolume(0.5);
  mySound3.play();
   }
  
   else if(character2.getAnimationLabel () === 'chartys'){
     character2Color = purple;
     character2.changeAnimation ('chartys');
           mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'indys'){
     character2Color = purple;
     character2.changeAnimation ('indys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'ochreys'){
     character2Color = purple;
     character2.changeAnimation ('ochreys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }

}

function goalsochsEntered(){
  
   print("goalochs!!")
  
   if(character2.getAnimationLabel () === 'normals'){
     character2Color = ochre;
     character2.changeAnimation ('ochreys');
       mySound2.setVolume(1.5);
  mySound2.play();
      }
  
  else if(character2.getAnimationLabel () === 'blueys'){
     character2Color = ochre;
     character2.changeAnimation ('blueys');
          mySound3.setVolume(0.5);
  mySound3.play();
   }
  else if(character2.getAnimationLabel () === 'greenys'){
     character2Color = ochre;
     character2.changeAnimation ('greenys');
          mySound3.setVolume(0.5);
  mySound3.play();
   }
  
   else if(character2.getAnimationLabel () === 'chartys'){
     character2Color = ochre;
     character2.changeAnimation ('chartys');
           mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'indys'){
     character2Color = ochre;
     character2.changeAnimation ('indys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }
  
     else if(character2.getAnimationLabel () === 'purplys'){
     character2Color = ochre;
     character2.changeAnimation ('purplys');
             mySound3.setVolume(0.5);
  mySound3.play();
  }

}