let learnScene = {

  setup:function(){
  	//load image etc..
  
  },
  update:function(){
  microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
    currentScene = "title";
  });
    microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
    currentScene = "title";
  });
  },
  
  draw:function(){
    background('rgb(246,230,210)');
    animation(learnGraphics, width/2, height/2);
    learnGraphics.scale = 0.1
  },
  
  

}