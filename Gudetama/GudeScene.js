var rc=30
var counter = rc;
var seconds, minutes;
var comicRegular;

var ChopSclosed = false;

let GudeScene = {

  setup: function() {
    if (currentScene=="Gude")
    {
    ResultSound.stop();
    StartSound.stop();
    GameSound.stop();
    GameSound.play();
    GameSound.loop();
    }
    
    GudeBG = loadImage('GudeScreen.png');

    bowl = createSprite(800, 128, 100, 58);
    bowl.shapeColor = color(149,97,47);

    //position all ingredient into the scene  
    Gude1 = createSprite(460, 287.5);
    Gude2 = createSprite(287.5, 360);
    Gude3 = createSprite(630, 380); 
    Gude4 = createSprite(560, 140);     
    Ob1 = createSprite(410, 110);
    Ob2 = createSprite(400, 470); 
    Ob3 = createSprite(530, 480); 
    Fv1 = createSprite(310, 200);
    Fv2 = createSprite(650, 240); 
    ChopS = createSprite(862.5, 517);

    //load all indredient animation into the scene
    Gude1.addAnimation('Gude1normal', 'Gude1.png');
    Gude1.setCollider('rectangle', 0, 0, 110, 130);
    // Gude1.debug = true;
    
    Gude2.addAnimation('Gude2normal', 'Gude2.png');
    Gude2.setCollider('rectangle', 0, 0, 110, 130);
    // Gude2.debug = true;    
    
    Gude3.addAnimation('Gude3normal', 'Gude3.png');
    Gude3.setCollider('rectangle', 0, 0, 120, 110);
    // Gude3.debug = true;    
    
    Gude4.addAnimation('Gude4normal', 'Gude4.png'); 
    Gude4.setCollider('rectangle', 0, 0, 140, 80);
    // Gude4.debug = true;       
    
    Ob1.addAnimation('Ob1normal', 'Ob1.png');
    Ob1.setCollider('rectangle', 0, 0, 80, 80);
    // Ob1.debug = true;       
    
    Ob2.addAnimation('Ob2normal', 'Ob2.png'); 
    Ob2.setCollider('rectangle', 0, 0, 80, 80);
    // Ob2.debug = true;         
    
    Ob3.addAnimation('Ob3normal', 'Ob3.png');
    Ob3.setCollider('rectangle', 0, 0, 80, 70);
    // Ob3.debug = true;      
    
    Fv1.addAnimation('Fv1normal', 'Fv1.png'); 
    Fv1.setCollider('rectangle', 0, 0, 90, 110);
    // Fv1.debug = true;  
    
    Fv2.addAnimation('Fv2normal', 'Fv2.png');
    Fv2.setCollider('rectangle', 0, 0, 110, 85);
    // Fv2.debug = true;     
    

    //load chop stick animation into the scene  
    ChopS.addAnimation('ChopSnormal', 'chop stick_open.png');
    ChopS.addAnimation('transform', 'chop stick_close.png');
    // chopstick collider to be at the tip of the chop stick
    ChopS.setCollider('rectangle', -170, -130, 30, 30);
    // ChopS.debug = true;
    //activte Gude1 in relationship to the game  
    Gude1.onMousePressed = function() {
      // print("g pressed")
       
       
      this.changeAnimation('Gude1normal');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
        pickupsound.play();
        draggedSprite = this;
      }
    };

    Gude1.onMouseReleased = function() {
      putdownsound.play();
      this.changeAnimation('Gude1normal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
      if (Gude1.overlap(bowl)) {
        Gude1.visible = false;
        score = score + 10;
        // print("Score: " + score);
        Gude1.position.x = 460;
        Gude1.position.y = 287.5;
        setTimeout(function() {
        Gude1.visible = true;
        }, 1000);
      }

    };
    //activte Gude2 in relationship to the game 
    Gude2.onMousePressed = function() {
       
       
      this.changeAnimation('Gude2normal');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
        pickupsound.play();
        draggedSprite = this;
      }
      
    };

    Gude2.onMouseReleased = function() {
      putdownsound.play();
      this.changeAnimation('Gude2normal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
      if (Gude2.overlap(bowl)) {
        Gude2.visible = false;
        score = score + 10;
        // print("Score: " + score);
        Gude2.position.x = 287.5;
        Gude2.position.y = 360;
        setTimeout(function() {
          Gude2.visible = true;
        }, 1000);
      }

    };
    //activte Gude3 in relationship to the game 
    Gude3.onMousePressed = function() {
       
      this.changeAnimation('Gude3normal');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
        pickupsound.play();
        draggedSprite = this;
      }
    };

    Gude3.onMouseReleased = function() {
      putdownsound.play();
      this.changeAnimation('Gude3normal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
      if (Gude3.overlap(bowl)) {
        Gude3.visible = false;
        score = score + 10;
        // print("Score: " + score);
        Gude3.position.x = 630;
        Gude3.position.y = 380;
        setTimeout(function() {
          Gude3.visible = true;
        }, 1000);
      }

    };
    
    //activte Gude4 in relationship to the game 
    Gude4.onMousePressed = function() {
       
      this.changeAnimation('Gude4normal');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
        pickupsound.play();
        draggedSprite = this;
      }
      
    };

    Gude4.onMouseReleased = function() {
      putdownsound.play();
      this.changeAnimation('Gude4normal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
      if (Gude4.overlap(bowl)) {
        Gude4.visible = false;
        score = score + 10;
      // print("Score: " + score);
        Gude4.position.x = 560;
        Gude4.position.y = 140;
        setTimeout(function() {
          Gude4.visible = true;
        }, 1000);
      }

    };
    
    //activte Ob1 in relationship to the game 
    Ob1.onMousePressed = function() {
       
      this.changeAnimation('Ob1normal');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
        pickupsound.play();
        draggedSprite = this;
      }
    };

    Ob1.onMouseReleased = function() {
      putdownsound.play();
      this.changeAnimation('Ob1normal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
      if (Ob1.overlap(bowl)) {
       Ob1.visible = false;
        score = score + 2;
      // print("Score: " + score);
        Ob1.position.x = 410;
        Ob1.position.y = 110;
        setTimeout(function() {
        Ob1.visible = true;
        }, 1000);
      }
   };
    
    //activte Ob2 in relationship to the game 
    Ob2.onMousePressed = function() {
      this.changeAnimation('Ob2normal');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
        pickupsound.play();
        draggedSprite = this;
      }
    };

    Ob2.onMouseReleased = function() {
      putdownsound.play();
      this.changeAnimation('Ob2normal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
      if (Ob2.overlap(bowl)) {
       Ob2.visible = false;
        score = score + 2;
      // print("Score: " + score);
        Ob2.position.x = 400;
        Ob2.position.y = 470;
        setTimeout(function() {
        Ob2.visible = true;
        }, 1000);
      }
   };
    
    //activte Ob3 in relationship to the game 
    Ob3.onMousePressed = function() {
      this.changeAnimation('Ob3normal');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
        pickupsound.play();
        draggedSprite = this;
      }
    };

    Ob3.onMouseReleased = function() {
      putdownsound.play();
      this.changeAnimation('Ob3normal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
      if (Ob3.overlap(bowl)) {
       Ob3.visible = false;
        score = score + 5;
      // print("Score: " + score);
        Ob3.position.x = 530;
        Ob3.position.y = 480;
        setTimeout(function() {
        Ob3.visible = true;
        }, 1000);
      }
   };
    
    //activte Fv1 in relationship to the game 
    Fv1.onMousePressed = function() {
      this.changeAnimation('Fv1normal');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
        pickupsound.play();
        draggedSprite = this;
      }
    };

    Fv1.onMouseReleased = function() {
      putdownsound.play();
      this.changeAnimation('Fv1normal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
      if (Fv1.overlap(bowl)) {
        Fv1.visible = false;
        score = score + 5;
      // print("Score: " + score);
        Fv1.position.x = 310;
        Fv1.position.y = 200;
        setTimeout(function() {
        Fv1.visible = true;
        }, 1000);
      }

    };
    
    //activte Fv2 in relationship to the game 
    Fv2.onMousePressed = function() {
      this.changeAnimation('Fv2normal');
      this.animation.goToFrame(this.animation.getLastFrame());
      if (draggedSprite == null) {
         pickupsound.play();
        draggedSprite = this;
      }
    };

    Fv2.onMouseReleased = function() {
      putdownsound.play();
      this.changeAnimation('Fv2normal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
      if (Fv2.overlap(bowl)) {
        Fv2.visible = false;
        score = score + 5;
      // print("Score: " + score);
        Fv2.position.x = 650;
        Fv2.position.y = 240;
        setTimeout(function() {
        Fv2.visible = true;
        }, 1000);
      }

    };
    
    
        //ChopS.debug = true;
   // ChopS.setCollider("circle",-170,-130,20);
    //activate mouse in relationship to the chop stick  
    ChopS.onMousePressed = function() {
      this.changeAnimation('transform');
      this.animation.goToFrame(this.animation.getLastFrame());     
    };

    ChopS.onMouseReleased = function() {
      this.changeAnimation('ChopSnormal');
      this.animation.goToFrame(0);
      if (draggedSprite == this) {
        draggedSprite = null;
      }
    };


    setInterval(counter, 1000);
    comicRegular = loadFont('COMIC.TTF');

  },

  update: function() {

    //R on keyboard to result
    if (keyIsDown(82)) {
      StartSound.stop();
      GameSound.stop();   
      ResultSound.stop();
      currentScene = "Result"
      ResultSound.play();
      ResultSound.loop();
    }

    //E on keyboard to mimic microbit B function 
    // if (keyIsDown(69)) {
    //   currentScene = "Title"
    // }

    //check timer funtion
    if (frameCount % 60 == 0 && counter > 0) {
      // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      counter--;
    }

    if (counter == 0) {
      StartSound.stop();
      GameSound.stop();   
      ResultSound.stop();
      
      currentScene = "Result";
      ResultScene.setup();
    }

  },

  reset: function() {
    counter = rc;
    score = 0;
    //removes all the images, so that it will not overlap with new ones created.
    Gude1.remove();
    Gude2.remove();
    Gude3.remove();
    Gude4.remove();
    Ob1.remove();
    Ob2.remove();
    Ob3.remove();
    Fv1.remove();
    Fv2.remove();
    ChopS.remove();
    bowl.remove();
    
    // StartSound.stop();
    // GameSound.stop ();
    // ResultSound.stop();
  },
  

  
  draw: function() {
    image(GudeBG, 0, 0, width, height);

    this.get_Microbit_values()
    //ChopS.position.x = mouseX + 170;
    //ChopS.position.y = mouseY + 130;
    
    let xCenter = width /2 
    let yCenter = height /2
    ChopS.position.x = xCenter + moveX + 170;
    ChopS.position.y = yCenter + moveY + 130;
    
    // prevent chopstick from moving out of window
    // exceed left window boundary
    
    if (ChopS.position.x < 0) {
      ChopS.position.x = 0;
    }
    
    if (ChopS.position.x > width + 100) {
        ChopS.position.x = width + 100;
    }
    
    if (ChopS.position.y < 0) {
      ChopS.position.y = 0;
    }
    
    if (ChopS.position.y > height + 100) {
      ChopS.position.y = height + 100;
    }
    

    if (draggedSprite != null) {
      draggedSprite.position.x = xCenter+ moveX;
      draggedSprite.position.y = yCenter+ moveY;
    }
    
    
    textSize(25);
     fill(0);
    text("Instructions", 15, 470);
     textSize(18);
     fill(0);
    text("1. Rotate micro:bit ", 15, 500);
    text("2. Press A to pick up ingredient",15, 520)
    text("3. Drag and press A to release into bowl",15, 540)
    text("4. Press B to retart",15, 560)
    
    //timer text
    textSize(48)
    textFont(comicRegular);
    fill(255);
    translate(120, 140);
    rotate(PI / -6.0);
    text(counter + " s", 0, 0);
    
    //draw sprites on top of timer text
    rotate(PI / 6.0);
    translate(-120, -140);
    
    
    ChopS.collide(walls);
    Gude1.collide(walls);
    Gude2.collide(walls);
    Gude3.collide(walls);    
    Gude4.collide(walls);
    Ob1.collide(walls);    
    Ob2.collide(walls);    
    Ob3.collide(walls); 
    Fv1.collide(walls);    
    Fv2.collide(walls);  
    
    drawSprites();
    

    
  },
  buttonAPressed: function() {
       // StartSound.stop();
     
   if(ChopSclosed == false){
     ChopS.onMousePressed();
     if(ChopS.overlap(Gude1)){
       //pickup Gude1
       Gude1.onMousePressed();
       // ChopS.attractionPoint ( 0.5, 800, 128 );
       // Gude1.attractionPoint ( 0.5, 800, 128 );
     }
       if(ChopS.overlap(Gude2)){
       Gude2.onMousePressed();
     }
       if(ChopS.overlap(Gude3)){
       Gude3.onMousePressed();
     }
       if(ChopS.overlap(Gude4)){
       Gude4.onMousePressed();
     }   
       if(ChopS.overlap(Ob1)){
       Ob1.onMousePressed();
     }
       if(ChopS.overlap(Ob2)){
       Ob2.onMousePressed();
     }
       if(ChopS.overlap(Ob3)){
       Ob3.onMousePressed();
     }
       if(ChopS.overlap(Fv1)){
       Fv1.onMousePressed();
     } 
       if(ChopS.overlap(Fv2)){
       Fv2.onMousePressed();
     } 
     ChopSclosed = true;
   }else{
     
     ChopS.onMouseReleased();
     Gude1.onMouseReleased();
     Gude2.onMouseReleased();
     Gude3.onMouseReleased();
     Gude4.onMouseReleased();
     Ob1.onMouseReleased();
     Ob2.onMouseReleased();
     Ob3.onMouseReleased();
     Fv1.onMouseReleased();
     Fv2.onMouseReleased();     
     ChopSclosed = false;
   
   }
    
    
  },

  buttonBPressed: function() {
    currentScene = "Title"
  },
 
  get_Microbit_values:  function () {
  //console.log ("acceleration",microBit.getAccelerometer());

  moveX=microBit.getAccelerometer().x;
  moveY=microBit.getAccelerometer().y;
  //larsTemp=microBit.getTemperature();
        
  // let x = map(-microBit.getAccelerometer().x, -1100, 1100, 0, 100); 
  // let y = map(microBit.getAccelerometer().y, -1100, 1100, 0, 100);
    
    let accX = microBit.getAccelerometer().x;
    let accY = microBit.getAccelerometer().y;
    
    map(microBit.getAccelerometer().x,-1100,1100, 0, width);
    map(microBit.getAccelerometer().y,-1100,1100, 0, height);
    
       if(accX <180){
  ChopS.velocity.x = -120; // ChopS moves left
  }else if(accX >-180){
  	ChopS.velocity.x = 120;  // ChopS moves right
  }else{
  	ChopS.velocity.x = 0; //ChopS remains stationary
  }
if(accY <-180){
  	ChopS.velocity.y = -120; // ChopS moves up
  }else if(accY >180){
  	ChopS.velocity.y = 120;  // ChopS moves down
  }else{
  	ChopS.velocity.y = 0; //ChopS remains stationary
  }
   
  console.log ("x: "+ moveX);
  console.log ("y: "+ moveY);
  //console.log ("temp: "+ larsTemp);
 // console.log ("temperature",microBit.getTemperature());
  console.log ("bearing",microBit.getBearing());
  console.log ("buttonA",microBit.getButtonA());
  console.log ("buttonB",microBit.getButtonB());
  
//   ChopS.attractionPoint = function(magnitude, 800, 128) {
//     var angle = atan2(128-this.position.y, 800-this.position.x);
//     this.velocity.x += cos(angle) * magnitude;
//     this.velocity.y += sin(angle) * magnitude;};

}

  
}