function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(128);
  
  for (let i = 0; i < 600; i++) {
    let x1 = random(0.0, width - 10.0);
    let y1 = random(0.0, height - 10.0);
    
    let x2 = x1 + random(10.0, 50.0);
    let y2 = y1 + random(10.0, 50.0);
    
    line(x1, y1, x2, y2);
  }
  
  noLoop();
}