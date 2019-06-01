let pauseScene = {

  setup:function(){
  	//load image etc..

  
  },
  update:function(){
    noLoop();
  microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
    currentScene = "main";
    //animation(pause,width/2,height/2)
    loop();
  });
  },
  
  draw:function(){
    //background(250,200,200);
    push();
    textSize(100);
    textAlign(CENTER);
    fill(255);
    textFont(arcadeFont);
    text("PAUSE",width/2,height/2 + 30);
    pop();
    
    push();
    textSize(15);
    textAlign(CENTER);
    fill(255);
    textFont(arcadeFont);
    text("press a to continue",width/2,height/2 + 80);
    pop();

  },
  
  nextScene:function(){
  	
  }

}