
let titleScene = {
  setup:function(){
  	//load image etc..
  
  },
  
  update:function(){
   //check key/sensor input etc.. 
  
  },
  
  draw:function(){
    background(255,255,255,0);
    textSize(30);
    textAlign(CENTER)
    text("PRESS ANY BUTTON TO START",width/2,height-100);  
    //butter.changeImage("coverpage");
     
  //    ebi.setVolume(0.1);
  // ebi.play();
    
    drawSprites();
    
    
    coverpage.visible = true;
    coverpage.depth=30;
    newbutter.visible = false;
     mainScene.visible = false;
    winningScene.visible = false;
    losingScene.visible = false;
    
  },
  
  nextScene: function(){ 
    clear();
    currentScene = "main"
  },
  
  buttonAPressed:function(){
   currentScene = "main" 
  
  },
  
  //buttonBPressed:function(){
 //  currentScene = "main" 
  
 // }


}