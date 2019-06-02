let ResultScene = {

  setup: function() {
    
    if (currentScene=="Result")
    {
      StartSound.stop();
      GameSound.stop();  
      ResultSound.stop();
      ResultSound.play();
      ResultSound.loop();
    }
  ResultBG = loadImage('Resultscreen.png');
  },

  update: function() {
    //T on keyboard to mimic microbit A function 
    if (keyIsDown(84)) {
      ResultSound.stop();
      ResultSound.play();
      ResultSound.loop();
      currentScene = "Result"
    }
    
    //Y on keyboard to mimic microbit B function 
    if (keyIsDown(89)) {
      ResultSound.stop();
      StartSound.play();
      StartSound.loop();
      currentScene = "Title"
    }
    

  },
  
  
  draw: function() {
    image(ResultBG, 0, 0, width, height);
    textSize(48)
    textFont(comicRegular);
    fill(0);
    translate(675, 135);
    textAlign(CENTER);
    text(score + " p", 0, 0);
    
    textSize(25);
    text("Press B", 10, 160);
    text("to restart",17, 190);
    text("the game", 20, 220);
  },

  buttonAPressed: function() {
    currentScene = "Result"
  },

  buttonBPressed: function() {
    currentScene = "Title"
  }
}