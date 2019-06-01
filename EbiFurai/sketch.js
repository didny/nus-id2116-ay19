let beginX = 300.0; // Initial x-coordinate
let beginY = 500.0; // Initial y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 4; // Determines the curve
let step = 0.005; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)

var butter;
var microBit;
let currentScene = "title";

var gridNum = (1, 25);
var gridSiz = 20
var posX = 175;
var posY = 495;
var timerr;
var melt;
var coverpage;
var gameFont;
var lose;


  function preload(){
    soundFormats('mp3');
    ebi = loadSound('ebisong.mp3')
    sizzling = loadSound('sizzlee.mp3');
  }


let timer = 30
let winningScene = {
  

  update: function() {

  },
  draw: function() { // win
    background(255,255,255,0);
    butter.velocity.x = 0;
    textSize(30);
    textAlign(CENTER)
    text("YOU WIN", width / 2, height - 100);
    butter.changeImage("win");
    //token.changeImage("token");
    drawSprites();

    coverpage.visible = false;
    newbutter.visible = false;
    
     win.visible = true;
  },

  
 // nextScene: function(){ 
   // clear();
  //  currentScene = "title"
 // },
  
  
  buttonBPressed: function() {
    currentScene = "title"
  }
}

let losingScene = {

  update: function() {


  },

  draw: function() {
    background(255,255,255,0);
    textSize(30);
    textAlign(CENTER)
    text("YOU LOSE", width / 2, height - 100);
    butter.changeImage("lose");
    // bill.changeImage("bill");
    drawSprites();

    
    coverpage.visible = false;
    newbutter.visible = false;
    lose.visible = true;
    win.visible = false;
  },

  nextScene: function() {
    currentScene = "end"
  },

  buttonAPressed: function() {
    currentScene = "title"
  },

  buttonBPressed: function() {
    currentScene = "title"

  }
}


let mainScene = { //play

  update: function() {
   //print(board.length)

  },
  draw: function() { //play
    background(255, 255, 255, 0);
    textSize(30);
    textAlign(CENTER)
    text("MAIN", width / 2, height - 100);
    //butter.changeImage("backgroundd");
  //  sizzling.setVolume(0.2);
  // sizzling.loop();
 //sizzling.play();
  //  ebi.pause();
    


    coverpage.visible = false;
    coverpage.addImage(loadImage('plsnewbg.png'));
    gamebg.visible = true;
    newbutter.visible = true;
   // arrowScene.visible = false;
    titleScene.visible = false;
    timer.visible = true
    lose.visible = false
     win.visible = false;

    fill(65, 2);
    rect(0, 0, width, height);

    if (microBit.connected) {
      fill('no fill');
      // text("GO!", 10, 20);   //connection status
      let accX = microBit.getAccelerometer().x;
      let accY = microBit.getAccelerometer().y;

      map(microBit.getAccelerometer().x, -400, 850, 360, 360);

  
      if (accX < -180) {
        newbutter.velocity.x = -7; // butter moves left
        //newbutter.changeImage("left");
      } else if (accX > 180) {
        newbutter.velocity.x = 7; // butter moves right
        //newbutter.changeImage("right");
      } else {
        newbutter.velocity.x = 0; //butter remains stationary
      }

      if (accY < -180) {
        newbutter.velocity.y = -7; // butter moves up
        //newbutter.changeImage("back");
      } else if (accY > 180) {
        newbutter.velocity.y = 7; // butter moves down
        //newbutter.changeImage("front");
      } else {
        newbutter.velocity.y = 0; //butter remains stationary
      }
      
      if (currentScene === "main") {
        {
    if (frameCount % 50 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer--;
    }
        }
    if (timer == 0) {
       currentScene = "badend";
       print("move to losing scene");
    }
         
      if (board.length == 0) {
        currentScene = "goodend";
      
      }
    }           
    }

    drawSprites();
    
  fill(86, 86, 86);  
  textAlign(CENTER, CENTER);
  textSize(80);
  textFont(gameFont);
  text(timer, width/2 , height/10);
  },

  /* nextScene:function(){
  	currentScene = "end"
  
  },*/
 // buttonAPressed: function() {
   // currentScene = "goodend"
  //},
  //buttonBPressed:function(){
  //currentScene = "badend"

  //}
}

//Define scenes
let scenes = {
  "title": titleScene,
 // "arrow": arrowScene,
  "main": mainScene, //play
  "goodend": winningScene,
  "badend": losingScene
}

function sizzling(){
  sizzling.setVolume(0.7);
  sizzling.play();
}
  

function searchDevice() {
  microBit.searchDevice();
}


function setup() {
  createCanvas(834, 1112);
  noFill();

  
  gameFont = loadFont('Multicolore.otf');
  
  microBit = new uBit();

  
  coverpage = createSprite(417,556);
  coverpage.addAnimation('normal','plsnewbg-1.png','plsnewbg2-1.png');
  coverpage.visible = true;

  gamebg = createSprite (417,556);
  gamebg.addAnimation('normal','game2-01.png','game1-01.png');
  
  
  win = createSprite(417,556);
  win.addImage(loadImage('uwin.png'));
  
  
  lose = createSprite(417,556)
  lose.addImage(loadImage('ulose.png'));
  lose.visible = true
  
  butter = createSprite(417, 556,'nofill');
 //butter.addAnimation("coverpage", loadImage('finalcover.jpg'));
  //butter.addImage("backgroundd", loadImage('gamebg.png'));
  //butter.addImage("win", loadImage('deadebi.png'));
  //butter.addImage("lose", loadImage('youlose-1.jpg'));
  //butter.addImage("arrow", loadImage('arrowscene.jpg'));

  //
  
  newbutter = createSprite(415, 700)
  newbutter.addImage(loadImage('butterOK.png'));
  newbutter.debug = false
  //create a sprite //butter

  recttop = createSprite(0, 140, 'no fill');
  recttop.setCollider('rectangle', 0, 0, 1800, 585);
  recttop.debug = false;

  rectleft = createSprite(-100, 0, 'no fill');
  rectleft.setCollider('rectangle', 168, 0, 220, 2300);
  rectleft.debug = false;

  rectright = createSprite(392, 0, 'no fill');
  rectright.setCollider('rectangle', 370, 0, 220, 2300);
  rectright.debug = false;

  rectbottom = createSprite(0, 845, 'no fill');
  rectbottom.setCollider('rectangle', 0, 265, 1800, 200);
  rectbottom.debug = false;

 
  //microbit

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

board = new Group()

    for(let r = 0; r < gridNum; r++){
  	for(let c = 0; c < gridNum; c++){
      var a = createSprite(r*gridSiz+posX,c*gridSiz+posY,gridSiz,gridSiz);
      a.shapeColor = color(255,255,255,0);

      
      board.add(a)
 
       // 
      
  	}
  }

}

function draw() {
  scenes[currentScene].update();
  scenes[currentScene].draw();
  //drawSprites();

  newbutter.collide(recttop);
  newbutter.collide(rectleft);
  newbutter.collide(rectright);
  newbutter.collide(rectbottom);
  
  newbutter.overlap(board,melt);  

  //butter.depth=20
  newbutter.depth = 30;

  
  // board.depth = 25
  recttop.depth = 11;
  rectleft.depth = 15;
  rectright.depth = 15;
  rectbottom.depth = 15;

}
function mousePressed() {
}

function keyPressed(){

}

//the first parameter will be the sprite (individual or from a group)
//calling the function
//the second parameter will be the sprite (individual or from a group)
//against which the overlap, collide, bounce, or displace is checked
function melt(collector, collected)
{
  //collector is another name for asterisk
  //show the animation
  //collector.changeAnimation('stretch');
  //collector.animation.rewind();
  //collected is the sprite in the group collectibles that triggered
  //the event
  collected.remove();
  
  //print(board.length)
}