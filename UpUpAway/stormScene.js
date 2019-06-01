//let stormScene;

var lightning

let stormScale = 0.25;
let lerpAmt2 = 0;

let stormScene = {
  
  setup:function(){
    for(var j = 0; j<lightningNum; j++) {
    var newlightning = createSprite(int(random(800, 2000)), int(random(1, 7))*60);
    newlightning.addAnimation('floating','image/storm.png');
    newlightning.scale = stormScale;
    newlightning.velocity.x = -1;
    newlightning.addToGroup(lightning);
  }
  },

  update:function(){
     for(var i = 0; i<lightning.length; i++) {
  var l = lightning[i];
    if(l.position.x < startX) {
      lightning[i].remove();
    } 
    print(lightning.length);
     }
  },
  
  draw:function(){
    background(bgColor);
    lerpAmt2 = lerpAmt2 + 0.01;
    bgColor = lerpColor(color2, color3, lerpAmt2);
    image(cloudbackground, 0, 0, 2200, 410);
    
  //movement of lightning
    for(var i = 0; i<lightning.length; i++) {
  var l = lightning[i];
    l.position.y += sin(frameCount/0.1); 
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
    
      drawSprites(lightning);
      drawSprites(gameHouse);
    
    let lightningScore = lightningNum - lightning.length
    //Next scene code
    if(lightningScore > lightningNum - 1)
    lightningEnd();
    
    //Game Over Code
  if(!gameOver) {

  if(house2.overlap(lightning))
      die();
  }
    
    //New Game code
 // if(gameOver && house2.displace(lightning))
  //  newGame();
    
  function lightningEnd(){
  currentScene = "congrats"
  }
    
  function die() {
  updateSprites(false);
  lightning.removeSprites();
  gameHouse.removeSprites();
  gameOver = true;
  song.stop();
  currentScene = "gameover"
}   
  
  },
  
}