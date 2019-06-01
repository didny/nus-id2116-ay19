//let gameoverScene;

let gameoverScene = {
  
  setup:function(){
  },

  update:function(){
   //check key/sensor input etc.. 
  },
  
  draw:function(){
  image(gameoverScene, 0, 0);
  textFont(myFont);
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text('Play Again!',400,370);
  
  angle += 2;
  image(bButton,365,270+sin(angle)*8,60,60);
  },

  buttonBPressed: function(){ 
    gameOver = false;
    startX = 50;
    startY = 200;
    song.play();
    currentScene = "instruction"
  }
  
}