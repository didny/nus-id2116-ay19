var dog;
var title;
var dogStill;
var finish;
var chocos;
var greenSweets;
var orangeSweets;
var pinkSweets;
var gameOver;
var hersheyImg, chocoImg, groundImg, bgImg;
var gameScreen =0;
var microBit;
var security;
var security2;
var security3;
var win;


var isJumping = false;

function searchDevice() {
  microBit.searchDevice();
}

function preload() {
  openingsong = loadSound('opening.mp3');
  stageone = loadSound('stageone.mp3');
  stagetwo = loadSound('stagetwo.mp3');
  stagethree = loadSound('stagethree.mp3');
  gameover = loadSound('game over.mp3');
  winning = loadSound('winning song.mp3');
  choco = loadSound('choco.mp3')
  candy = loadSound('candy.mp3')
  //pushing = loadSound('pushing box.mp3')

}

function setup() {
  openingsong.loop();
  
  createCanvas(400, 600);

  dog = createSprite(width / 2, height / 2, 40, 40);
  var myAnimation = dog.addAnimation('run', 'Dog Walking 1.png', 'Dog Walking 2.png', 'Dog Walking 3.png');
  dog.animation.frameDelay = 6;
  dog.scale = 0.5
  dog.setCollider('circle', 0, 0, 15);
  dog.velocity.y = 0
  dog.addAnimation('jumping', 'jump 1.png', 'jump 2.png',
    'jump 3.png')

  dogStill = createSprite(width / 2, height / 2, 40, 40);
  var myAnimation1 = dogStill.addAnimation('hello', 'dog still 1.png', 'dog still 2.png', 'dog still 3.png');
  dogStill.animation.frameDelay = 6;
  dogStill.scale = 0.5

  security = createSprite(width / 2, height / 4, 0, 0);
  var myAnimation2 = security.addAnimation('hello', 'Fat security 1.png', 'Fat security 2.png', 'Fat security 3.png');
  security.animation.frameDelay = 6;
  security.scale = 0.7

  security2 = createSprite(width / 2, height / 4, 0, 0);
  var myAnimation3 = security2.addAnimation('hello', 'Security walking 1.png', 'Security walking 2.png', 'Security walking 3.png');
  security2.animation.frameDelay = 6;
  security2.scale = 0.7

  security3 = createSprite(width / 2, height / 4, 0, 0);
  var myAnimation4 = security3.addAnimation('hello', 'Buff Security 1.png', 'Buff Security 2.png', 'Buff Security 3.png');
  security3.animation.frameDelay = 6;
  security3.scale = 0.7

  securityWin = createSprite(width / 2, height/2, 0, 0);
  var myAnimation8 = securityWin.addAnimation('hello', 'fat capture 1.png', 'fat capture 2.png', 'fat capture 3.png');
  securityWin.animation.frameDelay = 6;
  securityWin.scale = 0.7
  
  security2Win = createSprite(width / 2, height / 2, 0, 0); 
  var myAnimation5 = security2Win.addAnimation('hello', 'Dog captured 1.png', 'Dog captured 2.png', 'Dog captured 3.png');
  security2Win.animation.frameDelay = 6;
  security2Win.scale = 0.7
  
   security3Win = createSprite(width / 2, height / 2, 0, 0);
  var myAnimation9 = security3Win.addAnimation('hello', 'buff capture 1.png', 'buff capture 2.png', 'buff capture 3.png');
  security3Win.animation.frameDelay = 6;
  security3Win.scale = 0.7


  title = createSprite(200, 0, 400, 600);
  var myAnimation6 = title.addAnimation('hello', 'start1.png', 'start2.png', 'start3.png');
  title.animation.frameDelay = 6;
  title.scale = 0.25

  win = createSprite(200, 300, 400, 600);
  var myAnimation7 = win.addAnimation('hello', 'ending-30.png', 'ending-31.png', 'ending-32.png');
  win.animation.frameDelay = 10;
  win.scale = 0.25


  factoryImg = loadImage('top.png')
  factory = createSprite(200, 55);
  factory.addImage(factoryImg);
  factory.scale = 0.24

  factoryendImg = loadImage('Factory.png')
  factoryend = createSprite(200, 10000);
  factoryend.addImage(factoryendImg);
  factoryend.scale = 0.17

  chocoImg = loadImage('chocolate (2).png');
  greenSweetImg = loadImage('green sweet.png')
  orangeSweetImg = loadImage('pink sweet.png')
  pinkSweetImg = loadImage('orange sweet.png')
  titleImg = loadImage('Hersheyland.jpg')
  restartImg = loadImage('gameOver1.jpg')
  obstacleImg = loadImage('obstacle (1).png')
  securityImg = loadImage('Fat security 1.png')
  security2Img = loadImage('Security walking 1.png')
  security3Img = loadImage('Buff Security 1.png')
  dogImg = loadImage('dog still 1.png')
  instImg = loadImage('instructions.png')

  spr1 = createSprite(
    -50, 300, 100, 20000);

  spr2 = createSprite(
    450, 300, 100, 20000);


  camera.position.x = width / 2;

  chocos = new Group();
  for (var i = 0; i < 65; i++) {
    var c = createSprite(random(25, 375), height + random(50, 10000));
    c.addImage(chocoImg);
    c.scale = 0.3;
    chocos.add(c);
  }

  obstacles = new Group();
  for (var k = 0; k < 30; k++) {
    var b = createSprite(random(25, 375), height + random(50, 10000));
    b.addImage(obstacleImg);
    b.scale = 0.6;
    obstacles.add(b);
  }

  pinkSweets = new Group();
  for (var u = 0; u < 10; u++) {
    var s = createSprite(random(25, 375), height + random(50, 10000));
    s.addImage(pinkSweetImg);
    s.scale = 0.3;
    pinkSweets.add(s);

  }
  greenSweets = new Group();
  for (var n = 0; n < 15; n++) {
    var p = createSprite(random(25, 375), height + random(50, 10000));
    p.addImage(greenSweetImg);
    p.scale = 0.3;
    greenSweets.add(p);

  }
  orangeSweets = new Group();
  for (var w = 0; w < 15; w++) {
    var q = createSprite(random(25, 375), height + random(50, 10000));
    q.addImage(orangeSweetImg);
    q.scale = 0.3;
    orangeSweets.add(q);

  }

  microBit = new uBit();

  button = createButton('connect microBit');
  button.mousePressed(searchDevice); // attach button listener

  microBit.setButtonACallback(function() {
    console.log("buttonA pressed");
      if (gameScreen == 11) {
      startGame();
    }
    if (gameScreen == 5) {
      isJumping = 15;
    }
    if (gameScreen == 3) {
      restart();
      setupSecond();
    }
    if (gameScreen == 4) {
      playGame2();
    }
    if (gameScreen == 6) {
      restart2();
      setupSecond();
    }
    if (gameScreen == 7) {
      playGame3();
    }
    if (gameScreen == 8) {
      isJumping = 15;
    }

    if (gameScreen == 9) {
      restart3();
      setupThird();
    }
    if (gameScreen == 10) {
      quitGame();
    }
    if (gameScreen == 1) {
      playGame();
    }
  });

  microBit.setButtonBCallback(function() {
    console.log("buttonB pressed");
     if (gameScreen == 0) {inst();
    }
    if (gameScreen == 3) {
      quitGame();
      setupSecond();
    }
    if (gameScreen == 6) {
      quitGame();
      setupSecond();
    }
    if (gameScreen == 9) {
      quitGame();
      setupThird();
    }
    if (gameScreen == 10) {
      quitGame();
      setupThird();
    }
  });
}

function setupSecond() {
  createCanvas(400, 600);

  dog = createSprite(width / 2, height / 2, 40, 40);
  var myAnimation = dog.addAnimation('hello', 'Dog Walking 1.png', 'Dog Walking 2.png', 'Dog Walking 3.png');
  dog.animation.frameDelay = 6;
  dog.scale = 0.5
  dog.setCollider('circle', 0, 0, 15);
  dog.velocity.y = 0

  dogStill = createSprite(width / 2, height / 2, 40, 40);
  var myAnimation1 = dogStill.addAnimation('hello', 'dog still 1.png', 'dog still 2.png', 'dog still 3.png');
  dogStill.animation.frameDelay = 6;
  dogStill.scale = 0.5

  security = createSprite(width / 2, height / 4, 0, 0);
  var myAnimation2 = security.addAnimation('hello', 'Fat security 1.png', 'Fat security 2.png', 'Fat security 3.png');
  security.animation.frameDelay = 6;
  security.scale = 0.7

  security2 = createSprite(width / 2, height / 4, 0, 0);
  var myAnimation3 = security2.addAnimation('hello', 'Security walking 1.png', 'Security walking 2.png', 'Security walking 3.png');
  security2.animation.frameDelay = 6;
  security2.scale = 0.7

  security3 = createSprite(width / 2, height / 4, 0, 0);
  var myAnimation4 = security3.addAnimation('hello', 'Buff Security 1.png', 'Buff Security 2.png', 'Buff Security 3.png');
  security3.animation.frameDelay = 6;
  security3.scale = 0.7

  security2Win = createSprite(width / 2, height / 2, 0, 0);
  var myAnimation5 = security2Win.addAnimation('hello', 'Dog captured 1.png', 'Dog captured 2.png', 'Dog captured 3.png');
  security2Win.animation.frameDelay = 6;
  security2Win.scale = 0.7

  title = createSprite(200, 0, 400, 600);
  var myAnimation6 = title.addAnimation('hello', 'start1.png', 'start2.png', 'start3.png');
  title.animation.frameDelay = 6;
  title.scale = 0.25

  win = createSprite(200, 300, 400, 600);
  var myAnimation7 = win.addAnimation('hello', 'ending-30.png', 'ending-31.png', 'ending-32.png');
  win.animation.frameDelay = 6;
  win.scale = 0.25

  securityWin = createSprite(width / 2, height / 2, 0, 0);
  var myAnimation8 = securityWin.addAnimation('hello', 'fat capture 1.png', 'fat capture 2.png', 'fat capture 3.png');
  securityWin.animation.frameDelay = 6;
  securityWin.scale = 0.7

  security3Win = createSprite(width / 2, height / 2, 0, 0);
  var myAnimation9 = security3Win.addAnimation('hello', 'buff capture 1.png', 'buff capture 2.png', 'buff capture 3.png');
  security3Win.animation.frameDelay = 6;
  security3Win.scale = 0.7

  factoryImg = loadImage('top.png')
  factoryendImg = loadImage('Factory.png')
  factory = createSprite(200, 55);
  factory.addImage(factoryImg);
  factory.scale = 0.24

  factoryend = createSprite(200, 10000);
  factoryend.addImage(factoryendImg);
  factoryend.scale = 0.17

  chocoImg = loadImage('chocolate (2).png');
  greenSweetImg = loadImage('green sweet.png')
  orangeSweetImg = loadImage('pink sweet.png')
  pinkSweetImg = loadImage('orange sweet.png')
  titleImg = loadImage('Hersheyland.jpg')
  restartImg = loadImage('gameOver1.jpg')
  obstacleImg = loadImage('obstacle (1).png')
  securityImg = loadImage('Fat security 1.png')
  security2Img = loadImage('Security walking 1.png')
  security3Img = loadImage('Buff Security 1.png')
  dogImg = loadImage('dog still 1.png')
  instImg = loadImage('instructions.png')

  spr1 = createSprite(
    -50, 300, 100, 20000);

  spr2 = createSprite(
    450, 300, 100, 20000);


  camera.position.x = width / 2;

  chocos = new Group();
  for (var i = 0; i < 65; i++) {
    var c = createSprite(random(25, 375), height + random(50, 10000));
    c.addImage(chocoImg);
    c.scale = 0.3;
    chocos.add(c);
  }

  obstacles = new Group();
  for (var k = 0; k < 30; k++) {
    var b = createSprite(random(25, 375), height + random(50, 10000));
    b.addImage(obstacleImg);
    b.scale = 0.6;
    obstacles.add(b);
  }

  pinkSweets = new Group();
  for (var u = 0; u < 10; u++) {
    var s = createSprite(random(50, 350), height + random(50, 10000));
    s.addImage(pinkSweetImg);
    s.scale = 0.3;
    pinkSweets.add(s);

  }
  greenSweets = new Group();
  for (var n = 0; n < 15; n++) {
    var p = createSprite(random(25, 375), height + random(50, 10000));
    p.addImage(greenSweetImg);
    p.scale = 0.3;
    greenSweets.add(p);

  }
  orangeSweets = new Group();
  for (var w = 0; w < 15; w++) {
    var q = createSprite(random(25, 375), height + random(50, 10000));
    q.addImage(orangeSweetImg);
    q.scale = 0.3;
    orangeSweets.add(q);

  }


}

function setupThird() {
  createCanvas(400, 600);

  dog = createSprite(width / 2, height / 2, 40, 40);
  var myAnimation = dog.addAnimation('hello', 'Dog Walking 1.png', 'Dog Walking 2.png', 'Dog Walking 3.png');
  dog.animation.frameDelay = 6;
  dog.scale = 0.5
  dog.setCollider('circle', 0, 0, 15);
  dog.velocity.y = 0

  dogStill = createSprite(width / 2, height / 2, 40, 40);
  var myAnimation1 = dogStill.addAnimation('hello', 'dog still 1.png', 'dog still 2.png', 'dog still 3.png');
  dogStill.animation.frameDelay = 6;
  dogStill.scale = 0.5

  security = createSprite(width / 2, height / 4, 0, 0);
  var myAnimation2 = security.addAnimation('hello', 'Fat security 1.png', 'Fat security 2.png', 'Fat security 3.png');
  security.animation.frameDelay = 6;
  security.scale = 0.7

  security2 = createSprite(width / 2, height / 4, 0, 0);
  var myAnimation3 = security2.addAnimation('hello', 'Security walking 1.png', 'Security walking 2.png', 'Security walking 3.png');
  security2.animation.frameDelay = 6;
  security2.scale = 0.7

  security3 = createSprite(width / 2, height / 4, 0, 0);
  var myAnimation4 = security3.addAnimation('hello', 'Buff Security 1.png', 'Buff Security 2.png', 'Buff Security 3.png');
  security3.animation.frameDelay = 6;
  security3.scale = 0.7

  security2Win = createSprite(width / 2, height / 2, 0, 0);
  var myAnimation5 = security2Win.addAnimation('hello', 'Dog captured 1.png', 'Dog captured 2.png', 'Dog captured 3.png');
  security2Win.animation.frameDelay = 6;
  security2Win.scale = 0.7

  title = createSprite(200, 0, 400, 600);
  var myAnimation6 = title.addAnimation('hello', 'start1.png', 'start2.png', 'start3.png');
  title.animation.frameDelay = 6;
  title.scale = 0.25

  win = createSprite(200, 300, 400, 600);
  var myAnimation7 = win.addAnimation('hello', 'ending-30.png', 'ending-31.png', 'ending-32.png');
  win.animation.frameDelay = 6;
  win.scale = 0.25

  securityWin = createSprite(width / 2, height / 2, 0, 0);
  var myAnimation8 = securityWin.addAnimation('hello', 'fat capture 1.png', 'fat capture 2.png', 'fat capture 3.png');
  securityWin.animation.frameDelay = 6;
  securityWin.scale = 0.7

  security3Win = createSprite(width / 2, height / 2, 0, 0);
  var myAnimation9 = security3Win.addAnimation('hello', 'buff capture 1.png', 'buff capture 2.png', 'buff capture 3.png');
  security3Win.animation.frameDelay = 6;
  security3Win.scale = 0.7

  factoryImg = loadImage('top.png')
  factoryendImg = loadImage('Factory.png')
  factory = createSprite(200, 55);
  factory.addImage(factoryImg);
  factory.scale = 0.24

  factoryend = createSprite(200, 10000);
  factoryend.addImage(factoryendImg);
  factoryend.scale = 0.17

  chocoImg = loadImage('chocolate (2).png');
  greenSweetImg = loadImage('green sweet.png')
  orangeSweetImg = loadImage('pink sweet.png')
  pinkSweetImg = loadImage('orange sweet.png')
  restartImg = loadImage('gameOver1.jpg')
  obstacleImg = loadImage('obstacle (1).png')
  securityImg = loadImage('Fat security 1.png')
  security2Img = loadImage('Security walking 1.png')
  security3Img = loadImage('Buff Security 1.png')
  dogImg = loadImage('dog still 1.png')
  instImg = loadImage('instructions.png')

  spr1 = createSprite(
    -50, 300, 100, 20000);

  spr2 = createSprite(
    450, 300, 100, 20000);


  camera.position.x = width / 2;

  chocos = new Group();
  for (var i = 0; i < 65; i++) {
    var c = createSprite(random(25, 375), height + random(50, 10000));
    c.addImage(chocoImg);
    c.scale = 0.3;
    chocos.add(c);
  }

  obstacles = new Group();
  for (var k = 0; k < 30; k++) {
    var b = createSprite(random(25, 375), height + random(50, 10000));
    b.addImage(obstacleImg);
    b.scale = 0.6;
    obstacles.add(b);
  }

  pinkSweets = new Group();
  for (var u = 0; u < 10; u++) {
    var s = createSprite(random(25, 375), height + random(50, 10000));
    s.addImage(pinkSweetImg);
    s.scale = 0.3;
    pinkSweets.add(s);

  }
  greenSweets = new Group();
  for (var n = 0; n < 15; n++) {
    var p = createSprite(random(25, 375), height + random(50, 10000));
    p.addImage(greenSweetImg);
    p.scale = 0.3;
    greenSweets.add(p);

  }
  orangeSweets = new Group();
  for (var w = 0; w < 15; w++) {
    var q = createSprite(random(50, 350), height + random(50, 10000));
    q.addImage(orangeSweetImg);
    q.scale = 0.3;
    orangeSweets.add(q);

  }
}


//****** Scenes Function ******//
function draw() {


  if (gameScreen == 0) {
    initScreen();
  } else if (gameScreen == 1) {
    startScreen()
  } else if (gameScreen == 2) {
    firstScreen()
  } else if (gameScreen == 3) {
    gameOverScreen();
  } else if (gameScreen == 4) {
    startScreen2();
  } else if (gameScreen == 5) {
    secondScreen();
  } else if (gameScreen == 6) {
    gameOverScreen2();
  } else if (gameScreen == 7) {
    startScreen3();
  } else if (gameScreen == 8) {
    thirdScreen();
  } else if (gameScreen == 9) {
    gameOverScreen3();
  } else if (gameScreen == 10) {
    winScreen();
  } else if (gameScreen == 11) {
    instScreen();
  }



}

function accelerometer() {
  let accX = microBit.getAccelerometer().x;

  if (accX < -200) {
    dog.position.x -= 5;
  }
  if (accX > 200) {
    dog.position.x += 5;
  }
  text("Accelerometer X=" + accX, 10, 40);
}

//****** Title Function ******//
function initScreen() {
  drawSprite(title);

  camera.position.x = width / 2;
  camera.position.y = height / 4 - 150;

}


//****** Progress Bars Function ******//
function progressBar() {
  let x = (dog.position.y / 10000) * 300 + 35
  let z = ((dog.position.y / 10000) * 300)
  let y = dog.position.y - 265
  let a = (security.position.y / 10000) * 300 + 40
  let b = dog.position.y - 270
  noStroke();
  fill(255)
  rect(50, y, 300, 20, 20)
  fill(255, 237, 43)
  rect(50, y, z, 20, 20)

  image(securityImg, a - 4, b - 2, 25, 25);
  image(dogImg, x, y - 4, 28, 28);
}

function progressBar2() {
  let x = (dog.position.y / 10000) * 300 + 35
  let z1 = ((dog.position.y / 10000) * 300)
  let y = dog.position.y - 265
  let a = (security2.position.y / 10000) * 300 + 40
  let b = dog.position.y - 270
  noStroke();
  fill(255)
  rect(50, y, 300, 20, 20)
  fill(255, 237, 43)
  rect(50, y, z1, 20, 20)

  image(security2Img, a - 4, b - 2, 25, 25);
  image(dogImg, x, y - 4, 28, 28);
}

function progressBar3() {
  let x = (dog.position.y / 10000) * 300 + 35
  let z2 = ((dog.position.y / 10000) * 300)
  let y = dog.position.y - 265
  let a = (security3.position.y / 10000) * 300 + 40
  let b = dog.position.y - 270
  noStroke();
  fill(255)
  rect(50, y, 300, 20, 20)
  fill(255, 237, 43)
  rect(50, y, z2, 20, 20)

  image(security3Img, a - 4, b - 2, 25, 25);
  image(dogImg, x, y - 4, 28, 28);

}

//****** starting Screens Function ******//
function startScreen() {
  textAlign(CENTER);
  fill(255, 255, 255);
  textSize(30);
  text("Press any key to start", 200, 0);
  background(117, 114, 111);
 
  camera.position.y = dogStill.position.y;

  camera.off();
  camera.on();
  drawSprite(dogStill)
  drawSprite(factory)
  drawSprite(security);
  progressBar();
}

function startScreen2() {
  background(117, 114, 111);
  textAlign(CENTER);
  fill(255, 255, 255);
  textSize(30);
  text("stage2", 200, 0);
  camera.position.y = dogStill.position.y;

  camera.off();
  camera.on();
  drawSprite(dogStill)
  drawSprite(factory)
  drawSprite(security2)
  progressBar2();
}

function startScreen3() {
  background(117, 114, 111);
  textAlign(CENTER);
  fill(255, 255, 255);
  textSize(30);
  text("Stage 3", 200, 0);
  camera.position.y = dogStill.position.y;

  camera.off();
  camera.on();
  drawSprite(dogStill);
  drawSprite(factory);
  drawSprite(security3);
  progressBar3();
}

function instScreen() {
  image(instImg, 0, 0, 400, 600);
  camera.position.x = width / 2;
  camera.position.y = height / 2;

}

//****** Stages Function ******//

function firstScreen() {
  background(117, 114, 111);
  camera.position.y = dog.position.y;

  camera.off();
  camera.on();
  accelerometer();
  
  security.attractionPoint(1, dog.position.x, dog.position.y);
  security.velocity.y = 5.8;
  security.friction = 0.01

  if (security.overlap(chocos)) {
    security.velocity.y += 0.15;
    security.overlap(chocos, getChoco)
  }

  if (dog.overlap(chocos)) {
    dog.velocity.y -= 0.2;
    choco.play();
    dog.overlap(chocos, getChoco)
  }

  if (dog.overlap(greenSweets)) {
    dog.velocity.y += 0.1;
    candy.play();
    dog.overlap(greenSweets, getgreenSweet)
  }

  if (dog.overlap(orangeSweets)) {
    dog.velocity.y += 0.1;
    candy.play();
    dog.overlap(orangeSweets, getorangeSweet)
  }

  if (dog.overlap(pinkSweets)) {
    dog.velocity.y += 0.1;
    candy.play();
    dog.overlap(pinkSweets, getpinkSweet)
  }
 if (dog.overlap(security)) {
    gameOver();
  }

  if (dog.overlap(factoryend)) {
    nextStage();
  }
  dog.collide(spr1);
  dog.collide(spr2);
  
  security.collide(spr1);
  security.collide(spr2);

  drawSprite(factory)
  drawSprite(factoryend)
  drawSprites(chocos);
  drawSprite(security);
  drawSprite(dog);
  drawSprites(greenSweets);
  drawSprites(orangeSweets);
  drawSprites(pinkSweets);
  drawSprite(spr1);
  drawSprite(spr2);
  progressBar();
}

function secondScreen() {
    background(117, 114, 111);
    accelerometer();
    camera.position.y = dog.position.y;

    camera.off();
    camera.on()
  
  security2.attractionPoint(1, dog.position.x, dog.position.y);
  security2.velocity.y = 6.5;
  security2.friction = 0.01

  if (dog.overlap(chocos)) {
    dog.velocity.y -= 0.30;
    choco.play();
    dog.overlap(chocos, getChoco)
  }

  if (dog.overlap(greenSweets)) {
    dog.velocity.y += 0.25;
    candy.play();
    dog.overlap(greenSweets, getgreenSweet)
  }

  if (dog.overlap(orangeSweets)) {
    dog.velocity.y += 0.25;
    candy.play();
    dog.overlap(orangeSweets, getorangeSweet)
  }

  if (dog.overlap(pinkSweets)) {
    dog.velocity.y += 0.25;
    candy.play();
    dog.overlap(pinkSweets, getpinkSweet)
  }
  dog.collide(spr1);
  dog.collide(spr2);
  if (dog.overlap(security2)) {
    gameOver2();
  }

  if (dog.overlap(factoryend)) {
    nextStage2();
  }

  security2.collide(spr1);
  security2.collide(spr2);


  obstacles.overlap(obstacles);


  if (isJumping < 0) dog.collide(obstacles);
  isJumping--;

  drawSprite(factory)
  drawSprite(factoryend)
  drawSprites(chocos);
  drawSprite(security2);
  drawSprite(dog);
  drawSprites(greenSweets);
  drawSprites(orangeSweets);
  drawSprites(pinkSweets);
  drawSprites(obstacles);
  drawSprite(spr1);
  drawSprite(spr2);
  progressBar2();
}

function thirdScreen() {
  background(117, 114, 111);
  accelerometer();
  camera.position.y = dog.position.y;

  camera.off();
  camera.on();
  
  security3.attractionPoint(1, dog.position.x, dog.position.y);
  security3.velocity.y = 7.8;
  security3.friction = 0.01
  if (security3.overlap(obstacles)) {
  security3.displace(obstacles)
  }
  security3.collide(spr2);
  security3.collide(spr1);

  camera.position.y = dog.position.y;
  camera.off();
  camera.on();

  if (dog.overlap(chocos)) {
    dog.velocity.y -= 0.48;
    choco.play();
    dog.overlap(chocos, getChoco)
  }
  if (dog.overlap(greenSweets)) {
    dog.velocity.y += 0.3;
    candy.play();
    dog.overlap(greenSweets, getgreenSweet)
  }
  if (dog.overlap(orangeSweets)) {
    dog.velocity.y += 0.3;
    candy.play();
    dog.overlap(orangeSweets, getorangeSweet)
  }
  if (dog.overlap(pinkSweets)) {
    dog.velocity.y += 0.3;
    candy.play();
    dog.overlap(pinkSweets, getpinkSweet)
  }
  dog.collide(spr1);
  dog.collide(spr2);
  if (dog.overlap(security3)) {
    gameOver3();}
  if (dog.overlap(factoryend)) {
    nextStage3();}


  if (isJumping < 0) dog.collide(obstacles);
  isJumping--;
 
  obstacles.overlap(obstacles);
  
  drawSprite(factory)
  drawSprite(factoryend)
  drawSprites(chocos);
  drawSprite(security3);
  drawSprite(dog);
  drawSprites(greenSweets);
  drawSprites(orangeSweets);
  drawSprites(pinkSweets);
  drawSprites(obstacles);
  drawSprite(spr2);
  drawSprite(spr1);
  progressBar3();
}


//****** Gameover Function ******//
function gameOverScreen() {
  
  background(255, 243, 233)
  image(restartImg, 0, 50, 400, 600);
  camera.position.x = width / 2;
  camera.position.y = height / 2;


  drawSprite(securityWin)
  textSize(30);


}

function gameOverScreen2() {

  background(255, 243, 233)
  image(restartImg, 0, 50, 400, 600);
  camera.position.x = width / 2;
  camera.position.y = height / 2;

  drawSprite(security2Win)
}

function gameOverScreen3() {
  background(255, 243, 233)
  image(restartImg, 0, 50,
    400, 600);
  camera.position.x = width / 2;
  camera.position.y = height / 2;

  drawSprite(security3Win)
}

function winScreen() {
  drawSprite(win);
  camera.position.x = width / 2;
  camera.position.y = height / 2;
}


//****** Consume Sprites functions******//
function getgreenSweet(dog, greenSweet) {
  greenSweet.remove();

}

function getorangeSweet(dog, orangeSweet) {
  orangeSweet.remove();
}

function getpinkSweet(dog, pinkSweet) {
  pinkSweet.remove();
}

function getChoco(dog, choco) {
  choco.remove();
  choco.play();
}

function getChoco(security, choco) {
  choco.remove();
}

//****** Additional Functions to load Game Screens ******//
function quitGame() {
  gameScreen = 0;
  gameover.stop();
  winning.stop();
  openingsong.play();
}

function inst() {
  gameScreen = 11;
}

function startGame() {
  gameScreen = 1;
  openingsong.stop();
  stageone.play();
}

function playGame() {
  gameScreen = 2;
  dog.velocity.y = 6.2

}

function playGame2() {
  gameScreen = 5;
  dog.velocity.y = 6.8
}

function playGame3() {
  gameScreen = 8;
  dog.velocity.y = 8.4
}

function restart() {
  gameScreen = 1
   obstacles.removeSprites()
  greenSweets.removeSprites()
  orangeSweets.removeSprites()
  pinkSweets.removeSprites()
  chocos.removeSprites()
  gameover.stop();
  stageone.loop();
}

function restart2() {
  gameScreen = 4
  obstacles.removeSprites()
  greenSweets.removeSprites()
  orangeSweets.removeSprites()
  pinkSweets.removeSprites()
  chocos.removeSprites()
  gameover.stop();
  stagetwo.loop();
}

function restart3() {
  gameScreen = 7
  obstacles.removeSprites()
  greenSweets.removeSprites()
  orangeSweets.removeSprites()
  pinkSweets.removeSprites()
  chocos.removeSprites()
  gameover.stop();
  stagethree.loop();
}

function gameOver() {
  gameScreen = 3;
  stageone.stop();
  gameover.loop();
}

function gameOver2() {
  gameScreen = 6;
  stagetwo.stop();
  gameover.loop();
}

function gameOver3() {
  gameScreen = 9;
  stagethree.stop();
  gameover.loop();
}

function nextStage() {

  obstacles.removeSprites()
  greenSweets.removeSprites()
  orangeSweets.removeSprites()
  pinkSweets.removeSprites()
  chocos.removeSprites()
  gameScreen = 4;

  setupSecond()
  stageone.stop();
  stagetwo.loop();
}

function nextStage2() {
  obstacles.removeSprites()
  greenSweets.removeSprites()
  orangeSweets.removeSprites()
  pinkSweets.removeSprites()
  chocos.removeSprites()
  gameScreen = 7;
  setupThird();
  stagetwo.stop();
  stagethree.loop();

}

function nextStage3() {
  obstacles.removeSprites()
  greenSweets.removeSprites()
  orangeSweets.removeSprites()
  pinkSweets.removeSprites()
  chocos.removeSprites()
  gameScreen = 10;
  setupThird();
  stagethree.stop();
  winning.loop();

}

