function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(128);
  
  let a = 0.0;
  let x = 20.0;
  
  stroke(255);
  noFill();
  beginShape();
  
  while (x + 20.0 < width) {
    
    let y = (sin(a) * 50.0) + 300.0
    
    vertex(x, y);
    
    x += 5.0;
    a += 0.2;
  }
  
  endShape();
  
  noLoop();
}