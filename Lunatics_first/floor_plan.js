let walls;
let start;
let gun_seat;
let board;
let fires;
let fire_image;

let bgColor = [255, 255, 255]

let m = [	[1,1,1,1,1,1,1,1,1],
           	[1,1,1,1,3,1,1,1,1],
           	[1,1,1,0,0,0,1,1,1],
           	[1,1,0,0,0,0,0,1,1],
          	[1,3,0,0,2,0,0,3,1],
            [1,1,0,0,0,0,0,1,1],
            [1,1,1,0,0,0,1,1,1],
           	[1,1,1,1,3,1,1,1,1],
            [1,1,1,1,1,1,1,1,1]
          ]

let avail_squares = [];


function SetupFloorPlan(){
  
  fires = new Group()
  fire_image = loadImage('fire.png')
  	//load image etc..
  let siz = 30;
  
  gun_seat = new Group();
  active_grid = new Group();
  
  walls = new Group();
  board = new Group();
  let x = width/2 - siz*4;
  let y = height/2 - siz*4;
  
  for(let i = 0;i < 9;i++){
   for(let j = 0;j < 9;j++){
     let grid = createSprite(x+i*siz,y+j*siz,siz,siz)
     if (m[j][i] == 0){
       grid.addImage(loadImage('tile.png'));
       active_grid.add(grid);
       avail_squares.push([i,j]);
     }
      if(m[j][i] == 1){
        walls.add(grid);
      	grid.shapeColor = color(0,255,0,0);
      }else if(m[j][i] == 2){
        grid.shapeColor = color(0,255,0,100);
        player_x = i
        player_y = j
      }else if(m[j][i] == 3){
        grid.addImage(loadImage('gun_seat.png'));
        gun_seat.add(grid);
      }
        
      board.add(grid)	
   }

  } 
  player1 = createSprite(x+player_x*siz*0.8,y+player_y*siz,siz*0.5,siz*0.5)
  player1.addImage(loadImage('character_1.png'))
  player1.setCollider('circle', 0,3,10)
  // player1.debug = true
  player2 = createSprite(x+player_x*siz*1.2,y+player_y*siz,siz*0.5,siz*0.5)
  player2.addImage(loadImage('character_2.png'))
  player2.setCollider('circle', 0,3,10)
  // player2.debug = true
  


}

function createFire(){
  siz = 30;
  x = width/2 - siz*4;
  y = height/2 - siz*4;

  
  rand_num = Math.floor(Math.random()*avail_squares.length)
  
  fire = createSprite(x+avail_squares[rand_num][0]*siz,y+avail_squares[rand_num][1]*siz,siz,siz)
  // fire = createSprite(x+5*siz,y+5*siz,siz,siz)
  fire.addImage(fire_image)
  fire.setCollider('circle', 0,3,10)
  // fire.debug = true
  
  fires.add(fire);
}

function playerOnMap(){ 
  player1.collide(walls)
  player2.collide(walls)
  fires.overlap(player1, extinguishFire);
  fires.overlap(player2, extinguishFire);
  
  drawSprites(board)
  drawSprites(walls);
  drawSprites(fires);
  drawSprite(player1);
  drawSprite(player2);
  
  drawShipHP()

}

function extinguishFire(fire, player) {
  fire.remove()
}

function drawShipHP(){
  ship_max_hp = 10
  shiphp = 10 - fires.size()

  if (shiphp <= 0){
    gameStart = false;
    over = true
    
    game_time = 0 //prevent timehandler from triggering
  }
  
  if (shiphp < 2)
  {
    fill(255, 0, 0);
  }  
  else if (shiphp < 5)
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
  drawWidth = (shiphp / ship_max_hp) * rectWidth;
  rect(width/2-rectWidth/2, height/2+250, drawWidth, 10);
  
  // Outline
  stroke(0);
  noFill();
  rect(width/2-rectWidth/2, height/2+250, rectWidth, 10);
}
  
function seatEntered(){ 
  print("goal!!")
}