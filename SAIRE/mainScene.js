let mainScene = {
  setup:function(){
  	//load image etc..
    backgroundSound.play();
 
    createCanvas(600, 400);
  
  hero = new Group();
  meteor = new Group();
  hostages = new Group();
  bullets = new Group();
  let meteorSpeed = 5; 
    
  function createMeteor(x, y) {
  var a = createSprite(random(width), random(height),80,80);
  a.addAnimation("meteorImg", "meteor1.png", "meteor2.png");
  a.setSpeed(meteorSpeed, random(360));
  a.rotationSpeed = 0.5;
  //a.debug = true;
  // a.friction = random(0.1, 0.2);

  a.mass = 2+a.scale;
  a.setCollider('circle', 0, 0, 50);
  meteor.add(a);
  return a;
} 

  
  
  for (var k = 0; k < 1; k++) {
    var b = createSprite(
      random(width), random(height),
      random(10, 50), random(5, 25));
    b.addImage(spaceshipImg);
    b.shapeColor = color(255, 200, 255);
    b.friction = random(0.8, 0.9);
    b.rotateToDirection = true;
    hero.add(b);
    b.mouseActive = true;
  }

  for(var i = 0; i<1; i++) {
    var ang = random(360);
    var px = width/2 + 1000 * cos(radians(ang));
    var py = height/2+ 1000 * sin(radians(ang));
    createMeteor(px, py);
  }


  for(var j=0; j<1; j++) {
    var dot = createSprite(random(0, width), random(0, height),10,10);
    dot.addImage(hostageImg);
    hostages.add(dot);
  }
  
  },
  update:function(){
  microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
    currentScene = "pause";
    //noLoop();
  });
    
    
  },
  draw:function(){
    background(backgroundImg);
    
    push();
    fill(255);
    textSize(15);
    textFont(arcadeFont);
    text("score:" + hero.length, 10, 10, 70, 80);
    pop();
    
    push();
    fill(255);
    textSize(8);
    textFont(arcadeFont);
    text("press b to pause", 10, 40);
    pop();
    
    let accX = microBit.getAccelerometer().x
    let accY = microBit.getAccelerometer().y
    let posX = map(accX,-1024,1024,-400,1000);
    let posY = map(accY,-1024,1024,-400,1000);
  
  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<-MARGIN) s.position.x = width+MARGIN;
    if(s.position.x>width+MARGIN) s.position.x = -MARGIN;
    if(s.position.y<-MARGIN) s.position.y = height+MARGIN;
    if(s.position.y>height+MARGIN) s.position.y = -MARGIN;
  }

  for (var l = 0; l < hero.length; l++) {
    // console.log(hero.length);
    hero[l].attractionPoint(10, posX, posY);
    hero[l].velocity.x = (posX-hero[l].position.x)/10;
    hero[l].velocity.y = (posY-hero[l].position.y)/10;
  }

  if (hero.collide(meteor,explosionSsound))
    currentScene = "end";
    //console.log('COLLIDED');

  hero.overlap(hostages, collect);
  
  bullets.bounce(meteor, bulletSsound);

  //if (bullets.bounce(meteor));
  //bulletSound.play();
  
  function bulletSsound(){
    bulletSound.play();
  }
  
    
  function explosionSsound(){
    explodeSound.play()
    // reset function here
    //hero.removeSprites();
    hostages.removeSprites();
    meteor.removeSprites();
    backgroundSound.play();
  
    createCanvas(600, 400);

  //hero = new Group();
  meteor = new Group();
  hostages = new Group();
  bullets = new Group();
  let meteorSpeed = 5; 
  
  function createMeteor(x, y) {
  var a = createSprite(random(width), random(height),80,80);
  a.addAnimation("meteorImg", "meteor1.png", "meteor2.png");
  a.setSpeed(meteorSpeed, random(360));
  a.rotationSpeed = 0.5;
  //a.debug = true;
  // a.friction = random(0.1, 0.2);

  a.mass = 2+a.scale;
  a.setCollider('circle', 0, 0, 50);
  meteor.add(a);
  return a;
} 


  for(var i = 0; i<1; i++) {
    var ang = random(360);
    var px = width/2 + 1000 * cos(radians(ang));
    var py = height/2+ 1000 * sin(radians(ang));
    createMeteor(px, py);
  }


  for(var j=0; j<1; j++) {
    var dot = createSprite(random(0, width), random(0, height),10,10);
    dot.addImage(hostageImg);
    hostages.add(dot);
  } // end of reset function 
  } 
    
  function collect(collector,collected) {
  collected.remove();
  hallelujahSound.play();
  for(var k=0; k<1; k++) {
    var dot = createSprite(random(0, width), random(0, height),10,10);
    dot.addImage(hostageImg);
    hostages.add(dot);
  }
    
  for (var k = 0; k < 1; k++) {
    var b = createSprite(
      posX, posY, random(10, 50), random(5, 25));
    b.addImage(spaceshipImg);
    b.shapeColor = color(255, 200, 255);
    b.friction = random(0.8, 0.9);
    b.rotateToDirection = true;
    hero.add(b);
    b.mouseActive = true;
  }
}


 microBit.setButtonACallback(function() {
    for (var l = 0; l < hero.length; l++) {
    hero[l].attractionPoint(10, posX, posY);
    hero[l].velocity.x = (posX-hero[l].position.x)/10;
    hero[l].velocity.y = (posY-hero[l].position.y)/10;
    var bullet = createSprite(hero[l].position.x, hero[l].position.y,10,10);
    bullet.setSpeed(10, hero[l].rotation);
    bullet.life = 50;
    bullets.add(bullet)
    laserSound.play();
  } 
})

 drawSprites();
  },
  
  nextScene:function(){
  
  }

}