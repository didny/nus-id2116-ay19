let firstScene = {

  setup:function(){
  	//load image etc..
  
  },
  update:function(){
  if(mouseIsPressed){
    currentScene = "title";
    } 
  },
  
  draw:function(){
    /* background(250,200,200);
    textSize(100);
    textAlign(CENTER)
    text("CONNECT MICROBIT",width/2,height/2);*/
    
    animation(connect,width/2,height/2)
  },
  
  nextScene:function(){
  	
  }

}