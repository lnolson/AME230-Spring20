//  Heart
//  This project is based on p5js sketch by Daniel Shiffman.
//  https://editor.p5js.org/codingtrain/sketches/C0kJ-BjYW
//
//  Via Twitter, Shiffman credits this MathWorld webpage for the math.
//  http://mathworld.wolfram.com/HeartCurve.html

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(25);
  
  let finish = (frameCount % 240) / 480.0;
  
  translate(400.0, 300.0);
  
  strokeWeight(4.0);
  stroke(255);
  fill(255,25,25,255);
  beginShape();
  
  let heartSize = 16.0;
  
  var percent = 0.0;
  while (percent <= finish) {
    let a = map(percent, 0.0, 0.5, 0.0, TWO_PI);
    
    let x = (16.0 * pow(sin(a), 3.0)) * heartSize;
    let y = (13.0 * cos(a) - 5.0 * cos(2 * a) - 2.0 * cos(3.0 * a) - cos(4.0 * a)) * -heartSize;
    
    vertex(x, y);
    
    percent += 0.002;
  }
  
  endShape();
  
  if (finish >= 0.49) {
    noLoop();
  }
}