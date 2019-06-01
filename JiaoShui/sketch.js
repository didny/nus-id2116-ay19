let img; // Declare variable 'img'.
let animal;
let fence;
var currentScene = "title";
var endScene = "end";
var animalGif
var gif_loadImg, gif_createImg, wall, wallptwo, tearsdrop, particleImage,asteroids, bullets, clouds, insects;
var ladybug1, ladybug2, ladybug3, worm1, worm2, worm3, worm4, worm5, bugWall, wormWall;
var direction = 100; //insects
//var MARGIN = 20
var hoseSound, gameoverSound, backgroundSound;
var farmer;
var microBit;
var flowerHits = 0;


function searchDevice(){
	microBit.searchDevice();
}
function preload (){

titleScene = loadImage ('FINALSTART.png');
endScene = loadImage('FINALEND.png');  
animalGif = loadAnimation('animals.png','animals.png','animals.png','animals2.png','animals2.png', 'animals2.png');
hoseSound = loadSound("rain.mp3.mp3");
  backgroundSound = loadSound("farmerbg.mp3");
 //gameoverSound = loadSound("Game over.mp3");
}
  
  
function setup() {
  createCanvas(1920, 1080);
  backgroundSound.loop();
img = loadImage('grass bg.jpg');
  //gif_createImg = createImg("animal-transparent.gif");
  //img = loadImage('grass bg.jpg'); 
fence = loadImage ('Fence.png')
  tearsdrop = loadImage('Asset 2.png');  
  particleImage = loadImage('dropsmall.png');
  cloudImage = loadImage ('cloudy.png')
  
  wall = createSprite (width/95, height/8, 30,30);
  wall.addImage(loadImage('grass wall.png'))
  //print(width)
  //test = createSprite(500,50)
  bugWall = createSprite (width/2,-15,width,30)
 wormWall = createSprite(2000,0, 30, 3000)
  
  wallptwo = createSprite (width/1.01, height/8, 30,30);
  wallptwo. addImage(loadImage('wallptwo.png'))  
  //create a sprite
 farmer = createSprite(width/15, height/10, 30, 30);
  farmer.addImage(loadImage('truefarmer.png'));
  //title scene image

  
  microBit=new uBit();

  button = createButton('connect microBit');
  button.mousePressed( searchDevice); 

  microBit.setButtonACallback(function(){
    print(currentScene)
    if(currentScene === 'title'){
      currentScene = 'main'
    } 
    
     if(currentScene === 'end'){
      currentScene = 'title'
    }
    
    if (currentScene === 'main'){
    console.log("buttonA pressed");
    var bullet = createSprite(farmer.position.x, farmer.position.y);
   // backgroundSound.play()
    bullet.addImage(tearsdrop);
    bullet.velocity.y = 10;
    bullet.life = 90;
    bullets.add(bullet);
      hoseSound.play();
  }});

   microBit.setButtonBCallback(function(){
      console.log("buttonBpressed");
   var cloud = createSprite(farmer.position.x, farmer.position.y);
    cloud.addImage(cloudImage);
    cloud.velocity.y = 10
    cloud.life = 90;
    clouds.add(cloud);
});
  
  microBit.onConnect(function(){
    console.log("connected");
  });

  microBit.onDisconnect(function(){
    console.log("disconnected");
  });
  
  asteroids = new Group();
  bullets = new Group();
  clouds = new Group();

   for(var i=0; i<10; i++)
  {
strawberry = createSprite(int(random(8, 60))*30, random(210, 1040));//random(min, max) lower bound, upper bound
strawberry.addAnimation('normal','seed.png');
strawberry.addAnimation('flower','Asset 3.png')
strawberry.addAnimation('fruit','strawberry2.png')
strawberry.state = 'seed';
asteroids.add(strawberry); 
  }  
  
  insects = new Group();
  
  //ladybug
  ladybug1 = createSprite(400, 1080, 10, 10);
  ladybug2 = createSprite(800, 1080, 10, 10);
  ladybug3 = createSprite(1200, 1080, 10, 10);
  ladybug1.addAnimation('ladybug1.png', 'ladybug2.png');
  ladybug2.addAnimation('ladybug1.png', 'ladybug2.png');
  ladybug3.addAnimation('ladybug1.png', 'ladybug2.png');
ladybug3.addToGroup(insects)
ladybug2.addToGroup(insects)
ladybug1.addToGroup(insects)

  //worm
  worm1 = createSprite(50, 800, 50, 100);
  worm1.addAnimation('worm1.png', 'worm2.png');
  worm2 = createSprite(100, 1000, 50, 100);
  worm2.addAnimation('worm1.png', 'worm2.png');
  worm3 = createSprite(100, 800, 50, 100);
  worm3.addAnimation('worm1.png', 'worm2.png');
  worm4 = createSprite(150, 700, 50, 100);
  worm4.addAnimation('worm1.png', 'worm2.png');
  worm5 = createSprite(350, 500, 50, 100);
  worm5.addAnimation('worm1.png', 'worm2.png');
worm1.addToGroup(insects)
worm2.addToGroup(insects)
worm3.addToGroup(insects)
worm4.addToGroup(insects)
worm5.addToGroup(insects)
  
//sounds input



}

function draw() {
   image(endScene,0,0)
//image(img, 0, 0); //animation sprite
 // gif_createImg.position(70, 300);
 // image(fence, 1070,30, img.width/2.5,img.height/1.5)
 // animation(animalGif, 950,700);
  
 //let xAxis = microBit.getAccelerometer().x;
  
 // if(xAxis < 30)  {
//  farmer.velocity.x = -5;
//}else if (xAxis > 100){
 // farmer.velocity.x = 5;
 // } else{
 // farmer.velocity.x = 0;
 // }
  
//asteroids.overlap(bullets, asteroidHit)
//insects.overlap(clouds, insectHit)

    //add top sprite
//if insects.overlap(insects,t)
  
  
 // farmer.collide(wall);
 // farmer.collide (wallptwo);
    
//  drawSprites();
 
  //INSECT MOVEMENT thangs
  
 push();
  direction = 90;
  //speed, angle
 
  //drawSprites()
  pop();
  
  if(currentScene === 'title'){
    //draw sprites for title scene
    image(titleScene,0,0);
   // backgroundSound.play();
  }else if(currentScene === 'main'){
    
  //add everything in here
  
   image(img, 0, 0); //animation sprite
 // gif_createImg.position(70, 300);
  image(fence, 1070,30, img.width/2.5,img.height/1.5)
  animation(animalGif, 950,700); 
  let xAxis = microBit.getAccelerometer().x;
  
  if(xAxis < 30)  {
  farmer.velocity.x = -5;
}else if (xAxis > 100){
  farmer.velocity.x = 5;
  } else{
  farmer.velocity.x = 0;
  }
  
asteroids.overlap(bullets, asteroidHit)
insects.overlap(clouds, insectHit)
insects.overlap(bugWall, bugHit)
insects.overlap(wormWall,wormHit)

    //add top sprite
//if insects.overlap(insects,t)
  
  
  farmer.collide(wall);
  farmer.collide (wallptwo);  
    
    
  drawSprite(farmer);
  drawSprites(asteroids);
  drawSprites(bullets);
  drawSprites(clouds);
 drawSprite(bugWall);
  drawSprite(wormWall);
    
 
  
    if (flowerHits > 3) {
   drawSprites(insects);
  ladybug1.setSpeed(0, 2);
  ladybug2.setSpeed(0, 2);
 ladybug3.setSpeed(0, 2);
  ladybug1.velocity.y = -1
  ladybug2.velocity.y = -1
  ladybug3.velocity.y = -1
      
  worm1.setSpeed(0, 0.7);
  worm1.velocity.x = 2
  worm2.setSpeed(0, 0.7);
  worm2.velocity.x = 2
  worm3.setSpeed(0, 0.7);
  worm3.velocity.x = 2
  worm4.setSpeed(0, 0.7);
  worm4.velocity.x = 2
  worm5.setSpeed(0, 0.7);
  worm5.velocity.x = 2
} 
     //if(flowerHits > 3) {
  //  drawSprites(insects) 
//  }
    
  if (flowerHits > 15) {
    currentScene = 'end';
    
 // image(endScene,0,0);
    //image(titleScene,0,0);
    
  }
  }
  
//if(currentScene === 'end'){
//image(endScene,0,0)}
//  else if (currentScene === 'end'){
    //draw sprites for title scene
   // image(endScene,0,0);  }
}

function keyPressed(){}

function asteroidHit(asteroid, bullet) {
  //var overlap = asteroidHit
   flowerHits++; //increment flowerHit counter
   print(flowerHits);
    print(asteroid.state)
  if(asteroid.state === 'seed'){
    asteroid.state = 'flower';
    asteroid.changeAnimation('flower')
  }
  else if(asteroid.state === 'flower'){
    asteroid.state = 'fruit';
    asteroid.changeAnimation('fruit')
  }
 
  for(var i=0; i<10; i++) {
    var p = createSprite(bullet.position.x, bullet.position.y);
    p.addImage(particleImage);
    p.friction = 0.9;
    p.life = 15;
    
  }
  bullet.remove();

}


function buttonPressed (){
if (endScene) 
gameoverSound.play(); }


function insectHit(insect, cloud){
cloud.remove();
insect.remove();

}

function bugHit(insect,bugWall){
currentScene = 'end'

}

function wormHit (insect,wormWall){
currentScene = 'end'

}

function buttonAPressed() {
    print(currentScene)
    if(currentScene === 'title'){ 
       farmer.removeSprites();
asteroids.removeSprites();
 bullets.removeSprites();
 clouds.removeSprites();
bugWall.removeSprites();
 wormWall.removeSprites();
    //endScene = true;
      setup();
      currentScene = 'main'
    } 
    
     if(currentScene === 'end'){
      currentScene = 'title'
      
    }
  
    if (currentScene === 'main'){
    console.log("buttonA pressed");
    var bullet = createSprite(farmer.position.x, farmer.position.y);
    bullet.addImage(tearsdrop);
    bullet.velocity.y = 10;
    bullet.life = 90;
    bullets.add(bullet);
  }
  
  
}
