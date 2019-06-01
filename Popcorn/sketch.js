var microBit;
var canvas;
var button;

var fire;
var corns;
var bombs;
var MARGIN = 60;
let count = 0;

let currentScene = 'title';

let deathCount = -1;

function preload() {
  start = loadImage('assets/cover.png');
  end = loadImage('assets/gameover.png');
  win = loadImage('assets/win.png');
  bg = loadImage('assets/background.jpg');
  s1 = loadSound('assets/haha01.mp3');
  s2 = loadSound('assets/haha02.mp3');
  s3 = loadSound('assets/haha03.mp3');
  s4 = loadSound('assets/haha04.mp3');
  b = loadSound('assets/bombsound.mp3');
  sm = loadSound('assets/starmusic.mp3');
  //wm = loadSound('assets/winmusic.mp3');
}

function setup() {
  button = createButton('connect microBit');
  button.mousePressed(searchDevice); // attach button listener

  microBit = new uBit();

  microBit.setButtonACallback(function() {
    console.log("buttonA pressed");
    currentScene = 'main';

  });

  microBit.setButtonBCallback(function() {
    console.log("buttonB pressed");
    //if(currentScene = 'main'){
    //stop();
    //}else{
    currentScene = 'title';
    newGame();
    
    //}

  });

  microBit.onConnect(function() {
    console.log("connected");
  });

  microBit.onDisconnect(function() {
    console.log("disconnected");
  });

  fill(171, 209, 225);
  createCanvas(800, 500);


  fire = createSprite(200, 200);
  fire.addAnimation('normal', 'assets/fire01.png', 'assets/fire02.png');
  fire.addAnimation('stretch', 'assets/fire01.png', 'assets/fire02.png', 'assets/fire03.png', 'assets/fire04.png');
  fire.scale = 0.25;

  corns = new Group();
  bombs = new Group();

  //control number of corns present  
  for (var i = 0; i < 17; i++) {
    var ang = random(360);
    var px = width / 2 + 1000 * cos(radians(ang));
    var py = height / 2 + 1000 * sin(radians(ang));
    createCorns(2, px, py);
  }

  for (var j = 0; j < 5; j++) {
    var box = random(360);
    var bx = width / 2 + 1000 * cos(radians(box));
    var by = height / 2 + 1000 * sin(radians(box));
    createBombs(2, bx, by);
  }

  gameOver = false;
  updateSprites(false);
}

function draw() {
  background(171, 209, 225);

  //if (gameOver) {
    //if (currentScene === "gameover"||currentScene === 'win'){
    
    //newGame();
  //}
  if(keyWentDown('q')){
    currentScene = 'main';
  }
  
  if(keyWentDown('w')){
    currentScene = 'title';
    newGame();
  }

  if (!gameOver) {
    if (currentScene === 'title') {
      if(frameCount<2){
      sm.play();
      }
      if(frameCount === 32){
        sm.stop();
      }
      imageMode(CENTER);
      image(start, width / 2, height / 2, 710, 500);
      //image(but1, width / 2, height / 2 + 115, 360, 260);

    }

    if (currentScene === 'main' && count < 15) {
      background(bg);
      textSize(20);
      textStyle(BOLD);
      fill(255, 220, 0);
      text(count + "/15", 225, 55);

      if (deathCount > 0) {
        print(deathCount);
        deathCount--;

      } else if (deathCount == 0) dead();

      //fire.position.x = map(microBit.getAccelerometer().x, -1024, 1024, 0, width);
      //fire.position.y = map(microBit.getAccelerometer().y, -1024, 1024, 0, height);
      fire.velocity.x = (mouseX - fire.position.x) / 10;
      fire.velocity.y = (mouseY - fire.position.y) / 10;

      fire.overlap(corns, collect);

      fire.overlap(bombs, explode);
      //fire.overlap(bombs, die);

      if (fire.getAnimationLabel() == 'stretch' && fire.animation.getFrame() == fire.animation.getLastFrame()) {
        fire.changeAnimation('normal');
      }

      for (var i = 0; i < allSprites.length; i++) {
        var s = allSprites[i];
        if (s.position.x < -MARGIN) s.position.x = width + MARGIN;
        if (s.position.x > width + MARGIN) s.position.x = -MARGIN;
        if (s.position.y < -MARGIN) s.position.y = height + MARGIN;
        if (s.position.y > height + MARGIN) s.position.y = -MARGIN;
      }

      drawSprites();

    } else if (currentScene === 'main' && count >= 15) {//currentScene === 'main' && count >= 7
      //currentScene = 'win';
      die();
      //wm.play();
      imageMode(CENTER);
      image(win, width / 2, height / 2 + 10, 710, 500);

    } else if (currentScene === "gameover") {
      imageMode(CENTER);
      image(end, width / 2, height / 2, 710, 500);
      
    }
  }
}

function createCorns(type, x, y) {
  var a = createSprite(x, y);
  //load random animation
  var type = int(random(0, 2));
  if (type == 0) {
    a.addAnimation('normal01', 'assets/corn01.png', 'assets/corn011.png');
  } else if (type == 1) {
    a.addAnimation('normal02', 'assets/corn02.png', 'assets/corn022.png');
  } else if (type == 2) {
    a.addAnimation('normal03', 'assets/corn03.png', 'assets/corn033.png');
  }
  a.addAnimation('popcorn1', 'assets/popcorn01.png', 'assets/popcorn011.png');
  a.addAnimation('popcorn2', 'assets/popcorn02.png', 'assets/popcorn022.png');
  a.addAnimation('popcorn3', 'assets/popcorn03.png', 'assets/popcorn033.png');
  a.addAnimation('popcorn4', 'assets/popcorn04.png', 'assets/popcorn044.png');

  a.scale = 0.3;
  a.setSpeed(2.5 - (type / 2), random(360));
  a.rotationSpeed = 0.5;
  //a.debug = true;
  a.type = type;



  a.mass = 2 + a.scale;
  a.setCollider('circle', 0, 0, 50);
  corns.add(a);
  return a;
}

function createBombs(type, x, y) {
  var b = createSprite(x, y);
  b.addAnimation('normal', 'assets/bomb01.png', 'assets/bomb02.png');
  b.addAnimation('grow', 'assets/bomb01.png', 'assets/bombfire.png');

  //b.addImage(img);
  //scale loaded img
  b.scale = 0.2;
  b.setSpeed(2.5 - (type / 2), random(360));
  b.rotationSpeed = 0.5;
  //a.debug = true;
  b.type = type;


  b.mass = 2 + b.scale;
  b.setCollider('circle', 0, 0, 50);
  bombs.add(b);
  return b;
}

function collect(collector, collected) {

  if (collected.getAnimationLabel() === 'normal01' || collected.getAnimationLabel() === 'normal02' || collected.getAnimationLabel() === 'normal03') {
    count++;
    collector.changeAnimation('stretch');
    collector.animation.rewind();
    //collected.changeAnimation('popcorn1');
    var type = int(random(0, 3));
    if (type == 0) {
      collected.changeAnimation('popcorn1');
      s1.play();
    } else if (type == 1) {
      collected.changeAnimation('popcorn2');
      s2.play();
    } else if (type == 2) {
      collected.changeAnimation('popcorn3');
      s3.play();
    } else if (type == 3) {
      collected.changeAnimation('popcorn4');
      s4.play();
      //collected.changeAnimation('popcorn' + floor(random(1, 4)));
    }
  }
}

function explode(collector, collected) {
  if (collected.getAnimationLabel() === 'normal') {
    collected.changeAnimation('grow');
    deathCount = 22;
    b.play();
  }

  
  //dead();
}

function dead() {
  currentScene = 'gameover';
  corns.removeSprites();
  //bombs.removeSprites();
  //fire.remove();
  //gameOver = true;
  updateSprites(false);
  
}

function die() {
  
  corns.removeSprites();
  bombs.removeSprites();
  fire.remove();
  //gameOver = true;
  updateSprites(false);
  //currentScene = 'win';

}

function newGame() {
  corns.removeSprites();
  bombs.removeSprites();
  fire.remove();
  gameOver = false;
  updateSprites(true);
  
  count = 0;
  deathCount = -1;
}


function searchDevice() {
  microBit.searchDevice();
}

/*//bomb become flame and expanding to the entire screen with 'game over'
function explode(fire, bomb){
  //push();
  scale(frameCount);
  bomb.changeAnimation('grow');
  bomb.overlap(corns, eat);
  bomb.overlap(bombs, eat);
 // pop();
  
  fire.remove();
  //corns.removeSprites();
  //bombs.removeSprites();
  //bomb.overlap(corns, die);
  updateSprites(false);
  gameOver = true;
}

//exploded flame eats the corns and bombd
function eat(eater, eated){
  eated.remove();
}*/