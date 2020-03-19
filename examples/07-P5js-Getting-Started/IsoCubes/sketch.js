function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(128);
  
  strokeWeight(1);
  let count = 6;
  let x0 = 100.0;
  let y = height - 50.0;
  while (count >= 1) {
    
    let x = x0;
    let i = 0;
    while (i < count) {
      cube(x, y, 100, 100);
      
      x += 100.0;
      i += 1;
    }
    
    count = count - 1;
    y -= 75.0;
    x0 += 50.0;
  }
  
  noLoop();
}


function cube(cubeX, cubeY, w, h) {
  let cubeMidX = cubeX + (w / 2.0)
  let cubeMaxX = cubeX + w
  let cubeY1 = cubeY - (h / 4.0)
  let cubeY2 = cubeY - (h / 4.0) * 2.0
  let cubeY3 = cubeY - (h / 4.0) * 3.0
  let cubeMaxY = cubeY - h
  
  stroke(0);
  fill(102);
  beginShape();
  vertex(cubeX, cubeY1);
  vertex(cubeMidX, cubeY);
  vertex(cubeMidX, cubeY2);
  vertex(cubeX, cubeY3);
  endShape(CLOSE);
  
  fill(178);
  beginShape();
  vertex(cubeMidX, cubeY);
  vertex(cubeMaxX, cubeY1);
  vertex(cubeMaxX, cubeY3);
  vertex(cubeMidX, cubeY2);
  endShape(CLOSE);
  
  fill(76);
  beginShape();
  vertex(cubeX, cubeY3);
  vertex(cubeMidX, cubeY2);
  vertex(cubeMaxX, cubeY3);
  vertex(cubeMidX, cubeMaxY);
  endShape(CLOSE);
  
}