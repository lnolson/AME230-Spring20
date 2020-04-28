function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  
  stroke(128);
  line(400,0,400,600);
  
  fill(0);
  textFont('Verdana');
  textSize(30);
  textAlign(CENTER);
  text("Center Example", 400, 150);
  
  textAlign(LEFT);
  text("Left Example", 400, 300);
  
  textAlign(RIGHT);
  text("Right Example", 400, 450);
}