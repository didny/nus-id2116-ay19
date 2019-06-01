let titleScene = {
  setup:function(){
  	//load image etc..
    var restartGame;
  
  },
  
  update:function(){
   //check key/sensor input etc.. 
  microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
    scenes[currentScene].nextScene();
    
    function restartGame(){
    hero = new Group();
    meteor = new Group();
    hostages = new Group();
    bullets = new Group();}
  });
  
  },
  
  draw:function(){
    /*background(200,250,200);
    textSize(100);
    textAlign(CENTER)
    text("TITLE",width/2,height/2);*/
    button.hide();
    animation(press,width/2,height/2)
    
  },
  
  nextScene: function(){ 
    currentScene = "main"
  }
}
