// Yuta Run State Transition 
// TITLE -> INSTRUCTIONS -> ARE YOU READY -> MAIN -> END -> TITLE


var microBit;

var yutajump;
var yutaslide;

var collect;
var bill;
var token;
var GRAVITY = 1.5;
var score = 0;

var gameFont;

var bgm;
var tokenSound;
var winSound;
var losingSound;

//title
var yutarun;
var burst;

//instruction
var instruct;
var instructgif;

//ruready
var ready;

//main
var obstacles;
var collectibles;
var yuta;
var ground;

//goodend
var yutaWin;
var fuji;
var yata;

//badend
var yutaLose;
var grave;
var yabai;

//BGM & SOUND EFFECTS;
function preload() {
  soundFormats('mp3');
  bgm = loadSound('Makudonarudo.mp3');
  tokenSound = loadSound('Coinsound.mp3');
  winSound = loadSound('winSound.mp3');
  losingSound = loadSound('dead.mp3');
  YU = loadSound('YU.mp3');
  TA = loadSound('TA.mp3');
}

let currentScene = "title";
let fr = 100;
let instructionfr = 40;
let readyfr = 40;

let winningScene = {
  update: function() {},

  draw: function() {
    background('#fac8c9');
    textSize(24);
    textAlign(LEFT)
    textFont(gameFont);
    text("PRESS ANY BUTTON TO REPLAY", 200, height - 120);

    //title
    yutarun.visible = false;
    burst.visible = false;

    //instruction
    instruct.visible = false;
    instructgif.visible = false;

    //ruready
    ready.visible = false;

    collectibles.removeSprites();
    obstacles.removeSprites();

    //main
    collectibles.removeSprites();
    obstacles.removeSprites();
    obstacles.visible = false;
    collectibles.visible = false;
    yuta.visible = false;
    ground.visible = true;

    //goodend
    yutaWin.visible = true;
    fuji.visible = true;
    yata.visible = true;

    //badend
    yutaLose.visible = false;
    grave.visible = false;
    yabai.visible = false;

    drawSprites();
  },


  //proceeding to next scene
  buttonAPressed: function() {
    currentScene = "title"
  },
  //proceeding to next scene
  buttonBPressed: function() {
    currentScene = "title"
  }
}

let losingScene = {
  update: function() {},

  draw: function() {
    background('#d4ebf9');
    textSize(24);
    textAlign(LEFT)
    textFont(gameFont);
    text("PRESS ANY BUTTON TO REPLAY", 200, height - 120);

    //title
    yutarun.visible = false;
    burst.visible = false;

    //instruction
    instruct.visible = false;
    instructgif.visible = false;

    //ruready
    ready.visible = false;

    //main
    collectibles.removeSprites();
    obstacles.removeSprites();
    obstacles.visible = false;
    collectibles.visible = false;
    yuta.visible = false;
    ground.visible = true;

    //goodend
    yutaWin.visible = false;
    fuji.visible = false;
    yata.visible = false;

    //badend
    yutaLose.visible = true;
    grave.visible = true;
    yabai.visible = true;

    drawSprites();
  },

  //proceeding to next scene
  buttonAPressed: function() {
    currentScene = "title"
  },
  //proceeding to next scene
  buttonBPressed: function() {
    currentScene = "title"
  }
}

let mainScene = {
  setup: function() {
    print("setting up main scene");
    yuta = createSprite(220, 275, 400, 400);
    yuta.addImage("idle", loadImage('yuta-idle.png'));
    yuta.addAnimation('run', 'yuta-run1.png', 'yuta-run2.png');
    yuta.addImage("jump", loadImage('yuta-jump.png'));
    yuta.addImage("slide", loadImage('yuta-slide.png'));
    yuta.addImage("dead", loadImage('yuta-ghost.png'));
    yuta.velocity.y += GRAVITY;
    yuta.debug = false;

    ground = createSprite(width / 2, 575);
    ground.addImage("ground", loadImage('ground.png'));

    border = new Group()

    recttop = createSprite(0, 140, 'no fill');
    recttop.setCollider('rectangle', 900, -430, 1800, 585);
    recttop.debug = false;
    border.add(recttop);

    rectleft = createSprite(0, 140, 'no fill');
    rectleft.setCollider('rectangle', -900, 150, 1800, 585);
    rectleft.debug = false;
    border.add(rectleft);

    rectright = createSprite(0, 140, 'no fill');
    rectright.setCollider('rectangle', 1975, 150, 1800, 585);
    rectright.debug = false;
    border.add(rectright);

    rectbot = createSprite(0, 140, 'no fill');
    rectbot.setCollider('rectangle', 805, 715, 1800, 585);
    rectbot.debug = false;
    border.add(rectbot);


    //create 2 groups
    obstacles = new Group();
    collectibles = new Group();


    //create collectibles group
    push();
    for (var j = 0; j < 25; j++) {
      //      var token = createSprite(random(10, width / 10) * 20, random(120, height - 85));

      var token = createSprite(random(10, width / 10) * 90, random(50, height - 85));
      token.debug = false;
      token.addAnimation('normal', 'token1.png', 'token2.png');
      token.velocity.x = -3;
      token.setCollider("circle", 0, 0, 30)
      collectibles.add(token);
    }

    setInterval(() => {
      collectibles.toArray().filter(c => {
        return c.position.x < 0
      }).forEach(c => {
        c.position.x = width
        c.position.y = random(0, height)
      })
    }, 500)

    setInterval(() => {
      collectibles.add(token);
    }, 1000)

    pop();


    //create obstacles group
    push();
    for (var i = 0; i < 3; i++)

    {
      var bill = createSprite(random(30, width / 10) * 30, random(215, height - 85));
      bill.addAnimation('bill', 'bill1.png', 'bill2.png');
      bill.debug = false;
      bill.setCollider("rectangle", 0, 0, 65, 65)

      bill.velocity.x = -4;
      bill.setSpeed = (2, random(360));
      obstacles.add(bill);
    }

    setInterval(() => {
      collectibles.toArray().filter(d => {
        return d.position.x < 0
      }).forEach(d => {
        d.position.x = width
        d.position.y = random(0, height)
      })
    }, 500)

    setInterval(() => {
      obstacles.add(bill);
    }, 1000)
    pop();

  },
  update: function() {
    frameRate(fr);
  },

  draw: function() {
    background('#eaf5fd')
    textSize(30);
    textFont(gameFont);
    textAlign(CENTER);

    //title
    yutarun.visible = false;
    burst.visible = false;

    //instruction
    instruct.visible = false;
    instructgif.visible = false;

    //ruready
    ready.visible = false;

    //goodend
    yutaWin.visible = false;
    fuji.visible = false;
    yata.visible = false;

    //badend
    yutaLose.visible = false;
    grave.visible = false;
    yabai.visible = false;

    if (microBit.connected) {
      fill(255);
      let accX = microBit.getAccelerometer().x;

      map(microBit.getAccelerometer().x, -400, 850, 360, 360);

      if (accX < -180) {
        yuta.velocity.x = -11;
      } else if (accX > 180) {
        yuta.velocity.x = 11; //
      } else {
        yuta.velocity.x = 0;
      }
    } else {
      fill('black');
      text("disconnected.", 10, 20);
    }

    for (var i = 0; i < collectibles.length; i++) {
      collectibles[i].position.x += collectibles[i].width * 0.01;
      if (collectibles[i].position.x < 0) {
        collectibles[i].position.x = width;
      }
    }

    for (var i = 0; i < obstacles.length; i++) {
      obstacles[i].position.x += obstacles[i].width * 0.01;
      if (obstacles[i].position.x < 0) {
        obstacles[i].position.x = width;
      }
      if (obstacles[i].position.y > height) {
        obstacles[i].position.y = random(0, height);
      }
    }

    if (yutajump > 0) {
      print(yutajump)
      yutajump--;
      yuta.changeImage("jump");

    }

    yuta.collide(border);
    yuta.overlap(obstacles);
    yuta.overlap(collectibles, collect);


    //setting winning score
    if (score < 10) {
      text('score = ', 100, 50);
    } else {
      win();
    }

    if (yuta.overlap(obstacles))
      die();



    if (ground.overlapPixel(yuta.position.x, yuta.position.y + 100) == false)
      yuta.velocity.y += GRAVITY;

    while (ground.overlapPixel(yuta.position.x, yuta.position.y + 100)) {
      yuta.position.y--;
      yuta.velocity.y = 0;
      yuta.changeImage("run");
      yuta.setCollider("rectangle", 0, 0, 123, 205)
    }


    drawSprites();
    fill('black');
    text('score = ', 100, 50);
    text(score, 200, 50);
  },


  // settings to jump
  buttonAPressed: function() {
    yuta.velocity.y = -15;
    yuta.changeImage("jump");
    yutajump = 10;
    YU.setVolume(0.8);
    YU.play();
  },

  // settings to slide
  buttonBPressed: function() {
    yuta.velocity.y = 0;
    yuta.changeImage("slide");
    yuta.setCollider("rectangle", 0, 0, 147, 147)
    TA.setVolume(0.5);
    TA.play();
  },


  win: function() {
    if (score = 10)
      currentScene = "goodend";
  },

  die: function() {
    if (obstacles.overlap(yuta))
      currentScene = "badend";
  },


}


let rureadyScene = {

  update: function() {
    frameRate(readyfr);
  },

  draw: function() {
    background('#ffe3db');
    textFont(gameFont);
    textSize(28);
    textAlign(CENTER);
    text("ONE MORE TIME, LET'S GO!", width / 2, height - 130);

    //title
    yutarun.visible = false;
    burst.visible = false;

    //instruction
    instruct.visible = false;
    instructgif.visible = false;

    //ruready
    ready.visible = true;

    //goodend
    yutaWin.visible = false;
    fuji.visible = false;
    yata.visible = false;

    //badend
    yutaLose.visible = false;
    grave.visible = false;
    yabai.visible = false;




    drawSprites();
  },

  //proceeding to next scene
  buttonAPressed: function() {
    scenes["main"].setup();
    currentScene = "main"
  },
  //proceeding to next scene
  buttonBPressed: function() {
    scenes["main"].setup();
    currentScene = "main"

  }


}

let instructionScene = {

  update: function() {
    frameRate(instructionfr);

  },
  draw: function() {
    background('#fff4db');

    drawSprites();

    textFont(gameFont);
    textSize(36);
    textAlign(CENTER);
    text("GET 10 TOKENS WHILE ", 875, 210);
    text("AVOIDING ALL THE BILLS", 875, 250);
    text("TO BE THE CHAMPION!", 875, 290);
    textSize(22);
    textAlign(LEFT);
    fill('red');
    text("PRESS", 800, 350);
    text("TO JUMP", 890, 350);
    text("PRESS", 800, 390);
    text("TO DUCK", 890, 390);
    textAlign(CENTER);

    text("TILT LEFT TO MOVE BACKWARDS", 875, 430);
    text("TILT RIGHT TO MOVE FORWARD", 875, 470);


    fill('black');
    circle(866, 340, 14)
    circle(866, 380, 14)
    fill('white');
    textAlign(CENTER);
    text("A", 867, 348);
    text("B", 867, 388);
    fill('red');
    textSize(20);
    text("PRESS ANY BUTTON TO BEGIN", width / 2, height - 50);


    //title
    yutarun.visible = false;
    burst.visible = false;

    //instruction
    instruct.visible = true;
    instruct.depth = 20;
    instructgif.visible = true;

    //ruready
    ready.visible = false;

    //goodend
    yutaWin.visible = false;
    fuji.visible = false;
    yata.visible = false;

    //badend
    yutaLose.visible = false;
    grave.visible = false;
    yabai.visible = false;



  },

  //proceeding to next scene
  buttonAPressed: function() {
    currentScene = "ruready"
  },
  //proceeding to next scene
  buttonBPressed: function() {
    currentScene = "ruready"

  }
}


//Define scenes
let scenes = {
  "title": titleScene,
  "instruction": instructionScene,
  "ruready": rureadyScene,
  "main": mainScene,
  "goodend": winningScene,
  "badend": losingScene
}

function searchDevice() {
  microBit.searchDevice();
}

function collect(yuta, collectibles) {
  //collector is another name for yuta
  //show the animation
  yuta.changeAnimation('run');
  //collector.animation.rewind();
  //collected is the sprite in the group collectibles that triggered the event
  collectibles.remove();
  score += 1;
  tokenSound.setVolume(0.03);
  tokenSound.play();
}

function setup() {
  createCanvas(1080, 607.5);
  microBit = new uBit();

  //game fonts;
  gameFont = loadFont('retganon.ttf');

  //Makudonarudo bgm;
  bgm = loadSound('Makudonarudo.mp3', loaded);



  function loaded() {
    bgm.setVolume(0.08);
    bgm.loop();
    bgm.play();
  }

  burst = createSprite(width / 2, height / 2);
  burst.addImage(loadImage('sunburst.png'));

  instruct = createSprite(width / 2, 65);
  instruct.addImage(loadImage('instruction-title.png'));

  yutarun = createSprite(width / 2, height / 2);
  yutarun.addAnimation('yutarun', 'yutarun1.png', 'yutarun2.png');

  yutaLose = createSprite(width * 3 / 4, height / 2);
  yutaLose.addAnimation('yutaLose', 'yutalose1.png', 'yutalose2.png');

  yutaWin = createSprite(width * 5 / 7, height / 2 - 30);
  yutaWin.addAnimation('yutaWin', 'yutawin1.png', 'yutawin2.png');

  fuji = createSprite(width * 5 / 7, height * 4 / 5);
  fuji.addImage(loadImage('mtfuji.png'));

  yata = createSprite(width * 2 / 7, height / 2);
  yata.addImage(loadImage('yata.png'));

  yabai = createSprite(width * 1.65 / 7, height / 2);
  yabai.addImage(loadImage('yabai.png'));

  instructgif = createSprite(390, 320);
  instructgif.addAnimation('instructgif', 'gif/instructgif-1.png', 'gif/instructgif-2.png', 'gif/instructgif-3.png', 'gif/instructgif-4.png', 'gif/instructgif-5.png', 'gif/instructgif-6.png', 'gif/instructgif-7.png', 'gif/instructgif-8.png', 'gif/instructgif-9.png', 'gif/instructgif-10.png', 'gif/instructgif-11.png', 'gif/instructgif-12.png', 'gif/instructgif-13.png', 'gif/instructgif-14.png', 'gif/instructgif-15.png', 'gif/instructgif-16.png', 'gif/instructgif-17.png', 'gif/instructgif-18.png', 'gif/instructgif-19.png', 'gif/instructgif-20.png');

  grave = createSprite(width * 6 / 7, height * 4 / 5);
  grave.addImage(loadImage('grave.png'));

  ready = createSprite(width / 2, height / 2);
  ready.addAnimation('ready', 'ready2.png', 'ready3.png');

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


}


function die() {
  if (obstacles.overlap(yuta))
    currentScene = "badend";
  losingSound.setVolume(0.7);
  losingSound.play();
}

function win() {
  if (score = 10)
    currentScene = "goodend";
  winSound.setVolume(0.4);
  winSound.play();
}


function draw() {
  scenes[currentScene].update();
  scenes[currentScene].draw();



}

//for players to capture screenshots (esp for celebratory moments like the winning scene
// function mousePressed(){
// 	var h = nf(hour(),2,0);
// 	var m = nf(minute(),2,0);
// 	var s = nf(second(),2,0);
// 	save(h+''+m+''+s+".jpg")

// }