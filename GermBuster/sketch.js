//asteroid clone (core mechanics only)
//arrow keys to move + x to shoot

var bullets;
var asteroids;
var ship;
var shipImage, bulletImage, particleImage;
var MARGIN = 40;
var score = 0;
var gameOver;
let gameScreen = [0];
var itemDualGun;
var itemLaser;
var itemCanon;
var highScore;

var microbit;

var winHeight = 1080;
var winWidth = 1920;

/********* MICROBIT PAIRING *********/
function searchDevice() {
  microBit.searchDevice();

}

microBit = new uBit();

//workard --> change pairing to auto pair when it plays
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    searchDevice();
  }}


microBit.setButtonBCallback(function() {
  console.log("buttonB pressed");
  buttonBPressed();
  Bbutton.play();
});

microBit.onConnect(function() {
  console.log("connected");
alert("connected");
  ConnectedSound.play();
});
  
microBit.onDisconnect(function() {
  console.log("disconnected");
});

/********* SETUP *********/
function preload() {
  shipImage = loadImage('Hero_1.png','Hero w Laser.png','Hero w Dual Gun.png','Hero w Canon.png')
 // bulletImage = loadImage('DefaultBullet.png','Laser Bullet.png','Dual Gun Bullet.png','Canon Bullet.png')
  //itemImage = loadImage('Canon Item.png','Laser Item.png','Dual Gun Item.png')
  // germImage = loadImage('Germ 2.png', 'Germ 3.png');
  StartScene = loadImage('Captain white start screen-01.png');
  EndScene = loadImage('Captain white start screen-02.png');
  StoryScene = loadImage('Captain white start screen-04.png');
  bg = loadImage('MainScene.png');
  ConnectedSound = loadSound('Ring.mp3');
  Bbutton = loadSound('Bbutton.mp3');
}

function basicShip() {
  shipImage = loadImage('Hero_1.png');
  bulletImage = loadImage('bullet.png');
  bulletSound = loadSound('DefaultBullet.mp3');
}

function revertBasicShip() {
  ship.changeImage('normal')
  bulletImage = loadImage('bullet.png');
  bulletSound = loadSound('DefaultBullet.mp3');
}

function dualGunShip() {
  ship.changeImage('dual gun')
  bulletImage = loadImage('Dual Gun Bullet.png');
  bulletSound = loadSound('DualGun.mp3');
  
}

function setDualGunShip(ship, itemDualGun) {


  dualGunShip()
  itemDualGun.remove()
  setTimeout(revertBasicShip, 10000)
  itemsSpawn()
}

function laserShip() {
  ship.changeImage('laser')
  bulletImage = loadImage('Laser Bullet.png');
   bulletSound = loadSound('Laser.mp3');

}

function setLaserShip(ship, itemLaser) {

  laserShip()
  itemLaser.remove()
  setTimeout(revertBasicShip, 10000)
  itemsSpawn()
}

function canonShip() {
  ship.changeImage('canon')
  bulletImage = loadImage('Canon Bullet.png');
bulletSound = loadSound('Canon.mp3');

}

function setCanonShip(ship, itemCanon) {

  canonShip()
  itemCanon.remove()
  setTimeout(revertBasicShip, 10000)
  itemsSpawn()
}
/********* SETUP BLOCK *********/
function setup() {
  createCanvas(winWidth, winHeight);
  // button = createButton('connect microBit');
  // button.mousePressed(searchDevice);


  loadAssets()
  createShip()
  

  asteroids = new Group();
  bullets = new Group();
  itemDualGun = new Group();
  itemLaser = new Group();
  itemCanon = new Group();

  for (var i = 0; i < 12; i++) {
    var ang = random(360);
    var px = width / 2 + 1000 * cos(radians(ang));
    var py = height / 2 + 1000 * sin(radians(ang));
    createAsteroid( px, py, 2);
  }
  
  for (var i = 0; i < 1; i++) {
    var ang = random(360);
    var px = width / 2 + 1000 * cos(radians(ang));
    var py = height / 2 + 1000 * sin(radians(ang));
    let item = [weaponDualGun, weaponLaser, weaponCanon];
    let weaponItem = random(item);
    weaponItem(px, py, 1);
  }


}

/********* DRAW BLOCK *********/
function draw() {
  if (gameScreen == 0) {
    initScreen();

  } else if (gameScreen == 1) {
    preScreen();

  } else if (gameScreen == 2) {
    gameplayScreen();

  } else if (gameScreen == 3) {
    gameOverScreen();
  }
}

/********* START SCREEN *********/
function initScreen() {
  image(StartScene, 0, 0, winWidth, winHeight);

}


function preScreen() {
  image(StoryScene, 0, 0, winWidth, winHeight);

}

/********* GAME PLAY SCREEN *********/
function gameplayScreen() {
  //createbackground
  image(bg, 0, 0,winWidth,winHeight);
  //image(bg, 0, height / 200, bg.width / 6, bg.height / 6);

  fill(255);
  textAlign(CENTER);
  textSize(20);
  text('Current Score', width / 2, 20);
  textSize(50);
  text(score,  width / 2, 80);
  

  if (score > highScore || !highScore) {
    highScore = score;
  }
  
  //microbit functions

microBit.setButtonACallback(function() {
    console.log("buttonA pressed"); {
      
       var bullet = createSprite(ship.position.x, ship.position.y);
      bullet.addImage(bulletImage);
      bullet.setSpeed(15, ship.rotation);
      bullet.rotation = ship.rotation
      bullet.life = 50;
      bullets.add(bullet);
     bulletSound.play();}
    });
  
 

  //gameplay functions


  
  for (var i = 0; i < allSprites.length; i++) {
    var s = allSprites[i];
    if (s.position.x < -MARGIN) s.position.x = width + MARGIN;
    if (s.position.x > width + MARGIN) s.position.x = -MARGIN;
    if (s.position.y < -MARGIN) s.position.y = height + MARGIN;
    if (s.position.y > height + MARGIN) s.position.y = -MARGIN;
  }
  let rad = atan2(ship.velocity.y, ship.velocity.x)
  let deg = degrees(rad);

  let accX = microBit.getAccelerometer().x;
  let accY = microBit.getAccelerometer().y;
  let accZ = microBit.getAccelerometer().z;

  ship.velocity.x = accX /200

  ship.velocity.y = accY / 200

  ship.rotation = deg


  ship.overlap(itemDualGun, setDualGunShip)
  ship.overlap(itemLaser, setLaserShip)
  ship.overlap(itemCanon, setCanonShip)

  drawSprites();
  asteroids.collide(bullets, asteroidHit);
  ship.collide(asteroids, heroHit);

}


/********* GAME OVER *********/

function gameOverScreen() {
  

  image(EndScene, 0,0, winWidth, winHeight);
  textSize(24)
  fill(255)
  textAlign(CENTER);
  textSize(50);
   text('Your Score is '+ score,width / 2,height / 2);
    if(highScore){
      textSize(24)
  fill(255);
	  text("Highscore: " + highScore, width / 2, height/2.2);
  }
}

/********* INPUTS *********/
//microBit.setButtonBCallback(function() {
function buttonBPressed() { 
if (gameScreen == 0) {
    preGame();
  } else if (gameScreen == 1) {
    startGame();
  } else if (gameScreen == 3) {
    restart();
  }
}

/********* Game Settings *********/
function preGame() {
  gameScreen = 1;
}

function startGame() {
  gameScreen = 2;
}

function gameOver() {
  gameScreen = 3;

}

  /********* OTHER FUNCTIONS *********/
function weaponDualGun(x, y, speed) {
  var b = createSprite(x, y);
  var img = loadImage('Dual Gun Item.png');
  b.addImage(img);
  b.setSpeed(speed, random(360));
  b.rotationSpeed = 0.5;
  //a.debug = true;

  b.mass = 2 + b.scale;
  b.setCollider('circle', 0, 0, 20);
  itemDualGun.add(b);
  return b;
}

function weaponLaser(x, y, speed) {
  var c = createSprite(x, y);
  var img = loadImage('Laser Item.png');
  c.addImage(img);
  c.setSpeed(speed, random(360));
  c.rotationSpeed = 0.5;
  //a.debug = true;

  c.mass = 2 + c.scale;
  c.setCollider('circle', 0, 0, 20);
  itemLaser.add(c);
  return c;
}

function weaponCanon(x, y, speed) {
  var d = createSprite(x, y);
  var img = loadImage('Canon Item.png');
  d.addImage(img);
  d.setSpeed(speed, random(360));
  d.rotationSpeed = 0.5;
  //a.debug = true;

  d.mass = 2 + d.scale;
  d.setCollider('circle', 0, 0, 20);
  itemCanon.add(d);
  return d;
}
// if (gameScreen = 2) {
// setInterval(itemsSpawn, 12000)
// }
function itemsSpawn() {
  for (var i = 0; i < 1; i++) {
    var ang = random(360);
    var px = width / 2 + 1000 * cos(radians(ang));
    var py = height / 2 + 1000 * sin(radians(ang));
    let item = [weaponDualGun, weaponLaser, weaponCanon];
    let weaponItem = random(item);
    weaponItem(px, py, 1);
  }
}


function createAsteroid(x, y, speed) {
  var a = createSprite(x, y);
  let numbers = ['Germ 1.png', 'Germ 2.png', 'Germ 3.png', 'Boss.png', 'Mini Germ 1.png', 'Mini Germ 2.png'];
  let number = random(numbers);
  var img = loadImage(number);
  a.addImage(img);
  a.setSpeed(speed, random(360));
  //a.rotationSpeed = 0.5;
  //a.debug = true;

  a.mass = 2 + a.scale;
  a.setDefaultCollider();
  asteroids.add(a);
  return a;

}


//For enemy spawn testing

   if (score >= 1000 && score <= 5000) {
    setInterval(enemySpawnMedium, 5000)
  } else if (score >= 5000 && score <= 10000) {
    setInterval(enemySpawnHard, 3000)
  } else if (score >= 10000 && score <= 20000) {
    setInterval(enemySpawnHard, 2500)
  } else if (score >= 20000 ) {
    setInterval(enemySpawnHard, 2000)
  }

function enemySpawnEasy() {

  for (var i = 0; i < 1; i++) {
    var ang = random(360);
    var px = width / 2 + 1000 * cos(radians(ang));
    var py = height / 2 + 1000 * sin(radians(ang));
    createAsteroid( px, py, 1);

  }
}

function enemySpawnMedium() {

  for (var i = 0; i < 1; i++) {
    var ang = random(360);
    var px = width / 2 + 1000 * cos(radians(ang));
    var py = height / 2 + 1000 * sin(radians(ang));
    createAsteroid( px, py, 2);

  }
}

function enemySpawnHard() {

  for (var i = 0; i < 1; i++) {
    var ang = random(360);
    var px = width / 2 + 1000 * cos(radians(ang));
    var py = height / 2 + 1000 * sin(radians(ang));
    createAsteroid( px, py, 3);

  }
}


function createShip() {

  basicShip()
  ship = createSprite(width / 2, height / 2);
  //ship.maxSpeed = 6;
  //ship.friction = 0.99;
  ship.setCollider('circle', 0, 0, 50)
  //ship.debug = true
  ship.addImage('normal', basicShipImg);
  ship.addImage('canon', canonShipImg);
  ship.addImage('laser', laserShipImg);
  ship.addImage('dual gun', dualGunShipImg);
}

function loadAssets() {
  basicShipImg = loadImage('Hero_1.png')
  laserShipImg = loadImage('Hero w Laser.png')
  dualGunShipImg = loadImage('Hero w Dual Gun.png')
  canonShipImg = loadImage('Hero w Canon.png')
}

function heroHit(ship, astero) {
    ship.remove();
    asteroids.removeSprites();
    itemDualGun.removeSprites();
    itemLaser.removeSprites();
    itemCanon.removeSprites();
    gameOver();

  }

function asteroidHit(asteroid, bullet) {

    if (score < 1000) {
      for (var i = 0; i < 1; i++) {
        var ang = random(360);
        var px = width / 2 + 1000 * cos(radians(ang));
        var py = height / 2 + 1000 * sin(radians(ang));
        createAsteroid( px, py, 2);
        score += 100;
      }
    } else if (score >= 1000 && score <= 5000) {

      for (var i = 0; i < 1; i++) {
        var ang = random(360);
        var px = width / 2 + 1000 * cos(radians(ang));
        var py = height / 2 + 1000 * sin(radians(ang));
        createAsteroid( px, py, 2);
        score += 200;
      }
    } else if (score >= 5000 && score <= 10000) {

      for (var i = 0; i < 1; i++) {
        var ang = random(360);
        var px = width / 2 + 1000 * cos(radians(ang));
        var py = height / 2 + 1000 * sin(radians(ang))
        createAsteroid( px, py, 3);
        score += 300;
      }}
      else if (score >= 10000 && score <= 20000) {

      for (var i = 0; i < 1; i++) {
        var ang = random(360);
        var px = width / 2 + 1000 * cos(radians(ang));
        var py = height / 2 + 1000 * sin(radians(ang));
        createAsteroid( px, py, 4);
        score += 400;
      }}
        else if (score >= 20000) {

      for (var i = 0; i < 1; i++) {
        var ang = random(360);
        var px = width / 2 + 1000 * cos(radians(ang));
        var py = height / 2 + 1000 * sin(radians(ang));
        createAsteroid( px, py, 5);
        score += 500;
      }
   }



    bullet.remove();
    asteroid.remove();

  }

/********* RESTART *********/
function restart() {
  score = 0;
  gameScreen = 0;
  setup();
  draw();

}