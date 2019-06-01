var score = 0;
var scl = 25;
var DUCKLINGS;
var mama;
var HappyDucks;
var microBit;


let TREES;
let cars;

function searchDevice() {
  microBit.searchDevice();
}

function preload() {
  bg = loadImage('bg-02.png');
  fontMontel = loadFont('Montel.ttf');
}

function setup() {
  createCanvas(1600, 900);
  
  TREES = new Group();
  DUCKLINGS = new Group();

  // ducklings (random?) --------------------------------------------

  for (var j = 0; j < 20; j++) {
    var duck = createSprite(random(width), random(height), random(50), random(20));
    duck.addAnimation('quacking', 'duckling straight-01.png', 'duckling straight-01.png', 'duckling straight-02.png', 'duckling straight-02.png');
    DUCKLINGS.add(duck);
  }

  // mama duck --------------------------------------------  
  mama = createSprite(800, 850);
  mama.addAnimation('floating', 'mama bobbing-01.png', 'mama bobbing-01.png', 'mama higher-01.png', 'mama higher-01.png');

  //cars moving at random -------------------------
  cars = new Group();
  
////forcars in lane 1 00000000000000000000000000000000000000000000000
    for (var i = 0; i < 2; i++) {
    var c1 = createSprite(random(0, 1600), 250, 100, 50);
    var rnd1 = floor(random(0, 3));
    if(rnd1 == 0)
      c1.addAnimation('img', 'RIGHT red.png');
    if(rnd1 == 1)
      c1.addAnimation('img', 'RIGHT blue.png');
    if(rnd1 == 2)
      c1.addAnimation('img', 'RIGHT orange.png');
    c1.velocity.x = 3;
    cars.add(c1);
  }
  
  for (var ii = 0; ii < 2; ii++) {
    var c2 = createSprite(random(0, 1600), 350, 100, 50);
    var rnd2 = floor(random(0, 3));
    if(rnd2 == 0)
      c2.addAnimation('img', 'RIGHT red.png');
    if(rnd2 == 1)
      c2.addAnimation('img', 'RIGHT blue.png');
    if(rnd2 == 2)
      c2.addAnimation('img', 'RIGHT orange.png');
    c2.velocity.x = 3;
    cars.add(c2);
  }
  
////forcars in lane 2 00000000000000000000000000000000000000000000000
   for (var iii = 0; iii < 2; iii++) {
    var c3 = createSprite(random(0, 1600), 550, 100, 50);
    var rnd3 = floor(random(0, 3));
    if(rnd3 == 0)
      c3.addAnimation('img', 'LEFT red.png');
    if(rnd3 == 1)
      c3.addAnimation('img', 'LEFT blue.png');
    if(rnd3 == 2)
      c3.addAnimation('img', 'LEFT orange.png');
    c3.velocity.x = -4;
    cars.add(c3);
  }

   for (var iiii = 0; iiii < 2; iiii++) {
    var c4 = createSprite(random(0, 1600), 650, 100, 50);
    var rnd4 = floor(random(0, 3));
    if(rnd4 == 0)
      c4.addAnimation('img', 'RIGHT red.png');
    if(rnd4 == 1)
      c4.addAnimation('img', 'RIGHT blue.png');
    if(rnd4 == 2)
      c4.addAnimation('img', 'RIGHT orange.png');
    c4.velocity.x = 2.5;
    cars.add(c4);
  } 
  
  // trees (random?) --------------------------------------------
  for (var a = 0; a < 10; a++) {
    var T1 = createSprite(random(0, 1600), random(0, 145));
    T1.addImage(loadImage('this tree-01.png'));
    TREES.add(T1);
  }

  for (var b = 0; b < 7; b++) {
    var T2 = createSprite(random(0, 1600), random(435, 435));
    T2.addImage(loadImage('this tree-01.png'));
    TREES.add(T2);
  }

  for (var c = 0; c < 7; c++) {
    var T3 = createSprite(random(0, 700), random(735, 875));
    T3.addImage(loadImage('this tree-01.png'));
    TREES.add(T3);
  }

  for (var d = 0; d < 6; d++) {
    var T4 = createSprite(random(900, 1600), random(735, 875));
    T4.addImage(loadImage('this tree-01.png'));
    TREES.add(T4);
  }

  // title --------------------------------------------  
  startTitle = createSprite(0, 0);
  startTitle.addImage(loadImage('title-01.png'));
  
  // WIN title --------------------------------------------  
  whenWin = createSprite(0, 0);
  whenWin.addImage(loadImage('WIN crocs.png'));
  
  // LOSE title --------------------------------------------  
  whenLose = createSprite(0, 0);
  whenLose.addImage(loadImage('lose.png'));

  // ducks go home -------------------------------------------- 
  HappyDucks = createSprite(800, 1350);
  HappyDucks.addAnimation('walking', 'row of ducks.png', 'row of ducks.png', 'row of ducks 2.png', 'row of ducks 2.png');

  //microbit implentation-------------------------
  microBit = new uBit();

  button = createButton('connect microBit');
  button.mousePressed(searchDevice); // attach button listener

  microBit.setButtonACallback(function() {
    console.log("buttonA pressed");
  });

  microBit.setButtonBCallback(function() {
    console.log("buttonB pressed");
  });

  microBit.setButtonACallback & microBit.setButtonBCallback(function() {
    console.log("buttonAB pressed");
    startTitle.remove();
  });

  microBit.onConnect(function() {
    console.log("connected");
  });

  microBit.onDisconnect(function() {
    console.log("disconnected");
  });

  //walls around game
  let siz = 10;

  a = createSprite(width / 2, -siz / 2, width, siz);
  b = createSprite(-siz / 2, height / 2, siz, height);
  c = createSprite(width / 2, height, width, -siz);
  d = createSprite(width, height / 2, -siz, height);

  walls = new Group();
  walls.add(a);
  walls.add(b);
  walls.add(c);
  walls.add(d);

}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function draw() {
  background(50);
  image(bg, 0, 0, 1600, 900);

  if (microBit.connected) {
    push();
    angleX = map(microBit.getAccelerometer().x, -1024, 1024, 0, 360);
    angleY = map(microBit.getAccelerometer().y, -1024, 1024, 0, 360);
    pop();

    //For mama duck movement along X-axis
    if (angleX > 180) {
      mama.velocity.x = 2;
    } else if (angleX < 90) {
      mama.velocity.x = -2;
    } else {
      mama.velocity.x = 0;
    }

    //For mama duck movement along Y-axis   
    if (angleY > 180) {
      mama.velocity.y = 2;
    } else if (angleY < 90) {
      mama.velocity.y = -2;
    } else {
      mama.velocity.y = 0;
    }
  }

  // mama.position.x = mouseX;
  // mama.position.y = mouseY;

  mama.scale = 0.25;

  mama.collide(TREES);
  mama.collide(walls);
  mama.overlap(DUCKLINGS, collect);

  HappyDucks.scale = 0.21;

  startTitle.position = (1000, 1000);
  startTitle.scale = 0.2405;

  whenWin.scale = 0.2405;
  whenLose.scale = 0.2405;

  
  //to restart the car position when car moves out of canvas width.
  for (var i = 0; i < cars.length; i++) {
    cars[i].position.x += cars[i].width * 0.01;
    if (cars[i].position.x > width) {
      cars[i].position.x = 0;
    }
  }
  
for (var iii = 1600; iii < cars.length; iii++) {
    cars[iii].position.x += cars[iii].width * 0.01;
    if (cars[iii].position.x < width) {
      cars[iii].position.x = 1600;
    }
  }

  drawSprites();
  fill(255);
  strokeWeight(15);
  stroke(64, 64, 65);
  textSize(100);
  textAlign(CENTER, CENTER);
  textFont(fontMontel);
  if (score < 10) {
    text(score, 1530, 70);
    whenWin.visible = false;
    HappyDucks.visible = false;
    whenLose.visible = false;
    
       if(mama.overlap(cars)) {
         mama.setSpeed(0,0);
         whenLose.visible = true;
    }
  } else {
    whenWin.visible = true;
    HappyDucks.visible = true;
    HappyDucks.velocity.y = -5;
    whenLose.visible = false;
  }
}

function collect(collector, collected) {
  collected.remove();
  score += 1;
}

// mama moving

function keyPressed() {
  if (key == ' ') {
    startTitle.remove();
  } else if (keyCode == RIGHT_ARROW) {
    mama.setSpeed(1.5, 0);
  } else if (keyCode == DOWN_ARROW) {
    mama.setSpeed(1.5, 90);
  } else if (keyCode == LEFT_ARROW) {
    mama.setSpeed(1.5, 180);
  } else if (keyCode == UP_ARROW) {
    mama.setSpeed(1.5, 270);
  }
}

function touchStarted() {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}