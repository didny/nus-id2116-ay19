let obit_ring, globe;
let p1_cannon, p2_cannon;
let p1bullets, p2bullets;
let enemy;
let enemy_rocket;
let score = 0;
let p1_score = 0;
let p2_score = 0;
let damage_taken = 0;
var MARGIN = 40;
let p1_bullet_last = 0;
let p2_bullet_last = 0;
let max_bullet = 50;
//lower to increase bullet per second
let bullet_delay = 100
let explode_group = [];

function enemySetup() {
  enemy_rocket = loadImage('enemy_1.png');
  p1_bullet = loadImage('P1_bullet.png');
  p2_bullet = loadImage('P2_bullet.png')
  
  globe = createSprite(width/2, height/2);
  globe.addImage(loadImage('globe.png'));
  
  obit_ring = createSprite(width/2, height/2);
  obit_ring.addImage(loadImage('obit.png'));
  obit_ring.setCollider('circle', 0, 0, 100);
  //obit_ring.debug = true;
  
  p1_cannon = createSprite(width/2, height/2);
  p1_cannon.addImage(loadImage('P1_gun.png'));
  
  p2_cannon = createSprite(width/2, height/2);
  p2_cannon.addImage(loadImage('P2_gun.png'));
  p2_cannon.rotation = 90;
  
  enemy = new Group();
  p1bullets = new Group();
  p2bullets = new Group();
  // explode_group = new Group();
}


function enemyUpdate() {
  
  globe.rotation = millis()*0.05;
  
  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
    if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
    if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
    if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }
  
  //bullet hits asteroid
  enemy.overlap(p1bullets, asteroidHitBulletA);
  enemy.overlap(p2bullets, asteroidHitBulletB);
  
  //asteroid hits the ship
  enemy.overlap(obit_ring, asteroidHitShip);

  updateTime();
  rocketMovementUpdate()
  respawn();
  updateDifficulty();
  drawExplosions()
}


function p1Shoot(){
  time_now = millis()
  
  if (p1bullets.size() < max_bullet && (time_now - p1_bullet_last)>bullet_delay) {
    shootMusic.setVolume(0.05);
    shootMusic.play();
    var p1bullet = createSprite(rabbit_cannon.position.x, rabbit_cannon.position.y);
    
    r = -160
    theta = rabbit_cannon.rotation + 90
    polar = polarToC(r,theta)
    p1bullet.setCollider('circle', polar[0], polar[1], 10);
    
    //p1bullet.debug = true
    
    p1bullet.rotation = rabbit_cannon.rotation
    p1bullet.addImage(p1_bullet);
    p1bullet.setSpeed(5+rabbit_cannon.getSpeed(), rabbit_cannon.rotation-90);
    p1bullet.life = 90;
    p1bullets.add(p1bullet);
    p1_bullet_last = time_now
  }
  
}


function p2shoot(){
   time_now = millis()
  if (p2bullets.size() < max_bullet && (time_now - p2_bullet_last)>bullet_delay) {
    shootMusic.setVolume(0.05);
    shootMusic.play();
    var p2bullet = createSprite(smile_cannon.position.x, smile_cannon.position.y);
    
    r = 160
    theta = smile_cannon.rotation -90
    polar = polarToC(r,theta)
    p2bullet.setCollider('circle', polar[0], polar[1], 10);
    
    //p2bullet.debug = true
    
    p2bullet.rotation = smile_cannon.rotation
    p2bullet.addImage(p2_bullet);
    p2bullet.setSpeed(5+smile_cannon.getSpeed(), smile_cannon.rotation-90);
    p2bullet.life = 90;
    p2bullets.add(p2bullet);
    p2_bullet_last = time_now
  }
}

function rotateCannon(cannon, value){
   cannon.rotation += value;
}


function createERocket(type, x, y, left = true) {
  var rocket = createSprite(x, y);
  rocket.type = type;
  
  rocket.maxSpeed = 5 ;
  //rocket.debug = true;
  
  if(type == 3){
    rocket.scale = 1;
    rocket.addImage(loadImage('enemy_1.png'));
  }
  else if(type == 2){
    rocket.scale = 0.75;
    rocket.addImage(loadImage('enemy_2.png'));
    position = rocket.position
    angle = calcRotationToCentre(position.x,position.y) - 90
    if(left){
      rocket.addSpeed(0.5*sqrt(rocket_speed) ,angle+90)
    } else {
      rocket.addSpeed(0.5*sqrt(rocket_speed) ,angle-90)
    }
  }
  if(type == 1){
    rocket.scale = 0.7;
    rocket.addImage(loadImage('enemy_3.png'));
  }

  rocket.mass = 2+rocket.scale;
  rocket.setCollider('circle', 0, 0, 40);
  enemy.add(rocket);
  return rocket;
}


function rocketMovementUpdate(){
  i = 0
  while(i < enemy.size()){
    var temp_rocket = enemy.get(i);
    temp_rocket.rotation = temp_rocket.getDirection()+90
    temp_rocket.attractionPoint(0.003*rocket_speed, width/2, height/2);
    if (temp_rocket.type == 2){
      position = temp_rocket.position
      angle = calcRotationToCentre(position.x,position.y) - 90
      temp_rocket.attractionPoint(0.002*(rocket_speed**2), width/2, height/2);
    }
    if (temp_rocket.type == 1){
      position = temp_rocket.position
      angle = calcRotationToCentre(position.x,position.y) - 90
      temp_rocket.attractionPoint(0.02*rocket_speed, width/2, height/2);
    }
    i++
  }
}


function asteroidHitBulletA(asteroid, bullet) {
  addExplosion(asteroid.position.x, asteroid.position.y)
  var newType = asteroid.type - 1;
  score += 4 - asteroid.type 
  p1_score += 4 - asteroid.type 
  position = asteroid.position
  bullet.remove();
  asteroid.remove();
  if(newType>1) {
    createERocket(newType, position.x, position.y, true);
  }
  if(newType>0) {
    // createERocket(newType, position.x, position.y, true);
    createERocket(newType, position.x, position.y, false);
  }
}


function asteroidHitBulletB(asteroid, bullet) {
  addExplosion(asteroid.position.x, asteroid.position.y)
  var newType = asteroid.type - 1;
  score += 4 - asteroid.type
  p2_score += 4 - asteroid.type 
  position = asteroid.position
  bullet.remove();
  asteroid.remove();
  if(newType>1) {
    createERocket(newType, position.x, position.y, true);
  }
  if(newType>0) {
    // createERocket(newType, position.x, position.y, true);
    createERocket(newType, position.x, position.y, false);
  }
}


function asteroidHitShip(asteroid, ship) {
  // animation(explosion_animation, )
  // temp_explosion = explosion_animation.clone()
  // temp_explosion.frameDelay = 8
  // temp_explosion.looping = false
  // explode_group.push([temp_explosion,asteroid.position.x, asteroid.position.y]);
  
  addExplosion(asteroid.position.x, asteroid.position.y)
  
  asteroid.remove();
  
  damage_taken += 1;
  createFire();
}

function addExplosion(x,y){
  temp_explosion = explosion_animation.clone()
  temp_explosion.frameDelay = 8
  temp_explosion.looping = false
  explode_group.push([temp_explosion,x,y]);
}

function drawExplosions() {
  for (i=0; i<explode_group.length;i++){
    explode_group[i][0].draw(explode_group[i][1],explode_group[i][2])
    if (explode_group[i][0].getFrame() == 3){
      explode_group.splice(i, 1)
    }
  }
}

function calcRotationToCentre(x,y) {
  // The atan2 functions return arctan y/x in the interval [−π , +π] radians
  // The atan2 functions return arctan y/x in the interval [−π , +π] radians
  Bx = width/2
  By = 0
  Cx = width/2
  Cy = height/2
  Ax = x
  Ay = y

  Dir_C_to_A = Math.atan2(Ay - Cy, Ax - Cx);
  Dir_C_to_B = Math.atan2(By - Cy, Bx - Cx);
  Angle_ACB = Dir_C_to_A - Dir_C_to_B;

  // Handle wrap around
  Pi = Math.acos(-1);  // or use some π constant
  if (Angle_ACB > Pi) Angle_ACB -= 2*Pi;
  else if (Angle_ACB < -Pi) Angle_ACB += 2*Pi;

  Angle_ACB = (Angle_ACB/Pi) * 180
  
  return (Angle_ACB+180)%360
}


function respawn(){
  total_rockets = max_rockets
  //non stop respawn
  if (enemy.size() < max_rockets){
    // num_respawn = total_rockets - enemy.size()
    // for (i=0; i<num_respawn; i++){
    //   spawnRandomRocket()
    // }
    
    if (seconds_elapsed > last_rocket_spawn){
      spawnRandomRocket()
      last_rocket_spawn = seconds_elapsed + rocket_delay - 1
    }
  }
}


function spawnRandomRocket(){
  rand_num = Math.floor(Math.random()*4)
  switch(rand_num) {
  case 0:
    createERocket(3, 0, random(0, height));
    break;
  case 1:
    createERocket(3, random(0, width), 0);
    break;
  case 2:
    createERocket(3, width, random(0, height));
    break;
  case 3:
    createERocket(3, random(0, width), height)
    break;
  }
}


function polarToC(r, theta){
  return [r * cos(radians(theta)), r * sin(radians(theta))];
}