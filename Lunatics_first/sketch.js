let p1_on_cannon = false;
let p2_on_cannon = false;
let rabbit_latch = 0;
let smile_latch = 0;
let rabbit_cannon;
let smile_cannon;
let startButton;
let gameStart = false;
let restartGame = true;
var microBit1, microBit2;
let bossfight;
let MAX_HEALTH = 100
let bosshp = MAX_HEALTH;
let over = false;
let button1, button2;
let bg;
var THANOS, rabbit_nonAni, smile_nonAni, carrot;
var thanos_hit, rabbit_attack, smile_attack;
let carrots;
let carrot_thanos_last = 0
let win = false
let final_score = 0
let thanos_score

// to make last stage harder increase this value. default 1. 
let thanos_hp_regen = 1.27

// comment out to kill thanos
// thanos_hp_regen = -555






function searchDeviceA(){
  microBit1.searchDevice();
}

function searchDeviceB(){
   microBit2.searchDevice();
}

function preload(){
  smile_attack = loadAnimation('smile_attack_1.png', 'smile_attack_2.png', 'smile_attack_3.png');
  rabbit_attack = loadAnimation('rabbit_attack_1.png', 'rabbit_attack_2.png', 'rabbit_attack_3.png');
  thanos_hit = loadAnimation('thanos_1.png', 'thanos_hit_1.png');
  explosion_animation = loadAnimation('explosion_1.png', 'explosion_2.png', 'explosion_3.png', 'explosion_4.png' )
  bg = loadImage('bg_home_1.png');
  number = loadFont('number.ttf')
  header = loadFont('header.ttf')
  bgMusic = loadSound('The Avengers.mp3');
  buttonMusic = loadSound('button.mp3')
  shootMusic = loadSound('gun.mp3')
  egMusic = loadSound('egmusic.mp3')
  thanosQuote = loadSound('thanosquote.mp3')
  thanosQuote.setVolume(1);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  microBit1=new uBit();
  microBit2=new uBit();

  rabbit_nonAni = createSprite(width/2-400, height*0.4);
  rabbit_nonAni.addImage(loadImage('rabbit_attack_1.png'));
  rabbit_nonAni.visible = false;

  smile_nonAni = createSprite(width/2-200, height*0.5);
  smile_nonAni.addImage(loadImage('smile_attack_1.png'));
  smile_nonAni.visible = false;
  
  THANOS = createSprite(width/2, height/2);
  THANOS.addImage(loadImage('thanos_1.png'));
  THANOS.visible = false;
  // THANOS.debug = true;
  THANOS.setCollider('rectangle', 620, 0, 500, 1000);
  
  button1 = createImg('rabbit_button.png');
  button1.position(width*0.125, height*0.57);
  button1.mousePressed(searchDeviceA);
  
  button2 = createImg('smile_button.png');
  button2.position(width*0.778, height*0.57);
  button2.mousePressed(searchDeviceB); // attach button listener
  
  

  
  bgMusic.setVolume(0.1);
  bgMusic.play();
  bgMusic.setLoop(true);
  
  egMusic.setVolume(0.1);
  // egMusic.setLoop(true);
  
  enemySetup();
  SetupFloorPlan();
  
  carrots = new Group();
  
}

function mouseClicked() {
  //console.log("start")
  buttonMusic.setVolume(0.3);
  buttonMusic.play();
  
  if(microBit1.connected && microBit2.connected){
    if(gameStart == false && restartGame == true){
      bg = loadImage('bg.png');
      setupTime();
      gameStart = true;
      restartGame = false;
      button1.hide();
      button2.hide();
    }
     if (over == true){
      //TODO idk whats this
      gameEnd()
    }
  }
  
}

function buttonApressed(){
  if(rabbit_latch == 1 || smile_latch == 1){
    if(microBit1.getButtonA || microBit2.getButtonA){
      shootMusic.setVolume(0.3);
      shootMusic.play();
    }
  }
}

function draw() {

  background(bg)
  if(gameStart == false && restartGame == true){
    updateMBConnect()
  }

  if(gameStart){
    if (!bgMusic.isPlaying()) {
      bgMusic.play();
    }
    startGame();
  } 
  else if(bossfight){
    if (bgMusic.isPlaying()) {
      bgMusic.stop();
    }
    if (!egMusic.isPlaying()){
      egMusic.play();
    }
    finalBattle()
  }
  else if(over && win){
    congrats()
  }
  else if(over && !win){
    gameover()
  }

}

function startGame(){
  if(microBit1.connected){
       
      //Player 1 on cannon
      if(microBit1.getButtonB()){
        if (rabbit_latch == 0){
          if((player1.overlap(gun_seat[0], seatEntered) && modAngle(p1_cannon.rotation) == 270) || (player1.overlap(gun_seat[1], seatEntered) && modAngle(p1_cannon.rotation) == 0) || (player1.overlap(gun_seat[2], seatEntered) && modAngle(p1_cannon.rotation) == 180) || (player1.overlap(gun_seat[3], seatEntered) && modAngle(p1_cannon.rotation) == 90)){
          player1.visible = false;
          p1_on_cannon = true;
          rabbit_latch = 1;
          rabbit_cannon = p1_cannon
        } else if ((player1.overlap(gun_seat[0], seatEntered) && modAngle(p2_cannon.rotation) == 270) || (player1.overlap(gun_seat[1], seatEntered) && modAngle(p2_cannon.rotation) == 0) || (player1.overlap(gun_seat[2], seatEntered) && modAngle(p2_cannon.rotation) == 180) || (player1.overlap(gun_seat[3], seatEntered) && modAngle(p2_cannon.rotation) == 90)){
          player1.visible = false;
          p1_on_cannon = true;
          rabbit_latch = 1;
          rabbit_cannon = p2_cannon
        }
          
        } else if(rabbit_latch ==1){
            if(modAngle(rabbit_cannon.rotation) < 20 || modAngle(rabbit_cannon.rotation) > 340){
            rabbit_cannon.rotation = 0
            player1.visible = true;
            player1.position.x = gun_seat[1].position.x
            player1.position.y = gun_seat[1].position.y
            p1_on_cannon = false;
            rabbit_latch = 0;
          } else if(modAngle(rabbit_cannon.rotation) < 110 && modAngle(rabbit_cannon.rotation) > 70){
            rabbit_cannon.rotation = 90
            player1.visible = true;
            player1.position.x = gun_seat[3].position.x
            player1.position.y = gun_seat[3].position.y
            p1_on_cannon = false;
            rabbit_latch = 0;
          } else if(modAngle(rabbit_cannon.rotation) < 200 && modAngle(rabbit_cannon.rotation) > 160){
            rabbit_cannon.rotation = 180
            player1.visible = true;
            player1.position.x = gun_seat[2].position.x
            player1.position.y = gun_seat[2].position.y
            p1_on_cannon = false;
            rabbit_latch = 0;
          }else if(modAngle(rabbit_cannon.rotation) < 290 && modAngle(rabbit_cannon.rotation) > 250){
            rabbit_cannon.rotation = 270
            player1.visible = true;
            player1.position.x = gun_seat[0].position.x
            player1.position.y = gun_seat[0].position.y
            p1_on_cannon = false;
            rabbit_latch = 0;
          }
        }
      }
        
        
      //using x-axis of accelerometer to move LEFT or RIGHT 
      //using y-axis of accelerometer to move UP or DOWN
      MB1AX = microBit1.getAccelerometer().x
      MB1AY = microBit1.getAccelerometer().y
        
      // add movement velocity towards LEFT
      if(MB1AX < -200){
        if (rabbit_latch == 0){
          player1.velocity.x = -5;
        } else {
                    
          // rotateCannon(rabbit_cannon, -2)
          rotateCannon(rabbit_cannon, -min(0.05*((MB1AX/100)**2),4))
        }
      }
      // add movement velocity towards RIGHT
      else if(MB1AX > 200){
        if (rabbit_latch == 0){
          player1.velocity.x = 5;
        } else {
          
          // rotateCannon(rabbit_cannon, 2)
          rotateCannon(rabbit_cannon, min(0.05*((MB1AX/100)**2),4))
        }
      } 
      else{
        if (rabbit_latch == 0){
          player1.velocity.x = 0;
        }
      }
      
      // add movement velocity towards UP
      if(MB1AY > 200){
        if (rabbit_latch == 0){
          player1.velocity.y = 5;
        }
      }
      // add movement velocity towards DOWN
      else if(MB1AY < -200){
        if (rabbit_latch == 0){
          player1.velocity.y = -5;
        }
      }
      else{
        if (rabbit_latch == 0){
          player1.velocity.y = 0;
        }
      }
        
    //   if(!keyDown(RIGHT_ARROW) && !(keyDown(LEFT_ARROW)))
    //     player1.velocity.x = 0;
      
    //   if(!keyDown(UP_ARROW) && !(keyDown(DOWN_ARROW)))
    //     player1.velocity.y = 0;
        
      if((keyWentDown('x')||microBit1.getButtonA()) && rabbit_latch == 1){
        p1Shoot();
      }
    }
  
    
    if(microBit2.connected){
    
      //Player 2 on cannon
      if(microBit2.getButtonB()){
        if (smile_latch == 0){
          if((player2.overlap(gun_seat[0], seatEntered) && modAngle(p1_cannon.rotation) == 270) || (player2.overlap(gun_seat[1], seatEntered) && modAngle(p1_cannon.rotation) == 0) || (player2.overlap(gun_seat[2], seatEntered) && modAngle(p1_cannon.rotation) == 180) || (player2.overlap(gun_seat[3], seatEntered) && modAngle(p1_cannon.rotation) == 90)){
            player2.visible = false;
            p2_on_cannon = true;
            smile_latch = 1;
            smile_cannon = p1_cannon
        } else if ((player2.overlap(gun_seat[0], seatEntered) && modAngle(p2_cannon.rotation) == 270) || (player2.overlap(gun_seat[1], seatEntered) && modAngle(p2_cannon.rotation) == 0) || (player2.overlap(gun_seat[2], seatEntered) && modAngle(p2_cannon.rotation) == 180) || (player2.overlap(gun_seat[3], seatEntered) && modAngle(p2_cannon.rotation) == 90)){
            player2.visible = false;
            p2_on_cannon = true;
            smile_latch = 1;
            smile_cannon = p2_cannon
        }
          
        } else if(smile_latch ==1){
          if(modAngle(smile_cannon.rotation) < 20 || modAngle(smile_cannon.rotation) > 340){
            smile_cannon.rotation = 0
            player2.visible = true;
            player2.position.x = gun_seat[1].position.x
            player2.position.y = gun_seat[1].position.y
            p2_on_cannon = false;
            smile_latch = 0;
          } else if(modAngle(smile_cannon.rotation) < 110 && modAngle(smile_cannon.rotation) > 70){
            smile_cannon.rotation = 90
            player2.visible = true;
            player2.position.x = gun_seat[3].position.x
            player2.position.y = gun_seat[3].position.y
            p2_on_cannon = false;
            smile_latch = 0;
          } else if(modAngle(smile_cannon.rotation) < 200 && modAngle(smile_cannon.rotation) > 160){
            smile_cannon.rotation = 180
            player2.visible = true;
            player2.position.x = gun_seat[2].position.x
            player2.position.y = gun_seat[2].position.y
            p2_on_cannon = false;
            smile_latch = 0;
          }else if(modAngle(smile_cannon.rotation) < 290 && modAngle(smile_cannon.rotation) > 250){
            smile_cannon.rotation = 270
            player2.visible = true;
            player2.position.x = gun_seat[0].position.x
            player2.position.y = gun_seat[0].position.y
            p2_on_cannon = false;
            smile_latch = 0;
          }
        }    
      }
    
    
      MB2AX = microBit2.getAccelerometer().x
      MB2AY = microBit2.getAccelerometer().y
        
      if(MB2AX < -200){
        if (smile_latch == 0){
          player2.velocity.x = -5; // add movement velocity towards LEFT
        } else {
          rotateCannon(smile_cannon, -min(0.075*((MB2AX/100)**2),4))
          // rotateCannon(smile_cannon, -4)
        }
      } else if(MB2AX > 200){
        if (smile_latch == 0){
          player2.velocity.x = 5; // add movement velocity towards RIGHT
        } else {
          rotateCannon(smile_cannon, min(0.075*((MB2AX/100)**2),4))
          // rotateCannon(smile_cannon, 4)
        }
      } else {
        if (smile_latch == 0){
          player2.velocity.x = 0;
        }
      }
      
      if(MB2AY < -200){
        if (smile_latch == 0){
          player2.velocity.y = -5; // add movement velocity towards DOWN
      }}
      else if(MB2AY > 200){
        if (smile_latch == 0){
          player2.velocity.y = 5; // add movement velocity towards UP
      }}
      else {
        if (smile_latch == 0){
          player2.velocity.y = 0;
        }
      }
        
      if((keyWentDown('y')||microBit2.getButtonA()) && smile_latch == 1){
        p2shoot()
      }
    }
        
    
    playerOnMap();
    enemyUpdate();
    drawSprites();
  }


function modAngle(angle){
  angle = angle%360
  while (angle<0){
    angle =(angle+360)%360
  }
  return angle
}


function gameEnd(){
  over = false

  restartGame = true;
  button1.show();
  button2.show();
}

function finalBattle(){
  //write what to do when game end
  // textSize(32);
  // fill(255)
  // text(bosshp, 10, 30)
  
  rabbit_nonAni.visible = true;
  smile_nonAni.visible = true;
  THANOS.visible = true;
  bullet_delay = 100
  
  time_now1 = millis()
  if(microBit1.getAccelerometer().y > 1000 && (time_now1 - p1_bullet_last)>bullet_delay){
    // animation(rabbit_attack, width/2-400, height*0.4);
    // rabbit_nonAni.visible = false;
    carrot = createSprite(width/2-400, height*0.4);
    carrot.addImage(loadImage('carrot.png'));
    carrot.attractionPoint(30, width*0.8, height*0.3)
    // carrot.debug = true
    carrot.setCollider('rectangle', 0,0, 100, 50)
    // carrot.overlap(THANOS, bossEatBullet)
    carrot.life = 100
    carrots.add(carrot);
    p1_bullet_last = time_now1
  } else {
    // rabbit_nonAni.visible = true;
  }
  

  
  // time_now2 = millis()
  if(microBit2.getAccelerometer().y > 1000 && (time_now1 - p2_bullet_last)>bullet_delay){
    // animation(smile_attack, width/2-200, height*0.5);
    // smile_nonAni.visible = false
    carrot = createSprite(width/2-60, height*0.53);
    carrot.addImage(loadImage('carrot.png'));
    carrot.attractionPoint(30, width*0.8, height*0.43)
    // carrot.debug = true
    carrot.setCollider('rectangle', 0,0, 100, 50)
    // carrot.overlap(THANOS, bossEatBullet)
    carrot.life = 100
    carrots.add(carrot);
    p2_bullet_last = time_now1
  } else {
    // smile_nonAni.visible = true
  }
  //animation(thanos_hit, width/2+300, height/2);
  
  //animation(smile_attack, width/2-200, height*0.5);
  
  if(bosshp <0){
    thanos_score = ceil((millis() - thanos_start_time)/1000)
    bossfight = false
    over = true
    win = true
    
  }
  
  drawSprite(THANOS);
  drawSprite(rabbit_nonAni);
  drawSprite(smile_nonAni);
  // drawSprite(carrot);
  drawSprites(carrots);
  
  carrots.overlap(THANOS, carrotThanos);
  
  if((time_now1 - p1_bullet_last)<100){
    animation(rabbit_attack, width/2-400, height*0.4);
    
  }
  
  if((time_now1 - p2_bullet_last)<100){
    animation(smile_attack, width/2-200, height*0.5);
  }
   
  if((time_now1 - carrot_thanos_last)<800){
    animation(thanos_hit, width/2, height/2);
  }
  
  drawhp()
  
}

function carrotThanos(carrot, thanos) {
  carrot.remove()
  carrot_thanos_last = millis()
  bosshp -= 1
}

function bossEatBullet(){
  animation(thanos_hit, width/2+300, height/2);
  console.log(1)
  bosshp -= 1
}

function drawhp(){
  if (bosshp < 25) bosshp += 0.05*thanos_hp_regen;
  if (bosshp < MAX_HEALTH) bosshp += 0.05*thanos_hp_regen;
    // Change color
  if (bosshp < 25)
  {
    fill(255, 0, 0);
  }  
  else if (bosshp < 50)
  {
    fill(255, 200, 0);
  }
  else
  {
    fill(0, 255, 0);
  }
  
  // Draw bar
  noStroke();
  rectWidth = 500;
  // Get fraction 0->1 and multiply it by width of bar
  drawWidth = (bosshp / MAX_HEALTH) * rectWidth;
  rect(width/2-rectWidth/2, 50, drawWidth, 50);
  
  // Outline
  stroke(0);
  noFill();
  rect(width/2-rectWidth/2, 50, rectWidth, 50);
}

function congrats(){
  
  
  bg = loadImage('Asset 82.png')
  push();
  fill(255)
  textAlign(CENTER);
  textFont(header, 50);
  text("TOTAL SCORE", width/2, height*0.57);
  pop();
  
  push();
  fill(255)
  textAlign(CENTER);
  textFont(number, 100);
  text(final_score, width/2, height*0.68);
  pop();
  
  push();
  fill(255)
  textAlign(CENTER);
  textFont(header, 30);
  text("TIME TAKEN TO ELIMINATE THANOS", width/2, height*0.74);
  pop();
  
  push();
  fill(255)
  textAlign(CENTER);
  textFont(number, 50);
  text(thanos_score, width/2, height*0.8);
  pop();
  
  
  // text("YOU WIN", 10, 30)
  // text(final_score, 10, 60)
  // text(thanos_score, 10, 90)
  
}

function gameover(){
  bg = loadImage('Asset 82.png')
  
  push();
  fill(255)
  textAlign(CENTER);
  textFont(header, 50);
  text("TOTAL SCORE", width/2, height*0.57);
  pop();
  
  push();
  fill(255)
  textAlign(CENTER);
  textFont(number, 100);
  text(final_score, width/2, height*0.68);
  pop();

  
}

function setupFinal(){
    thanos_start_time = millis()
    gameStart = false;
    bossfight = true;
    bg = loadImage('bg_finalbattle.png')
    thanosQuote.play()
}

function updateMBConnect(){
  messageA = "Waiting"
  messageB = "Waiting"
  if(microBit1.connected) messageA = "Ready!"
  if (microBit2.connected) messageB = "Ready!"
  
  push();
  fill(255)
  textAlign(CENTER);
  textFont(header, 30);
  text(messageA, 350, height*0.67);
  pop();
  
  push();
  fill(255)
  textAlign(CENTER);
  textFont(header, 30);
  text(messageB, width - 310, height*0.67);
  pop();
}