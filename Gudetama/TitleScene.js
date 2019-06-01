let TitleScene = {
  
  setup: function() {
    //load image etc..
    //display the image after loading
    // TitleBG = loadImage('Titlescreen.png');
   
   if (currentScene=="Title")
    {
    ResultSound.stop();
    GameSound.stop();
    StartSound.stop();
    StartSound.play();
    StartSound.loop();
    }
  Titlevid.loop();
  //Titlevid.play();
  Titlevid.hide();
  },
  
  
  
  // setup:function() {
  // console.log("start setup");
  // //mySound.setVolume(0.1);
  // mySound.play();
  // mySound.loop();
  // console.log("TitleScene - setup");
  // },

  update: function() {
    //Q on keyboard to mimic microbit A function 
    if (keyIsDown(81)) {
      StartSound.stop();
      GameSound.play();
      GameSound.loop();
      currentScene = "Gude"
      GudeScene.reset();
      GudeScene.setup();
    }

    //W on keyboard to mimic microbit B function 
    if (keyIsDown(87)) {
      currentScene = "Title"
    }

    //check key/sensor input etc.. 
  },

//     reset: function() {
//     StartSound.stop();
//     GameSound.stop ();
//     ResultSound.stop();
    
// //     StartSound.play();
// //     StartSound.loop();

//   },
  
  draw: function() {
    // image(TitleBG, 0, 0, width, height);
    
  image(Titlevid, 0, 0, width, height);
  //Titlevid.loop();
  },

  buttonAPressed: function() {
    
    currentScene = "Gude";
    GudeScene.reset();
    GudeScene.setup();

  },

  buttonBPressed: function() {
    currentScene = "Title"
  }
}

// function touchStarted() {
//   var fs = fullscreen();
//   if (!fs) {
//     fullscreen(true);
//   }
// }