function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(128);
  
  // sky
  noStroke();
  fill(20, 40, 80);
  rect(0, 0, 800, 600);
  
  // ground
  fill(20, 80, 30);
  rect(0, 300, 800, 300);
  
  // house
  fill(216);
  rect(300, 200, 200, 200);
  
  // peak
  triangle(300, 200, 500, 200, 400, 100);
  
  // roof
  stroke(128);
  strokeWeight(9);
  strokeCap(ROUND);
  beginShape(LINES);
  vertex(300, 200);
  vertex(400, 100);
  vertex(400, 100);
  vertex(500, 200);
  endShape();
  
  // door
  stroke(0);
  strokeWeight(2);
  fill(204);
  rect(320, 250, 60, 150);
  
  // window
  fill(191);
  rect(410, 270, 60, 90);
  strokeWeight(4);
  strokeCap(SQUARE);
  line(440, 270, 440, 360);
  line(410, 315, 470, 315);
  
  // moon
  noStroke();
  fill(216);
  ellipse(650, 100, 80, 80);
  fill(20, 40, 80);
  ellipse(670, 100, 70, 70);
}