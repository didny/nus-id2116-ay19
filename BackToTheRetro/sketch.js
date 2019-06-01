var car;
var bgImg;
var bgImg2;
var microBit;
var bg;
var limits;
var portal;
var scene;

var cloud;


var bgm;
var tokenSound;
var winSound;
var losingSound;
var gameFont;

function preload() {
  soundFormats('mp3');
  winSound = loadSound('portwin.mp3');
  losingSound = loadSound('crash.mp3');
}




let currentScene = "title";


// **********************************************************************
let winningScene = {

  update: function() {

  },
  draw: function() { // win
    background(250, 200, 200);
    camera.off();

    car.velocity.x = 0;
    scene.changeImage("win");
    drawSprites();
    scene.visible = true;
    car.visible = false;
  },

  nextScene: function() {
    currentScene = "goodend"
  },

  buttonBPressed: function() {
    currentScene = "title"
  },
}


// **********************************************************************
let losingScene = {

  update: function() {

  },

  draw: function() {
    background('#d4ebf9');
    camera.off();

    scene.changeImage("lose");
    drawSprites();
    scene.visible = true;
    car.visible = false;
  },

  nextScene: function() {
    currentScene = "badend"
  },

  buttonBPressed: function() {
    currentScene = "title"
  },
}

// **********************************************************************
let mainScene = { //play



  setup: function() {

    car.remove();
    car = createSprite(200, -200);
    car.addImage("play", loadImage('top-01.png'));
    car.debug = false;
    car.velocity.y = 0


    camera.on();
    camera.position.x = car.position.x + 275;
    camera.position.y = car.position.y + 250;
  },


  update: function() {


  },
  draw: function() { //play
    background(255, 255, 255, 0);
    camera.on();
    //set the camera position to the ghost position
    camera.position.x = car.position.x + 275;
    camera.position.y = car.position.y + 250;


    scene.visible = false;
    car.visible = true;


    if (microBit.connected) {
      fill(2);
      text("connected.", 10, 20); //connection status
      let accX = microBit.getAccelerometer().x;
      let accY = microBit.getAccelerometer().y;
      let pus = microBit.setButtonACallback(function() {
        console.log("buttonA pressed");
      });
      map(microBit.getAccelerometer().x, -400, 850, 360, 360);

      if (accX < -180) {
        car.velocity.x = -15; // moves left
      } else if (accX > 180) {
        car.velocity.x = 15; // moves right
      } else {
        car.velocity.x = 0; // stationary
      }

      if (accY < -180) {
        car.velocity.y = -15; // ash moves up
      } else if (accY > 180) {
        car.velocity.y = 5; // ash moves down
      } else {
        car.velocity.y = 0; //ash remains stationary
      }

    } else {
      fill(2);
      text("disconnected.", 10, 20); //connection status

    }


    if (limits.overlap(car))
      hit();

    if (portal.overlap(car))
      win();


    drawSprites();
  },

  win: function() {
    if (portal.overlap(car))
      currentScene = "goodend";
  },

  hit: function() {
    if (limits.overlap(car))
      currentScene = "badend";
  },




}


let scenes = {
  "title": titleScene,
  // "arrow": arrowScene,
  "main": mainScene, //play
  "goodend": winningScene,
  "badend": losingScene
}

//*********************************************************


function searchDevice() {
  microBit.searchDevice();
}


function setup() {
  createCanvas(1200, 1850);

  gameFont = loadFont('digital-7.ttf');

  bgm = loadSound('celebration.mp3', loaded);

  function loaded() {
    bgm.setVolume(0.04);
    bgm.loop();
    bgm.play();
  }

  bgImg = createSprite(258, -13880);
  bgImg.addImage(loadImage('BG-01.png'));

  bgImg2 = createSprite(258, -2467);
  bgImg2.addImage(loadImage('BG-02.png'));

  portal = createSprite(143, -19400);
  portal.addImage(loadImage('portal-01.png'));
  portal.debug = false;

  scene = createSprite(325, 680)
  scene.addImage(loadImage('startlo-03.png'));
  scene.addImage("win", loadImage('winlo.png'));
  scene.addImage("lose", loadImage('endlo.png'));
  scene.addAnimation('start', 'startlo1.png', 'startlo2.png', 'startlo3.png');


  car = createSprite(200, -200);
  car.addImage("play", loadImage('top-01.png'));
  car.debug = false;
  car.velocity.y = 0


  limits = new Group();

  l1 = createSprite(-200, -250);
  l1.addImage(loadImage('L1-01.png'));
  l1.debug = false;
  limits.add(l1);

  l2 = createSprite(-530, -1660);
  l2.addImage(loadImage('L2-01.png'));
  l2.debug = false;
  limits.add(l2);

  l3 = createSprite(-860, -2370);
  l3.addImage(loadImage('L3-01.png'));
  l3.debug = false;
  limits.add(l3);

  l4 = createSprite(-155, -3075);
  l4.addImage(loadImage('L4-01.png'));
  l4.debug = false;
  limits.add(l4);

  l5 = createSprite(548, -3292);
  l5.addImage(loadImage('L5-01.png'));
  l5.debug = false;
  limits.add(l5);

  l6 = createSprite(-320, -3510);
  l6.addImage(loadImage('L6-01.png'));
  l6.debug = false;
  limits.add(l6);

  l7 = createSprite(-1190, -5120);
  l7.addImage(loadImage('L7-01.png'));
  l7.debug = false;
  limits.add(l7);

  l8 = createSprite(-534, -6730);
  l8.addImage(loadImage('L8-01.png'));
  l8.debug = false;
  limits.add(l8);

  l9 = createSprite(122, -8112);
  l9.addImage(loadImage('L9-01.png'));
  l9.debug = false;
  limits.add(l9);

  l10 = createSprite(414, -9495);
  l10.addImage(loadImage('L10-01.png'));
  l10.debug = false;
  limits.add(l10);

  l11 = createSprite(710, -10315);
  l11.addImage(loadImage('L11-01.png'));
  l11.debug = false;
  limits.add(l11);

  l12 = createSprite(445, -11138);
  l12.addImage(loadImage('L12-01.png'));
  l12.debug = false;
  limits.add(l12);

  l13 = createSprite(180, -12968);
  l13.addImage(loadImage('L13-01.png'));
  l13.debug = false;
  limits.add(l13);

  l14 = createSprite(555, -14798);
  l14.addImage(loadImage('L14-01.png'));
  l14.debug = false;
  limits.add(l14);

  l15 = createSprite(930, -15528);
  l15.addImage(loadImage('L15-01.png'));
  l15.debug = false;
  limits.add(l15);

  l16 = createSprite(637, -16258);
  l16.addImage(loadImage('L16-01.png'));
  l16.debug = false;
  limits.add(l16);

  l17 = createSprite(345, -17258);
  l17.addImage(loadImage('L17-01.png'));
  l17.debug = false;
  limits.add(l17);

  l18 = createSprite(66, -18258);
  l18.addImage(loadImage('L18-01.png'));
  l18.debug = false;
  limits.add(l18);

  l19 = createSprite(-213, -18905);
  l19.addImage(loadImage('L19-01.png'));
  l19.debug = false;
  limits.add(l19);


  ////////

  r1 = createSprite(600, -500);
  r1.addImage(loadImage('R1-01.png'));
  r1.debug = false;
  limits.add(r1);

  r2 = createSprite(405, -2165);
  r2.addImage(loadImage('R2-01.png'));
  r2.debug = false;
  limits.add(r2);

  r3 = createSprite(210, -2325);
  r3.addImage(loadImage('R3-01.png'));
  r3.debug = false;
  limits.add(r3);

  r4 = createSprite(848, -2485);
  r4.addImage(loadImage('R4-01.png'));
  r4.debug = false;
  limits.add(r4);

  r5 = createSprite(1488, -3575);
  r5.addImage(loadImage('R5-01.png'));
  r5.debug = false;
  limits.add(r5);

  r6 = createSprite(490, -4665);
  r6.addImage(loadImage('R6-01.png'));
  r6.debug = false;
  limits.add(r6);

  r7 = createSprite(-506, -5440);
  r7.addImage(loadImage('R7-01.png'));
  r7.debug = false;
  limits.add(r7);

  r8 = createSprite(363, -6215);
  r8.addImage(loadImage('R8-01.png'));
  r8.debug = false;
  limits.add(r8);

  r9 = createSprite(1233, -7435);
  r9.addImage(loadImage('R9-01.png'));
  r9.debug = false;
  limits.add(r9);

  r10 = createSprite(1513, -8655);
  r10.addImage(loadImage('R10-01.png'));
  r10.debug = false;
  limits.add(r10);

  r11 = createSprite(1793, -10185);
  r11.addImage(loadImage('R11-01.png'));
  r11.debug = false;
  limits.add(r11);

  r12 = createSprite(1353, -11715);
  r12.addImage(loadImage('R12-01.png'));
  r12.debug = false;
  limits.add(r12);

  r13 = createSprite(913, -12860);
  r13.addImage(loadImage('R13-01.png'));
  r13.debug = false;
  limits.add(r13);

  r14 = createSprite(1288, -14005);
  r14.addImage(loadImage('R14-01.png'));
  r14.debug = false;
  limits.add(r14);

  r15 = createSprite(1663, -15490);
  r15.addImage(loadImage('R15-01.png'));
  r15.debug = false;
  limits.add(r15);

  r16 = createSprite(1383, -16975);
  r16.addImage(loadImage('R16-01.png'));
  r16.debug = false;
  limits.add(r16);

  r17 = createSprite(1103, -18000);
  r17.addImage(loadImage('R17-01.png'));
  r17.debug = false;
  limits.add(r17);

  r18 = createSprite(817, -19020);
  r18.addImage(loadImage('R18-01.png'));
  r18.debug = false;
  limits.add(r18);

  r19 = createSprite(531, -19280);
  r19.addImage(loadImage('R19-01.png'));
  r19.debug = false;
  limits.add(r19);

  microBit = new uBit();

  button = createButton('connect microBit');
  button.mousePressed(searchDevice); // attach button listener

  microBit.setButtonACallback(function() {
    console.log("buttonA pressed");
    scenes[currentScene].buttonAPressed();
  });

  microBit.setButtonBCallback(function() {
    console.log("buttonB pressed");
    scenes[currentScene].buttonBPressed();
  });

  microBit.onConnect(function() {
    console.log("connected");
  });

  microBit.onDisconnect(function() {
    console.log("disconnected");
  });


  hitto = loadImage('gameover.jpg');

}



//////////////////////////

function draw() {

  background(100);
  scenes[currentScene].update();
  scenes[currentScene].draw();
  drawSprites();
  

  car.depth = 50
  limits.depth = 1
  portal.depth = 4
  translate(275, 222);


  //for coding ease
  if (mouseIsPressed)
    camera.zoom = 0.085;
  else
    camera.zoom = 0.7;

  drawSprites();

  camera.off();

}


function hit() {
  if (limits.overlap(car))
    currentScene = "badend";
  losingSound.setVolume(0.3);
  losingSound.play();

}

function win() {
  if (portal.overlap(car))
    currentScene = "goodend";
  winSound.setVolume(0.5);
  winSound.play();

}

function touchStarted() {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

function keyPressed() {}