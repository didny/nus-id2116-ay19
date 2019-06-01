let instructionScene = {
  
  setup:function(){
  },

  update:function(){
   //check key/sensor input etc.. 
  },
  
  draw:function(){
  image(instructionScene, 0, 0);
  textSize(25);
  textFont(myFont);
  fill(0);
  textAlign(CENTER);
  text('Go Back!',200,360);
  text('Play Now!',600,360);
  angle += 2;
  image(aButton,170,260+sin(angle)*8,60,60);
  image(bButton,570,260+sin(angle)*8,60,60);
    

      
     //House Movement Code
  let accX = microBit.getAccelerometer().x;
  let accY = microBit.getAccelerometer().y;
  if (microBit.connected) {
  }
    if(accY < 200)
    house1.position.y = startY1 - 1.5
    startY1 = house1.position.y
    if(accY > -200)
    house1.position.y = startY1 + 1.5
    startY1 = house1.position.y
    
    if(accX < 200)
    house1.position.x = startX1 - 0.5
    startX1 = house1.position.x
    if(accX > -200)
    house1.position.x = startX1 + 0.5
    startX1 = house1.position.x
    
  drawSprites(trialHouse); 
      },
  
  buttonAPressed: function(){ 
    currentScene = "start"
  },

  buttonBPressed: function(){ 
    scenes["clear"].setup();
    currentScene = "clear"
  }
}