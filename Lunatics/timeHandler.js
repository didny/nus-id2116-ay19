let start_time, time_elapsed, seconds_elapsed;
let game_time = 120; //default 100
let last_rocket_spawn = 7;
let rocket_delay = 1
let max_rockets = 15
let rocket_speed = 2

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
  text(p1_score, width*0.16, height*0.08);
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
  text(p2_score, width*0.16, height*0.17);
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
  text(score, width*0.16, height*0.26);
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
  text(damage_taken, width*0.82, height*0.08);
  pop();
  
  // text(score, 10, 60);
  // text(p1_score + " " + p2_score, 10, 90);
  // text(damage_taken, 10, 120);
}



//Stage settings: difficulty level varies with time
function updateDifficulty(){
  if(seconds_elapsed > 75){
    //settings after 80s
    max_rockets = 15
    rocket_delay = 0
    rocket_speed = 6
  }
  else if(seconds_elapsed > 60){
    //settings after 70
    
    //70-80 easy
    max_rockets = 10
    rocket_delay = 1
    rocket_speed = 4
  } 
  else if(seconds_elapsed > 50){
    //settings after 50s
    
    //50-70 hard
    max_rockets = 15
    rocket_delay = 0
    rocket_speed = 4
  } 
  else if(seconds_elapsed > 40){
    //settings after 40s
    //40-50 easy
    max_rockets = 7
    rocket_delay = 1
    rocket_speed = 5
  } 
  else if(seconds_elapsed > 15){
    //settings after 20s
    
    //20-40 hard
    max_rockets = 10
    rocket_delay = 0
    rocket_speed = 3
  } 
  else if(seconds_elapsed > 0){
    //settings at the start
    
    //0-20 easy
    max_rockets = 5
    rocket_delay = 1
    rocket_speed = 2
  } 
}