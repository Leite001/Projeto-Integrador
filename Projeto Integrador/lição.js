function setup() {
    createCanvas(400, 400);
    background(120);
    circle(200,150,100);
    rect(50,300,50,50);
    rect(300,300,50,50);
  
  
  }
  
  function draw() {
    
  
    
  }
  
  function mouseClicked()
  {
  
    if(mouseX > 50 && mouseX < 100 && mouseY > 300 && mouseY < 350)
      {
        fill(0,255,0);
        circle(200,150,100);
      }
    
    if(mouseX > 300 && mouseX < 350 && mouseY > 300 && mouseY < 350)
      {
        fill(0,0,255);
        circle(200,150,100);
      }
    
    
    
    
  }