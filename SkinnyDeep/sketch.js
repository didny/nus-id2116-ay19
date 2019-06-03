var girl;
var girl2;
var girl3;
var girl4;
var girl5;
var girl6;
var girl7;
var girl8;
var girl9;
var girl10;
var wall1;
var wall2;

var microBit;

var buoy;
var buoy2;
var slipper1;
var slipper2;
var goggles;
var flippers;
var shorts;
var underwear;
var beachBall;
var bikini;
var hat;
var onePiece;

var buoyb;
var buoy2b;
var slipper1b;
var slipper2b;
var gogglesb;
var flippersb;
var shortsb;
var underwearb;
var beachBallb;
var bikinib;
var hatb;
var onePieceb;

var popup;
var gameOver;
var youWin;
var heart;
var currentScene = "title";
var song;
var scream;




function preload() {
song = loadSound ('Funny - Background.mp3')
scream = loadSound('Humi1013.mp3')
}


function searchDevice(){
	microBit.searchDevice();
}

function setup() {
  createCanvas(1800, 500);
  img = loadImage('Swimming Pool 2.png')  

  song.loop()
  song.rate (1)
  
  scream.rate (1);
  scream.duration(1);
  
  //create a sprite
  girl = createSprite(150, 250);
  girl.addImage(loadImage('Girl 1.png'));
  // girl.debug = true;
  girl.setCollider("rectangle", 5, -8, 150, 50);
  
  //heart = createSprite(100,250)
  heart = loadImage("heart.png")
  
  girl.addAnimation('girl1', 'Girl 1.png')
  girl.addAnimation('girl2', 'Girl 2.png')
  girl.addAnimation('girl3', 'Girl 3.png')
  girl.addAnimation('girl4', 'Girl 4.png')
  girl.addAnimation('girl5', 'Girl 5.png')
  girl.addAnimation('girl6', 'Girl 6.png')
  girl.addAnimation('girl7', 'Girl 7.png')
  girl.addAnimation('girl8', 'Girl 8.png')
  girl.addAnimation('girl9', 'Girl 9.png')
  girl.addAnimation('girl10', 'Girl 10.png')
  
  girl.hitcount = 0
  
  popup = loadImage("pop-up-png-7-1.png")
  gameOver = loadImage('Game Over 1.png');

  youWin = createSprite(4250, 250);
  youWin.addAnimation('win','Win 1.png', 'Win 2.png','Win 3.png', 'Win 4.png', 'Win 5.png');
  youWin.animation.frameDelay = 6;
  
  
  walls = new Group();
  
  wall1 = createSprite (2000, -50);
  // wall1.debug = true
  wall1.setCollider ("rectangle", 0, 0, 4000, 100);
  walls.add (wall1)
  
  wall2 = createSprite (2000, 550);
  // wall2.debug = true
  wall2.setCollider ("rectangle", 0, 0, 40000, 100);
  walls.add (wall2)
  
  
  
  obstacles = new Group()
  
  buoy = createSprite(200, 90);
  buoy.addImage(loadImage('Life Buoy.png'));
  // buoy.debug = true;
  buoy.setCollider("circle", 05, -05, 39);
  obstacles.add(buoy);
  
  buoy2 = createSprite(1350, 420);
  buoy2.addImage(loadImage('Life Buoy 2.png'));
  // buoy2.debug = true;
  buoy2.setCollider("circle", 10, -05, 35);
  obstacles.add(buoy2);
  
  slipper1 = createSprite(200, 350);
  slipper1.addImage(loadImage('Slipper Left.png'));
  // slipper1.debug = true;
  slipper1.setCollider("rectangle", 7,-6, 60, 25);
  obstacles.add(slipper1);
  
  slipper2 = createSprite(1000, 100);
  slipper2.addImage(loadImage('Slipper Right.png'));
  // slipper2.debug = true;
  slipper2.setCollider("rectangle", 7,-6, 60, 25);
  obstacles.add(slipper2);
  
  goggles = createSprite(500, 300);
  goggles.addImage(loadImage('Goggles.png'));
  // goggles.debug = true;
  goggles.setCollider("circle", 0, -05, 25);
  obstacles.add(goggles);
  
  flippers = createSprite(1100, 350);
  flippers.addImage(loadImage('Flippers.png'));
  // flippers.debug = true;
  flippers.setCollider("rectangle", 7,-6, 60, 105);
  obstacles.add(flippers);
  
  shorts = createSprite(1700, 100);
  shorts.addImage(loadImage('Shorts.png'));
  // shorts.debug = true;
  shorts.setCollider("rectangle", 7,-8, 40, 50);
  obstacles.add(shorts);
  
  underwear = createSprite(600, 450);
  underwear.addImage(loadImage('Underwear.png'));
  // underwear.debug = true;
  underwear.setCollider("rectangle", 7,-8, 30, 65);
  obstacles.add(underwear);
  
  beachBall = createSprite(800, 150);
  beachBall.addImage(loadImage('Beach Ball.png'));
  // beachBall.debug = true;
  beachBall.setCollider("circle", 9, -08, 40);
  obstacles.add(beachBall);
  
  bikini = createSprite(850, 400);
  bikini.addImage(loadImage('Bikini.png'));
  // bikini.debug = true;
  bikini.setCollider("rectangle", 7,-8, 95, 70);
  obstacles.add(bikini);
  
  hat = createSprite(1800, 320);
  hat.addImage(loadImage('Hat.png'));
  // hat.debug = true;
  hat.setCollider("rectangle", 7,-5, 45, 70);
  obstacles.add(hat);
  
  onePiece = createSprite(1500, 200);
  onePiece.addImage(loadImage('One-piece.png'));
  // onePiece.debug = true;
  onePiece.setCollider("rectangle", 7,-8, 85, 50);
  obstacles.add(onePiece);
  
  buoyb = createSprite(1900, 90);
  buoyb.addImage(loadImage('Life Buoy.png'));
  // buoyb.debug = true;
  buoyb.setCollider("circle", 05, -05, 39);
  obstacles.add(buoyb);
  
  buoy2b = createSprite(3050, 420);
  buoy2b.addImage(loadImage('Life Buoy 2.png'));
  // buoy2b.debug = true;
  buoy2b.setCollider("circle", 10, -05, 35);
  obstacles.add(buoy2b);
  
  slipper1b = createSprite(1950, 320);
  slipper1b.addImage(loadImage('Slipper Left.png'));
  // slipper1b.debug = true;
  slipper1b.setCollider("rectangle", 7,-6, 60, 25);
  obstacles.add(slipper1b);
  
  slipper2b = createSprite(2700, 100);
  slipper2b.addImage(loadImage('Slipper Right.png'));
  // slipper2b.debug = true;
  slipper2b.setCollider("rectangle", 7,-6, 60, 25);
  obstacles.add(slipper2b);
  
  gogglesb = createSprite(2200, 260);
  gogglesb.addImage(loadImage('Goggles.png'));
  // gogglesb.debug = true;
  gogglesb.setCollider("circle", 0, -05, 25);
  obstacles.add(gogglesb);
  
  flippersb = createSprite(3800, 350);
  flippersb.addImage(loadImage('Flippers.png'));
  // flippersb.debug = true;
  flippersb.setCollider("rectangle", 7,-6, 60, 105);
  obstacles.add(flippersb);
  
  shortsb = createSprite(3400, 100);
  shortsb.addImage(loadImage('Shorts.png'));
  // shortsb.debug = true;
  shortsb.setCollider("rectangle", 7,-8, 40, 50);
  obstacles.add(shortsb);
  
  underwearb = createSprite(2300, 450);
  underwearb.addImage(loadImage('Underwear.png'));
  // underwearb.debug = true;
  underwearb.setCollider("rectangle", 7,-8, 30, 65);
  obstacles.add(underwearb);
  
  beachBallb = createSprite(2500, 150);
  beachBallb.addImage(loadImage('Beach Ball.png'));
  // beachBallb.debug = true;
  beachBallb.setCollider("circle", 9, -08, 40);
  obstacles.add(beachBallb);
  
  bikinib = createSprite(2550, 400);
  bikinib.addImage(loadImage('Bikini.png'));
  // bikinib.debug = true;
  bikinib.setCollider("rectangle", 7,-8, 95, 70);
  obstacles.add(bikinib);
  
  hatb = createSprite(3500, 320);
  hatb.addImage(loadImage('Hat.png'));
  // hatb.debug = true;
  hatb.setCollider("rectangle", 7,-5, 45, 70);
  obstacles.add(hatb);
  
  onePieceb = createSprite(3200, 200);
  onePieceb.addImage(loadImage('One-piece.png'));
  // onePieceb.debug = true;
  onePieceb.setCollider("rectangle", 7,-8, 85, 50);
  obstacles.add(onePieceb);
  
  
    microBit=new uBit();

    button = createButton('connect microBit');
    button.mousePressed( searchDevice); // attach button listener

    microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
    girl.position.x -= 10;
  });

    microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
    girl.position.x += 10;
  });

    microBit.onConnect(function(){
    console.log("connected");
  });

    microBit.onDisconnect(function(){
    console.log("disconnected");
  });

}





function draw() {
    background(255, 255, 255);
    image(img, 0,0);
  
if(currentScene === "title"){
   //  //show title image 
   // image(popup, 10,10);
}
  
  
else if(currentScene === "main"){
    camera.position.x = girl.position.x + width/3.5 + 300;
  
if (microBit.connected) {
    fill(255);
    text("connected.", 10, 20);
    let accX = microBit.getAccelerometer().x;
    let accY = microBit.getAccelerometer().y;
    let accZ = microBit.getAccelerometer().z;

    text("Accelerometer X=" + accX, 10, 40);
    text("Accelerometer Y=" + accY, 10, 60);
    text("Accelerometer Z=" + accZ, 10, 80);

    if (accX < 0) {
    girl.rotation -= 1/2 ;
    girl.setSpeed(2, girl.rotation);
   }
    else if (accX >= 0) {
    girl.rotation +=1/2 ;
    girl.setSpeed(2, girl.rotation);
   }
}
  
    
    girl.collide (walls); 
    girl.bounce (youWin);

  
if (girl.bounce(obstacles)) {
    // print("hit")
    girl.hitcount ++;
    print(girl.hitcount)
    scream.play()
}
   obstacles.bounce(obstacles)
   obstacles.bounce(walls)
   girl.bounce (walls)
  
 
  if(girl.hitcount == 0){
  image(heart, girl.position.x + 450 ,35,100,100);
  }
  
if (girl.hitcount == 1){
  girl.changeAnimation('girl2')
  image(heart, girl.position.x + 450 ,35,90,90);
}
else if (girl.hitcount == 2){
  girl.changeAnimation('girl3')
  image(heart, girl.position.x + 450 ,35,80,80);
}
else if (girl.hitcount == 3){
  girl.changeAnimation('girl4')
  image(heart, girl.position.x + 450 ,35,70,70);
}
else if (girl.hitcount == 4){
  girl.changeAnimation('girl5')
  image(heart, girl.position.x + 450 ,35,60,60);
}
else if (girl.hitcount == 5){
  girl.changeAnimation('girl5')
  image(heart, girl.position.x + 450 ,45,50,50);
}
else if (girl.hitcount == 6){
  girl.changeAnimation('girl6')
  image(heart, girl.position.x + 450 ,55,40,40);
}
else if (girl.hitcount == 7){
  girl.changeAnimation('girl7')
  image(heart, girl.position.x + 450 ,55,30,30);
}
else if (girl.hitcount == 8){
  girl.changeAnimation('girl8')
  image(heart, girl.position.x + 450 ,55,20,20);
}
else if (girl.hitcount == 9){
  girl.changeAnimation('girl9')
  image(heart, girl.position.x + 450 ,55,10,10);
} 
  
  else if(girl.hitcount >= 10){
    image(gameOver, girl.position.x + 250,150, 300, 200)
    camera.off()
  }
  
  //show game lost scene once hit count is 10
  drawSprites();


}
}


// function mousePressed() {
currentScene = "main"
// }





function keyPressed(){
}
function keyTyped() {

if (key === 'a') {
    girl.rotation += 6 ;
    girl.setSpeed(4, girl.rotation);
} 

  else if (key === 't') {
    currentScene = "main"
}
 
else if (key === 'd') {
    girl.rotation -= 6 ;
    girl.setSpeed(4, girl.rotation);
}
  
else {
    girl.rotation = 0
}
}