// ID Lao Game by Ashley Huang & Deborah Loh
var score;
var searchDevice
var microBit;
// sprites
var emojiman;
var ladle;
var ladleStill;
var ladleScoop;
var pot;
var wall1;
var wall2;
var wall3;
var wall4;


var ingredients;
var prawns;
var potatoes;
var chicken;
var titleBg

//Character moves variables
// x position variable
var xpos;
// y position variable
var ypos;

// microBit variables
var moveX, moveY;
var targetX;
var targetY;
// easing variable
var easing = 0.5
//microbit extension


var MARGIN = 40

function preload() {
  font = loadFont('boo/apercu-mono-webfont.ttf')
boilsong = loadSound('BOILING WATER SOUND EFFECT.mp3')

  openingImg = loadImage('updated game screens-01.png');

  //create an animation from a sequence of numbered images
  //pass the first and the last file name and it will try to find the ones in between
  prawns = loadAnimation('asset/prawn1.png', 'asset/prawn4.png');
  ladleScoop = loadAnimation('boo/2.png','boo/3.png')
  //ashleyhuang
  titleBg = loadImage('updated game screens-04.png')
  
}


// input for sprites
function createPrawns(type, x, y,s,rot) {
  var a = createSprite(x, y);
  a.type = type;
  console.log(type);

  if(type == 0){
  a.addAnimation('asset/prawn1.png','asset/prawn2.png','asset/prawn2.png', 'asset/prawn4.png')
  }else if(type==1){
  a.addAnimation('asset/mushroom1.png','asset/mushroom2.png','asset/mushroom3.png', 'asset/mushroom4.png')
  }else if(type==2){
     a.addAnimation('asset/meatroll1.png','asset/meatroll2.png','asset/meatroll3.png', 'asset/meatroll4.png')
    }else if(type==3){
      
      a.addAnimation('asset/egg1.png','asset/egg2.png','asset/egg3.png', 'asset/egg4.png')
  }else if(type==4){
      
      a.addAnimation('asset/beancurd1.png','asset/beancurd2.png','asset/beancurd3.png', 'asset/beancurd4.png')
  }else if(type==5){
      
      a.addAnimation('asset/meatball1.png','asset/meatball2.png','asset/meatball3.png', 'asset/meatball4.png')
  }
  
  a.setSpeed(s, rot);
  a.rotationSpeed = random(-1,1);
 // a.debug = true;
  a.scale = .05;
// a.life = 1000
  a.mass = 2+a.scale;
  a.setCollider("circle", 0, 0, 100);
  prawns.add(a);
  return a;
}

function prawnHit(prawns, ladle) {
// extra animation
// for(var i=0; i<10; i++) {
//   var p = createSprite(prawns.position.x, prawns.position.y);
//   extra animation (kill off animation)
//   p.addImage(loadImage('assets/container.png'));
//   p.setSpeed(random(0.1,0.2), random(360));
//   p.scale=0.2;
//   p.mass=0.1;
//   p.life=200;
//   containers.add(p);

//   }
  
score=score+1;
prawns.remove();

}

function createLadle(x,y){
  ladle = createSprite(x, y);
  ladle.mass = 10;
  ladle.scale=0.2;
  ladle.addAnimation("ladleScoop","asset/ladle.png");
  ladle.addAnimation("ladleStill","asset/ladle.png");
  ladle.setCollider("circle", 0, 90, 220);
//  ladle.debug = true;
}
function showLadle(){
    ladle.changeAnimation("ladleStill");
    ladle.scale=0.2;
    
}

function showScoop(){

  ladle.changeAnimation("ladleScoop");
  ladle.scale=0.2;
  microBit.writeMatrixIcon(hot); // change to splash animation frame?
}

function updateLadle(){
    var dx = targetX - xpos;
    if(abs(dx) > 1) {
      xpos += dx * easing;
    }
    // calculate the new ypos value
    var dy = targetY - ypos;
    if(abs(dy) > 1) {
      ypos += dy * easing;
    }
  ladle.position.x=xpos;
  ladle.position.y=ypos;
  targetX = xpos + moveX/100;
  targetY = ypos + moveY/100;

}


function setup() {
  textFont(font)
  fill (255)
   boilsong.loop();
  createCanvas(842, 595);
  background(255,203,97)
  imageMode(CENTER);
  openingImg = loadImage('updated game screens-01.png');
  xpos=842/2;
  ypos=595/2

  titleBg = loadImage('updated game screens-04.png');
  microBit=new uBit();
  
// button positioning
  button = createButton('connect microBit');
  button.position(0,595);
  button.mousePressed(searchDevice); // attach button listener
  
  walls = new Group();
 
  wall1 = createSprite (842/2, 120,842,30); //top wall
  wall2 = createSprite (842/2, 480,842,30); //bottom wall
  wall3 = createSprite (250, 595/2,30,595); //left wall
  wall4 = createSprite (600, 595/2,30,595); //right wall
  
  walls.add(wall1)
  walls.add(wall2)
  walls.add(wall3)
  walls.add(wall4)
  
prawns = new Group();

// spawning potatoes
for(var i = 0; i<10; i++) {
  var ang = random(360);
  var px = int(random(320,600)); //x axis
  var py = int(random(200,500)); //y axis
  var sp= random(-0.3,0.3)+1; //speed
  var rot = random(0,360); //rotation
  var type = int(random(0,5));
  createPrawns(type, px, py, sp,rot);
  }
// create ladle
 createLadle(421, 297.5);
    score= 0;
  //pot = createSprite(windowWidth/2,windowHeight/2);
  //  pot.addImage(loadImage('Asset 31.png'));
  
  
  microBit.setButtonACallback(function(){
    console.log("buttonA pressed");

    //gameScreen();
      showLadle();
      microBit.writeMatrixIcon(ok);
  });

  microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
  });

  microBit.onConnect(function(){
    console.log("connected");
  });

  microBit.onDisconnect(function(){
    console.log("disconnected");
  });

}

function draw() {
  background(255,203,97);
  //titleBg.resize(842,595);
  //image(titleBg,421,297.5)

  titleScreen();
  image(openingImg,421,297.5,842,595)
  if (microBit.connected){
    get_Microbit_values();
    // ID Lao will be gone
   
   image(titleBg,421,297.5,842,595)
gameScreen();
  }
  //  button = createButton(connect microbBit');
   // button.mousePressed(searchDevice); // attach button listener
    
   
  
   else {
    // main page title / onboarding
     titleScreen()
  }
  
  //potatoes.bounce(potatoes);
  //potatoes.bounce(walls);

  updateLadle();
  //updatePrawns();
  
  prawns.collide (walls);
// ladle.collide (walls)
  
  defineCollisions();
  drawSprites(ingredients);
  drawSprites(potatoes);
  drawSprites(chicken);
  drawSprite(ladle);
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
// restriction for ingredients to fall out 
  
}
function defineCollisions(){
  prawns.bounce(prawns);
  prawns.bounce(ladle);
  prawns.collide(ladle, prawnHit);
  // prawns.bounce(walls);
}

function updatePrawns(){
  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
    if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
    if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
    if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }
}

function titleScreen(){

 // fill(0,255, 255);
  textAlign(CENTER);
  textSize(20);
  text("CONNECT MICROBIT TO START GAME", width/2, 40);
  textSize(20);

  //console.log(temp);
}


function gameScreen(){
  textAlign(CENTER)
if (score<9) {
  fill(0,0,0);
  textSize(15);
  text("START EATING!!", 421, 40);
}
  if (score<10) {
      textSize(15);
  text("YOU'VE EATEN " + score + " PIECES, BUT THERE'S ALWAYS ROOM FOR MORE", 421, 60);}
  
    if (score==10) {
        fill(0,0,0);
        textSize(15);
  text("GOOD JOB! HOTPOT IS LIFE", 421, 60);}
 
 

}

function get_Microbit_values() {
  //console.log ("acceleration",microBit.getAccelerometer());
  moveX=microBit.getAccelerometer().x;
  moveY=microBit.getAccelerometer().y;

}

function searchDevice(){
  microBit.searchDevice();
}


function mousePressed() {
 
}

// Thank you for teaching us coding YUTA !! :D
