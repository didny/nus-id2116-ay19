      function blockContextMenu(){
        window.oncontextmenu = function(event) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        };
      }
      blockContextMenu();
      
      function mousePressed(){
        if(microBit != null){
        if (mouseButton === LEFT) {
           microBit.onButtonA(); 
        }
        if (mouseButton === RIGHT) {
           microBit.onButtonB(); 
        }
        microBit.connected = true;
        }
      }

      function mouseMoved() {
        
        if(microBit != null){
          microBit.accelerometer.x = map(mouseX,0,width,0,2048) - 1024;
          microBit.accelerometer.y = map(mouseY,0,height,0,2048) - 1024;          
        }

      }