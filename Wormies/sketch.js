

var serial; //variable to hold an instance of the serial port library
var portName = '/dev/cu.usbmodem143102'; 
var inData;
var low1,mid1,high1,neut1;
var low2,mid2,high2,neut2;
var low3,mid3,high3,neut3;
var bg;
var l27;

function serialEvent() {
inData = Number(serial.readString());
print(int([inData]))
  console.log(inData)
}

function preload(){
 bg=loadImage("Background.png")
  low1= createImg("Blue-Happy.gif")
low2 = createImg("Red-Happy.gif")
low3 = createImg("Yellow-Happy.gif")
  mid1 = createImg("Blue-Anxiety.gif")
mid2 = createImg("Red-Anxiety.gif")
  mid3 = createImg("Yellow-Anxiety.gif")
  high1 = createImg("Blue-Angry.gif")
high2 = createImg("Red-Angry.gif")
  high3 = createImg("Yellow-Angry.gif")
  neut1 = createImg("Neutral Blue.png")
neut2 = createImg("Neutral Red.png")
  neut3 = createImg("Neutral Yellow.png")
  bgMusic = loadSound('Happy.mp3');
  beep = loadSound('Beep.mp3');
  l27 = loadImage("Legend27.jpeg")
  
}

function setup() {
  
  serial = new p5.SerialPort(); //a new instance of serial port library

  //set up events for serial communication
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);
  
  
  //open our serial port
  serial.open(portName);

//BUTTONS 1
  input = createInput();
  input.position(200, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What is your name?');
  greeting.position(198, 550);

  textAlign(CENTER);
  textSize(50);
//BUTTONS 2
  input2 = createInput();
  input2.position(700, 600);

  button = createButton('submit');
  button.position(input2.x + input2.width, 600);
  button.mousePressed(greet2);

  greeting2 = createElement('h2', 'What is your name?');
  greeting2.position(698, 550);

  textAlign(CENTER);
  textSize(50);
  
  
//BUTTONS 3
 input3 = createInput();
  input3.position(1200, 600);

  button = createButton('submit');
  button.position(input3.x + input3.width, 600);
  button.mousePressed(greet3);

  greeting3 = createElement('h2', 'What is your name?');
  greeting3.position(1198, 550);

  textAlign(CENTER);
  textSize(50);
  
  //MUSIC HERE
  bgMusic.loop()
}

function draw() {
  createCanvas(2000,500)
image(l27,200,50)
  
//BLUE HERE
  
 push()
   if(inData == 1){ //angryhigh
    low1.hide()
     neut1.hide() 
  mid1.hide()
      high1.show()
     
}
  pop()
  push()
if(inData == 2){//anx
    low1.hide()
     high1.hide()
     neut1.hide() 
  mid1.show()
 
}
pop()
  push()
  if(inData == 3){//happylow
     mid1.hide()
    high1.hide()
     neut1.hide() 
    low1.show()
   
    
}
  pop()
  
//RED HERE
push()
if(inData == 4){
low2.hide() 
mid2.hide()
neut2.hide()
high2.show()
high2.position (500,0)
  
}
pop()
push()
if(inData == 5){
low2.hide()
high2.hide()
neut2.hide()
mid2.show()
mid2.position(500,0)
  
}
pop()
push()
if(inData == 6){
mid2.hide()
high2.hide() 
neut2.hide() 
low2.show()
low2.position (500,0)
  
}
pop()
  
//YELLOW HERE
push()
if(inData == 7){
low3.hide()
mid3.hide()
neut3.hide() 
high3.show()
high3.position(1000,0) 
  
}
pop()
push()
if(inData == 8){
low3.hide() 
high3.hide()
neut3.hide() 
mid3.show()
mid3.position(1000,0)
   
}
pop()
push()
if(inData == 9){
mid3.hide()
high3.hide()
neut3.hide()
low3.show()
low3.position(1000,0) 
   
}
pop()
  
//POOPYBUTTHOLEENDSHERE
  
  if(inData == 1){
    beep.playMode('sustain');
    beep.play();
  }
  if(inData == 4){
    beep.playMode('sustain');
    beep.play();
  }
  if(inData == 7){
    beep.playMode('sustain');
    beep.play();
  }

}
//GREET 1
function greet() {
  const name = input.value();
  greeting.html('Where is ' + name + '?');
  input.value('');
}
//GREET2
function greet2() {
  const name = input2.value();
  greeting2.html('Where is ' + name + '?');
  input2.value('');
}
//GREET3
function greet3() {
  const name = input3.value();
  greeting3.html('Where is ' + name + '?');
  input3.value('');
}





//all my callback functions are down here:
//these are useful for giving feedback

function serverConnected(){
	console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}



function serialError(err){
  console.log('something went wrong with the port. ' + err);
}

function portClose(){
  console.log('the port was closed');
}

// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}