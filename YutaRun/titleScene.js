let titleScene = {
  setup:function(){
  },
  
  update:function(){
   //check key/sensor input etc.. 
  
  },
  
  draw:function(){
    background(255);
    textSize(30);
    textAlign(CENTER)
    textFont(gameFont);

    drawSprites();
        text("PRESS ANY BUTTON FOR INSTRUCTIONS",width/2,height-80);  
    //title
    yutarun.visible = true;
    burst.visible = true;

    //instruction
    instruct.visible = false;
    instructgif.visible=false;

    //ruready
    ready.visible = false;
/*
    //main
    collectibles.removeSprites();
    obstacles.removeSprites();
    obstacles.visible = false;
    collectibles.visible = false;
    yuta.visible = false;
    ground.visible = false;*/

    //goodend
    yutaWin.visible = false;
    fuji.visible = false;
    yata.visible = false;

    //badend
    yutaLose.visible = false;
    grave.visible = false;
    yabai.visible = false;
    
  },
  
 nextScene: function(){ 
   currentScene = "instruction"
 },
  
  buttonAPressed:function(){
   currentScene = "instruction" 
  
  },
  
 buttonBPressed:function(){
  currentScene = "instruction" 
  
 }


}