let titleScene = {
  setup:function(){
  	//load image etc..
  
  },
  
  update:function(){
   //check key/sensor input etc.. 
  
  },
  
  draw:function(){
    background(255);
     camera.off();
    
    textSize(30);
    textAlign(CENTER)
    text("PRESS ANY BUTTON TO START",width/2,height-100);  
    //car.changeImage("coverpage");
    car.visible=false;
    scene.visible=true;
    scene.changeImage("start");
    scene.depth=50;
    drawSprites();
  },
  
//   nextScene: function(){ 
//     currentScene = "main"
//   },
  
//   buttonAPressed:function(){
//     print("tile scene button a pressed");
//      scenes["main"].setup();
//     // scenes["main"].setup();
//    currentScene = "main" 
  
//   },
  
  buttonBPressed:function(){
    scenes["main"].setup();
  currentScene = "main" 
  
 }


}