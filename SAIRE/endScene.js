let endScene = {

  setup:function(){
  },
  update:function(){
  microBit.setButtonACallback(function(){
    console.log("buttonA pressed");
   hero.removeSprites();
    hero = new Group();
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

    
    currentScene = "title";
  });
    microBit.setButtonBCallback(function(){
    console.log("buttonB pressed");
    currentScene = "title";
  });
  },
  
  draw:function(){

    animation(death,width/2,height/2)
    
    push();
    fill(255);
    textFont(arcadeFont);
    textAlign(CENTER);
    textSize(20);
    text("score:" + hero.length,width/2 + 5,height/2 - 80);
    pop();
    
     
  },
  
  /*reset:function(){
    
    // reset function here

    hero.removeSprites();
    hostages.removeSprites();
    meteor.removeSprites();
    backgroundSound.play();
  
    createCanvas(600, 400);

  hero = new Group();
  meteor = new Group();
  hostages = new Group();
  bullets = new Group();
  let meteorSpeed = 1; 
  
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
  } // end of reset function 
  }, */
  
  
  nextScene:function(){
  	currentScene = "title"
  }

}