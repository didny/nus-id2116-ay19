let start_time, time_elapsed, seconds_elapsed;
let game_time = 100; //default 100
let last_rocket_spawn = 3;
let rocket_delay = 3
let max_rockets = 1
let rocket_speed = 1

function setupTime(){
  start_time = millis()
}

function updateTime(){
  time_elapsed = millis() - start_time
  seconds_elapsed = Math.floor(time_elapsed/1000)
  seconds = game_time-seconds_elapsed
  
  //Display countdown time
  push();
  fill(255)
  textAlign(CENTER);
  textFont(header, 72);
  text("TIME", width/2, height*0.07);
  pop();
  
  push();
  fill(255)
  textAlign(CENTER);
  textFont(number, 100);
  text(seconds, width/2, height*0.17);
  pop();
  
  if (seconds == 0){
    //game start is actually first phase
    final_score = score
    setupFinal()
    
    // ??
    // restartGame = true;
    // gameEnd();
  }
  
  //Display total score, each player's score and damage taken by the ship
  //PLAYER 1 SCORE
  push();
  fill(255)
  textAlign(LEFT);
  textFont(header, 40);
  text("RABBIT", width*0.05, height*0.05);
  pop();
  
  push();
  fill(255)
  textAlign(LEFT);
  textFont(header, 40);
  text("SCORE", width*0.05, height*0.08);
  pop();
  
  push();
  fill(255)
  textAlign(LEFT);
  textFont(number, 60);
  text(p1_score, width*0.15, height*0.08);
  pop();
  
  
  //PLAYER 2 SCORE
  push();
  fill(255)
  textAlign(LEFT);
  textFont(header, 40);
  text("SMILE", width*0.05, height*0.14);
  pop();
  
  push();
  fill(255)
  textAlign(LEFT);
  textFont(header, 40);
  text("SCORE", width*0.05, height*0.17);
  pop();
  
  push();
  fill(255)
  textAlign(LEFT);
  textFont(number, 60);
  text(p2_score, width*0.15, height*0.17);
  pop();
  
  //TOTAL SCORE
  push();
  fill(255)
  textAlign(LEFT);
  textFont(header, 40);
  text("TOTAL", width*0.05, height*0.25);
  pop();
  
  push();
  fill(255)
  textAlign(LEFT);
  textFont(number, 60);
  text(score, width*0.15, height*0.26);
  pop();
  
  //DAMAGE TAKEN
  push();
  fill(255)
  textAlign(RIGHT);
  textFont(header, 40);
  text("DAMAGE", width*0.95, height*0.05);
  pop();
  
  push();
  fill(255)
  textAlign(RIGHT);
  textFont(header, 40);
  text("TAKEN", width*0.95, height*0.08);
  pop();
  
  push();
  fill(255)
  textAlign(RIGHT);
  textFont(number, 60);
  text(damage_taken, width*0.85, height*0.08);
  pop();
  
  text(score, 10, 60);
  text(p1_score + " " + p2_score, 10, 90);
  text(damage_taken, 10, 120);
}



//Stage settings: difficulty level varies with time
function updateDifficulty(){
  if(seconds_elapsed > 80){
    //settings after 80s
    max_rockets = 5
    rocket_delay = 0
    rocket_speed = 6
  }
  else if(seconds_elapsed > 70){
    //settings after 70
    
    //70-80 easy
    max_rockets = 2
    rocket_delay = 1
    rocket_speed = 1
  } 
  else if(seconds_elapsed > 50){
    //settings after 50s
    
    //50-70 hard
    max_rockets = 4
    rocket_delay = 0
    rocket_speed = 5
  } 
  else if(seconds_elapsed > 40){
    //settings after 40s
    //40-50 easy
    max_rockets = 2
    rocket_delay = 1
    rocket_speed = 1
  } 
  else if(seconds_elapsed > 20){
    //settings after 20s
    
    //20-40 hard
    max_rockets = 3
    rocket_delay = 0
    rocket_speed = 5
  } 
  else if(seconds_elapsed > 0){
    //settings at the start
    
    //0-20 easy
    max_rockets = 2
    rocket_delay = 3
    rocket_speed = 1
  } 
}