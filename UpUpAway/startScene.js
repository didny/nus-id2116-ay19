let startScene = {
  setup:function(){
      song.play();
  },
  
  update:function(){
   //check key/sensor input etc.. 
  
  },
  
  draw:function(){
    image(startScene, 0, 0, 800, 400)
  },
  
  buttonAPressed: function(){ 
    currentScene = "instruction"
  },

  buttonBPressed: function(){ 
    currentScene = "instruction"
  }
}