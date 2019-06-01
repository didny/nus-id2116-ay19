let winScene = {

  setup:function(){
  
  },
  update:function(){
  microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
    currentScene = "title";
  });
    microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
    currentScene = "main";
    
    bgmSound.play()

    createCanvas(1920,1080);
  
    score = 0;
    collectibles = new Group();
    obstacles = new Group(); 
    avoid = new Group();
    walls = new Group();
    backgrounds = new Group();


    blob = createSprite(width/2,1000);
    blob.addAnimation('normal','blob.png');
    blob.scale = 1;
      
  for(var j=0; j<110; j++)
  {var good = createSprite(int(random(0, width/20))*30, random(-15000,0)-100);
    good.addAnimation('normal', 'good.png');
    good.scale=0.1
    good.velocity.y = 7;
    collectibles.add(good);}
  
  for(var i=0; i<5; i++)
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
      
  });
  },
  
  draw:function(){
   background('rgb(246,230,210)');
  animation(winGraphics,width/2,height/2);

  },
  
}