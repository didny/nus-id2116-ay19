//let cloudScene;

var snailCloud, elephantCloud, turtleCloud

let snailScale = 0.02;
let turtleScale = 0.04;
let elephantScale = 0.3;
let lerpAmt = 0;

let cloudScene = {
  
  setup:function(){
         for(var j = 0; j<cloudNum; j++) {
    var snailCloud = createSprite(int(random(800, 2000)), int(random(1, 7))*60);
    snailCloud.addAnimation('floating','image/snail.png');
    snailCloud.scale = snailScale;
    snailCloud.velocity.x = -0.8;
    snailCloud.addToGroup(cloud);
  }
    
    for(var j = 0; j<cloudNum; j++) {
    var elephantCloud = createSprite(int(random(1000, 2000)), int(random(1, 7))*60);
  elephantCloud.addAnimation('floating','image/elephant.png');
  elephantCloud.scale = elephantScale;
  elephantCloud.velocity.x = -1;
  elephantCloud.addToGroup(cloud);
  }
    
    for(var j = 0; j<cloudNum; j++) {
    var turtleCloud = createSprite(int(random(1000, 2000)), int(random(1, 7))*60);
  turtleCloud.addAnimation('floating','image/turtle.png');
  turtleCloud.scale = turtleScale;
  turtleCloud.velocity.x = -0.9;
  turtleCloud.addToGroup(cloud);
  }
  },
  
  update:function(){
  for(var i = 0; i<cloud.length; i++) {
  var c = cloud[i];
    if(c.position.x < startX) {
      cloud[i].remove();
    }
  } 
    print(cloud.length);
  },
  
  draw:function(){
    background(bgColor);
    lerpAmt = lerpAmt + 0.01;
    bgColor = lerpColor(color1, color2, lerpAmt);
    
    image(cloudbackground, 0, 0, 2200, 410);
  //movement of cloud
    for(var i = 0; i<cloud.length; i++) {
  var c = cloud[i];
    c.position.y += sin(frameCount/0.5); 
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
    
    //if(accX < 200)
      //house2.rotation -= 0.2;
    //if(accX > -200)
    //house2.rotation += 0.2;
    
        drawSprites(gameHouse);
        drawSprites(cloud);
    
    let cloudScore = totalCloudNum - cloud.length
    //Next scene code
    if(cloudScore > totalCloudNum - 1)
    cloudEnd();
    
    //Game Over Code
  if(!gameOver) {
  if(house2.overlap(cloud))
      die();
  }
    
    //New Game code
  //if(gameOver && house2.displace(cloud))
  //  newGame();
    
  function cloudEnd(){
  scenes["storm"].setup();
  currentScene = "storm"
  }
    
  function die() {
 updateSprites(false);
  cloud.removeSprites();
  gameHouse.removeSprites();
  gameOver = true;
  song.stop();
  currentScene = "gameover"

}   
    
  //function newGame() {
  //}
  },
  
}
