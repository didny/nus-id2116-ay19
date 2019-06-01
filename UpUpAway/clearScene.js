var house2, birdEnd, birds

let birdScale = 0.3;

let clearScene = {
  
  setup:function(){
  house2 = createSprite(startX,startY);
  house2.addImage(loadImage('image/house2.png'));
  house2.scale = houseScale;
  //house2.debug = true;
  house2.setCollider("rectangle",0,0,120,300);
  house2.addToGroup(gameHouse);
    
    for(var j = 0; j<birdNum; j++) {
      var newBird = createSprite(int(random(800, 1600)), int(random(1, 7))*60);
  newBird.addAnimation('floating','image/bird1.png');
    newBird.scale = birdScale;
    newBird.velocity.x = -1.5;
    birds.add(newBird);
  }
        for(var j = 0; j<birdNum; j++) {
      var newBird = createSprite(int(random(800, 1600)), int(random(1, 7))*60);
  newBird.addAnimation('floating','image/bird2.png');
    newBird.scale = birdScale;
    newBird.velocity.x = -1.5;
    birds.add(newBird);
  }
    
  },
  
  update:function(){
   for(var i = 0; i<birds.length; i++) {
var b = birds[i];
    if(b.position.x < startX) { 
    birds[i].remove();
   }
    print(birds.length);
 }
      },
  
  draw:function(){
  
    background(color1);
    image(cloudbackground, 0, 0, 2200, 410);
    
    //Bird flying movement
    for(var i = 0; i<birds.length; i++) {
      var b = birds[i];
      b.position.y += sin(frameCount/0.5); 
  }
    //House Movement Code
  let accX = microBit.getAccelerometer().x;
  let accY = microBit.getAccelerometer().y;
  if (microBit.connected) {

    fill(255);
    text("connected.", 10, 20);
  }
    if(accY < 200)
      house2.position.y = startY - 1.5
      startY = house2.position.y
    if(accY > -200)
      house2.position.y = startY + 1.5
      startY = house2.position.y
    
    if(accX < 200)
      house2.position.x = startX - 0.5
      startX = house2.position.x
    if(accX > -200)
      house2.position.x = startX + 0.5
      startX = house2.position.x
    
      drawSprites(birds);
      drawSprites(gameHouse);
    
    let birdScore = birdNum - birds.length
    //Next scene code
    if(birdScore > birdNum - 1)
    birdEnd();

    //Game Over Code
  if(!gameOver) {
  if(house2.overlap(birds))
      die();
  }
        
  function birdEnd(){
    scenes["cloudy"].setup();
    currentScene = "cloudy"
  }
    
  function die() {
  updateSprites(false);
  birds.removeSprites();
  gameHouse.removeSprites();
  gameOver = true;
  song.stop();
  currentScene = "gameover"
  }
    
 
  },
  
}