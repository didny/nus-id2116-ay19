let mainScene = {

setup:function(){
      
  createCanvas(1920,1080);
  
    score = 0;
    backgrounds = new Group();
    collectibles = new Group();
    avoid = new Group();
    walls = new Group();
    obstacles = new Group(); 

    blob = createSprite(width/2,1000);
    blob.addAnimation('normal','blob.png');
    blob.scale = 1;
  
  for(var j=0; j<110; j++)
  {var good = createSprite(int(random(0, width/20))*30, random(-15000,0)-100);
    good.addAnimation('normal', 'good.png');
    good.scale=0.1
    good.velocity.y = 7;
    collectibles.add(good);}
  
  for(var i=0; i<4; i++)
  {var block = createSprite(random(0, width), random(height/2, height),0,0);
    block.addAnimation('normal', 'block.png');
    block.scale = 0.15
    obstacles.add(block);}
  
  for (var k=0; k<80; k++)
  {var bad = createSprite(int(random(0, width/20))*30, random(-15000,0)-100);
   bad.addAnimation('normal', 'bad.png');
   bad.scale = 0.15
   bad.velocity.y = 4;
   avoid.add(bad);}
  
  wallTop = createSprite(width/2, 0, width+100, 0);
  wallRight = createSprite(width, height/2, 0, height);
  wallLeft = createSprite(0, height/2, 0, height);
  wallBottom = createSprite(width/2, height+15, width+100, 20);
  
  walls.add(wallTop);
  walls.add(wallRight);
  walls.add(wallLeft);
  walls.add(wallBottom);

  //moving background

  oneBackground = createSprite(width/2, height/2);
  oneBackground.addAnimation('normal','land.png');
  oneBackground.velocity.y = 5;
  
  twoBackground = createSprite(width/2, -540);
  twoBackground.addAnimation('normal','air.png');
  twoBackground.velocity.y = 5;
  
  threeBackground = createSprite(width/2, -1620);
  threeBackground.addAnimation('normal','land.png');
  threeBackground.velocity.y = 5;
  
  fourBackground = createSprite(width/2, -2700);
  fourBackground.addAnimation('normal','air.png');
  fourBackground.velocity.y = 5
  
  fiveBackground = createSprite(width/2, -3780);
  fiveBackground.addAnimation('normal','land.png');
  fiveBackground.velocity.y = 5;
  
  sixBackground = createSprite(width/2, -4860);
  sixBackground.addAnimation('normal','air.png');
  sixBackground.velocity.y = 5
  
  sevenBackground = createSprite(width/2, -5940);
  sevenBackground.addAnimation('normal','land.png');
  sevenBackground.velocity.y = 5;
  
  eightBackground = createSprite(width/2, -7020);
  eightBackground.addAnimation('normal','air.png');
  eightBackground.velocity.y = 5
 
  backgrounds.add(oneBackground);
  backgrounds.add(twoBackground);
  backgrounds.add(threeBackground);
  backgrounds.add(fourBackground);
  backgrounds.add(fiveBackground);
  backgrounds.add(sixBackground);
  backgrounds.add(sevenBackground);
  backgrounds.add(eightBackground);

  },

update:function(){
  /*
  microBit.setButtonACallback(function(){
  console.log("buttonA pressed");
  currentScene = "win";
  });
  microBit.setButtonBCallback(function(){
  console.log("buttonB pressed");
  currentScene = "lose";
  });
  */
  },
draw:function(){

  background('rgb(246,230,210)');
    
/* i tried to loop the background but it wouldn't work :/
  if(landBackground.position.y > 1620);
    landBackground.position.y = -540;

    if(airBackground.position.y > 1620);
    airBackground.position.y = -540; */
  
// score text 

  push();
    if (score < 10) {
    fill('white');
    textSize(30);
    textFont('Avenir');
    text('score =', 50,70);
    text(score, 180,70);
    }
    else{
    win();
    }
  pop();
  
// movement of blob
 
  let accX = microBit.getAccelerometer().x
  let accY = microBit.getAccelerometer().y
  
//  let posX = map(accX,-1024,1024,-400,2320); 
//  let posY = map(accY,-1024,1024,-400,1480);
  
let posX = map(accX,-1024,1024,0,1920); 
let posY = map(accY,-1024,1024,0,1080);
  
  blob.attractionPoint(5, posX, posY);
  blob.velocity.x = (posX-blob.position.x)/10;
  blob.velocity.y = (posY-blob.position.y)/10;
  

  
//  backgrounds.depth = 0;
  oneBackground.depth = 0;
  twoBackground.depth = 0;
  threeBackground.depth = 0;
  fourBackground.depth = 0;
  fiveBackground.depth = 0;
  sixBackground.depth = 0;
  sevenBackground.depth = 0;
  eightBackground.depth = 0;


// game mechanics 

  blob.collide(obstacles);
  blob.overlap(collectibles, collect);
  blob.collide(walls);
  
  obstacles.collide(obstacles);
  obstacles.overlap(collectibles, collection);
  obstacles.collide(walls);

  collectibles.collide(collectibles);
  collectibles.collide(avoid);
  
  avoid.collide(avoid);
  
  function collect(collector, collected){
    collected.remove();
    score += 1;
    eatSound.play()
 // console.log(score);
    blob.scale += 0.10;
    
}

  function collection(blob,collected){
    collected.remove();
}
 if(avoid.overlap(blob,die));
//currentScene = "lose";


  if (score > 10){
    win();
    //currentScene = 'win';
    //score = 0
    }
    
  function die(){
    //console.log('DIE');
    currentScene = 'lose';
    bgmSound.stop()
    dieSound.play()
    obstacles.removeSprites();
    collectibles.removeSprites();
    avoid.removeSprites();
    blob.visible = false;
    backgrounds.removeSprites();

 }
  
  function win(){
    currentScene = "win"
    bgmSound.stop()
    winSound.play()
    obstacles.removeSprites();
    collectibles.removeSprites();
    avoid.removeSprites();
    blob.visible = false;
    backgrounds.removeSprites();

 }

 drawSprites();
  },

}
  

  


