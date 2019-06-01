let congratsScene = {
  
  setup:function(){
  },

  update:function(){
   //check key/sensor input etc.. 
  },
  
  draw:function(){
  image(congratsScene, 0, 0);
  congratsScene.resize(800, 400);
  angle += 2;
  image(bButton,220,250+sin(angle)*8,60,60);
  
  
  textSize(40);
  textFont(myFont);
  fill(0);
  textAlign(CENTER);
 // text('CONGRATS!',250,300);
  text('The End.',250,200);
  textSize(20);
  text('Play Again!',250,350);

  },

  buttonBPressed: function(){ 
    song.stop();
    startX = 50;
    startY = 200;
    gameHouse.removeSprites();
    song.play();
    currentScene = "start"
  }
}