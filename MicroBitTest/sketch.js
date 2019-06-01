let count = 0;
let microBit;
let microBit2;
function setup() {
  createCanvas(400, 400);


  microBit=new uBit();
  microBit2=new uBit();


  button = createButton('connect microBit');
  button.mousePressed(searchDevice); // attach button listener
  button2 = createButton('connect microBit');
  button2.mousePressed(searchDevice2); // attach button listener

  microBit.setButtonACallback(function(){
    console.log("Frame buttonA pressed");
  });

  microBit.setButtonBCallback(function(){
    console.log("Frame buttonB pressed");
  });

  microBit.onConnect(function(){
    console.log("connected");
  });

  microBit.onDisconnect(function(){
    console.log("disconnected");
  });
  microBit2.setButtonACallback(function(){
    console.log("Frame buttonA pressed");
  });

  microBit2.setButtonBCallback(function(){
    console.log("Frame buttonB pressed");
  });

  microBit2.onConnect(function(){
    console.log("connected");
  });

  microBit2.onDisconnect(function(){
    console.log("disconnected");
  });
  angleMode(DEGREES);
}

function draw() {
  background(220);
  textSize(25);
  textAlign(CENTER)
  angleX = map(-microBit.getAccelerometer().x,-1024,1024,0,360);
  angleY = map(-microBit.getAccelerometer().y,-1024,1024,0,360);
  
  
  text("mb1:connected:"+microBit.connected,width/2,height/2-50);
  text("X:"+angleX,width/2,height/2-25);
  text("Y:"+angleY,width/2,height/2);
  text("mb2:connected:"+microBit2.connected,width/2,height/2+25);
  angleX = map(-microBit2.getAccelerometer().x,-1024,1024,0,360);
  angleY = map(-microBit2.getAccelerometer().y,-1024,1024,0,360);

  text("X:"+angleX,width/2,height/2+50);
  text("Y:"+angleY,width/2,height/2+75);



}

function howdy(){
  count = "howdy"
}

function updateCount(num){
  count = num;
}
function updateMicroBit(mbit,mbit2){
  microBit = mbit;
  microBit2 = mbit2;
  // microBit.setButtonACallback(function(){
  //   console.log("buttonA pressed");
  // });

  // microBit.setButtonBCallback(function(){
  //   console.log("buttonB pressed");
  // });

  // microBit.onConnect(function(){
  //   console.log("connected");
  // });

  // microBit.onDisconnect(function(){
  //   console.log("disconnected");
  // });
}



function searchDevice(){
  microBit.searchDevice();
}
function searchDevice2(){
  microBit2.searchDevice();
}
function mousePressed(){
  searchDevice();
  

}